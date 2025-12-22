import config from "./config";

/**
 * Rate limiting 요청 큐
 * 1초당 최대 요청 수를 제한합니다.
 */

interface QueueItem<T> {
  task: () => Promise<T>;
  resolve: (value: T) => void;
  reject: (error: Error) => void;
}

export class RequestQueue {
  private queue: QueueItem<unknown>[] = [];
  private processing = false;
  private requestCount = 0;
  private lastResetTime = Date.now();

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
   * 큐를 처리합니다.
   */
  private async processQueue(): Promise<void> {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length > 0) {
      // 1초마다 카운터 리셋
      const now = Date.now();
      if (now - this.lastResetTime >= 1000) {
        this.requestCount = 0;
        this.lastResetTime = now;
      }

      // 제한에 도달하면 대기 (config에서 실시간으로 가져옴)
      if (this.requestCount >= config.maxRequestsPerSecond) {
        const waitTime = 1000 - (now - this.lastResetTime);
        if (waitTime > 0) {
          await this.sleep(waitTime);
        }
        this.requestCount = 0;
        this.lastResetTime = Date.now();
      }

      const item = this.queue.shift();
      if (!item) break;

      this.requestCount++;

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
    return {
      queueLength: this.queue.length,
      requestCount: this.requestCount,
      maxRequestsPerSecond: config.maxRequestsPerSecond,
    };
  }

  /**
   * 큐를 초기화합니다.
   */
  clear(): void {
    this.queue = [];
    this.requestCount = 0;
  }
}

// 기본 큐 인스턴스 (제한 수치는 config를 따름)
export const requestQueue = new RequestQueue();

export default requestQueue;
