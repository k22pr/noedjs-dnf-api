import api from "../api";
let opt = {
  wordType: api.config.characters.wordType.match,
  limit: 1
};

getChar(api.config.servers.cain, "쑤남");
/**
 * (릭터가 존재하는 서버명과 캐릭터의 이름을 입력하면 해당 캐릭터의 정보를 출력해주는 함수)
 *
 * @param {string} serverName (검색할 서버의 이름을 입력합니다.)
 * @param {string} charName (검색할 캐릭터의 이름을 입력합니다.)
 */
async function getChar(serverName, charName) {
  //해당 캐릭터의 정보를 받아옵니다.
  const charBase = await api.characters.character(serverName, charName, opt).then(data => {
    if (data.err) return console.log(data.err);
    return data.rows[0];
  });

  //해당 캐릭터가 장착하고 있는 장비정보를 받아옵니다.
  var equipment = await api.characters.equip.equipment(serverName, charBase.characterId).then(data => {
    if (data.err) return console.log(data.err);
    return data;
  });

  opt = {
    limit: 20,
    code: 505
  };

  //해당 캐릭터의 타임라인중 505(지옥파티 에픽획득) 정보를 받아옵니다.
  var timeline = await api.characters.timeline(serverName, charBase.characterId, opt).then(data => {
    if (data.err) return console.log(data.err);
    return data;
  });

  console.log("\n\t [캐릭터 정보]");
  console.log(charBase);

  console.log("\n\t [창작한 장비]");
  equipment.equipment.map(now => {
    console.log(`${now.slotName} - ${now.itemName}(${now.itemRarity})`);
  });

  console.log("\n\t [최근 획득 에픽]");
  timeline.timeline.rows.map(now => {
    console.log(`${now.data.dungeonName} : ${now.data.itemName}`);
  });
}
