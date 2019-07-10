/**
 * 해당 캐릭터가 장착한 장비 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const equipment: (serverId: string, characterId: string) => any;
/**
 * 해당 캐릭터가 장착한 아바타 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const avatar: (serverId: string, characterId: string) => any;
/**
 * 해당 캐릭터가 장착한 크리쳐 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const creature: (serverId: string, characterId: string) => any;
/**
 * 해당 캐릭터가 장착한 휘장 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const flag: (serverId: string, characterId: string) => any;