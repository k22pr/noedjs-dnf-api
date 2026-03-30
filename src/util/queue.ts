import config from "./config";

/**
 * Rate limiting 요청 큐
 * 초당/분당 최대 요청 수를 제한합니다. (config에서 조절 가능)
 */

interface QueueItem<T> {
  task: () => Promise<T>;
  resolve: (value: T) => void;
  reject: (error: Error) => void;
}

export class RequestQueue {
  private queue: QueueItem<unknown>[] = [];
  private processing = false;
  private secondTimestamps: number[] = [];
  private minuteTimestamps: number[] = [];

  /**
   * 큐에 요청을 추가합니다.
   * @param task 실행할 비동기 작업
   * @returns 작업 결과 Promise
   */
  async add<T>(task: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.queue.push({
        task,
        resolve: resolve as (value: unknown) => void,
        reject,
      });
      this.processQueue();
    });
  }

  /**
   * 슬라이딩 윈도우 기반으로 대기 시간을 계산합니다.
   */
  private getWaitTime(): number {
    const now = Date.now();

    // 1초 윈도우 밖의 타임스탬프 제거
    while (
      this.secondTimestamps.length > 0 &&
      now - this.secondTimestamps[0] >= 1000
    ) {
      this.secondTimestamps.shift();
    }
    // 1분 윈도우 밖의 타임스탬프 제거
    while (
      this.minuteTimestamps.length > 0 &&
      now - this.minuteTimestamps[0] >= 60_000
    ) {
      this.minuteTimestamps.shift();
    }

    // 초당 제한 초과 시 가장 오래된 타임스탬프 기준으로 대기
    if (this.secondTimestamps.length >= config.maxRequestsPerSecond) {
      return 1000 - (now - this.secondTimestamps[0]) + 1;
    }
    // 분당 제한 초과 시 가장 오래된 타임스탬프 기준으로 대기
    if (this.minuteTimestamps.length >= config.maxRequestsPerMinute) {
      return 60_000 - (now - this.minuteTimestamps[0]) + 1;
    }

    return 0;
  }

  /**
   * 요청 타임스탬프를 기록합니다.
   */
  private recordRequest(): void {
    const now = Date.now();
    this.secondTimestamps.push(now);
    this.minuteTimestamps.push(now);
  }

  /**
   * 큐를 처리합니다.
   */
  private async processQueue(): Promise<void> {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length > 0) {
      const waitTime = this.getWaitTime();
      if (waitTime > 0) {
        await this.sleep(waitTime);
        continue;
      }

      const item = this.queue.shift();
      if (!item) break;

      this.recordRequest();

      try {
        const result = await item.task();
        item.resolve(result);
      } catch (error) {
        item.reject(error as Error);
      }
    }

    this.processing = false;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * 현재 큐 상태를 반환합니다.
   */
  get status() {
    const now = Date.now();
    return {
      queueLength: this.queue.length,
      requestsInLastSecond: this.secondTimestamps.filter((t) => now - t < 1000)
        .length,
      requestsInLastMinute: this.minuteTimestamps.filter(
        (t) => now - t < 60_000,
      ).length,
      maxPerSecond: config.maxRequestsPerSecond,
      maxPerMinute: config.maxRequestsPerMinute,
    };
  }

  /**
   * 큐를 초기화합니다.
   */
  clear(): void {
    this.queue = [];
    this.secondTimestamps = [];
    this.minuteTimestamps = [];
  }
}

// 기본 큐 인스턴스
export const requestQueue = new RequestQueue();

export default requestQueue;
