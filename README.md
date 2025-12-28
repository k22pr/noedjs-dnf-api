<h1 align="center">던전 앤 파이터 API</h1>
<p align="center">
 <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge">
  </a>
 <a href="https://www.npmjs.com/package/dnf-api">
    <img alt="code style: prettier" src="https://img.shields.io/npm/v/dnf-api.svg?style=for-the-badge">
  </a>
 <a href="https://github.com/k22pr/dnf-api/blob/master/LICENSE">
    <img alt="code style: prettier" src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge">
  </a>
</p>
<p align="center">
더 쉽게 사용할 수 있도록 만든 던전 앤 파이터 API 입니다.<br>
API 키는 <a href="https://developers.neople.co.kr/main" target="_blank">developers.neople.co.kr</a>에서 발급 받으 실 수 있습니다.<br>
</p>

---

## 목차

- [서버 정보 (Servers)](#서버정보)
- [캐릭터](#캐릭터)
  - [캐릭터 검색](#캐릭터-검색)
    - [캐릭터 기본 정보](#캐릭터-기본-정보)
    - [타임라인 정보](#타임라인-정보)
    - [능력치 정보](#능력치-정보)
  - [캐릭터 장비](#캐릭터-장비)
    - [장착 장비 정보](#장착-장비-정보)
    - [장착 아바타 정보](#장착-아바타-정보)
    - [장착 크리쳐 정보](#장착-크리쳐-정보)
    - [장착 휘장 정보](#장착-휘장-정보)
  - [버프 스킬 강화 (스위칭)](<#버프-스킬-강화-(스위칭)>)
    - [스위칭 장착 장비](#스위칭-장착-장비)
    - [스위칭 장착 아바타](#스위칭-장착-아바타)
    - [스위칭 장착 크리처](#스위칭-장착-크리처)
  - [장착 안개 융화](#장착-안개-융화)
  - [캐릭터 명성 검색](#캐릭터-명성-검색)
- [경매장](#경매장)
  - [경매장 등록 아이템 검색 (이름)](<#경매장-등록-아이템-검색-(이름)>)
  - [경매장 등록 아이템 조회 (경매장 등록 번호)](<경매장-등록-아이템-조회-(경매장-등록-번호)>)
  - [경매장 복수 아이템 검색](#경매장-복수-아이템-검색)
  - [경매장 시세 검색](#경매장-시세-검색)
- [아이템](#아이템)
  - [아이템 검색](#아이템-검색)
  - [아이템 상세 정보](#아이템-상세-정보)
  - [아이템 상점 판매 정보](#아이템-상점-판매-정보)
  - [아이템 해시태그](#아이템-해시태그)
- [아바타 마켓](#아바타-마켓)
  - [아바타 마켓 상품 검색](#아바타-마켓-상품-검색)
  - [아바타 마켓 상품 조회](#아바타-마켓-상품-조회)
  - [아바타 마켓 시세 검색](#아바타-마켓-시세-검색)
  - [아바타 마켓 해시태그](#아바타-마켓-해시태그)
- [직업](#직업)
  - [직업 정보](#직업-정보)
  - [직업별 스킬 리스트](#직업별-스킬-리스트)
  - [직업별 스킬 상세 정보](#직업별-스킬-상세-정보)
- [세트 아이템](#세트-아이템)
  - [세트 아이템 검색](#세트-아이템-검색)
  - [세트 아이템 상세 정보](#세트-아이템-상세-정보)
- [다중 조회](#다중-조회)
  - [다중 아이템 조회](#다중-아이템-조회)
  - [다중 세트 아이템 조회](#다중-세트-아이템-조회)
  - [다중 스킬 조회](#다중-스킬-조회)

---

### 설치

npm 으로 설치할 경우

```bash
npm install dnf-api
```

yarn 으로 설치할 경우

```bash
yarn add dnf-api
```

### 사용법

소스 상단에 dnf-dnfApi 를 호출하신 뒤 사용하실 수 있습니다.
혹은 ES5 문법 사용시 아래의 형태로 호출 하실 수 있습니다.

```js
import dnfApi from "dnf-api";
//or
var dnfApi = require("dnf-api");

//required
dnf.Config.key = "YOUR API KEY";

//optional
dnf.Config.hideOnErrorApiKey = true;
dnf.Config.hidekeyText = { HIDEKEY };
dnf.Config.timeout = 5000;

//아래에 소스코드를 작성합니다.
```

# 서버정보

던전앤 파이터 서버 정보를 불러옵니다.

서버목록애 대한 정보는 [이곳](https://developers.neople.co.kr/contents/guide/pages/all#%EC%84%9C%EB%B2%84)을 참고해주세요.

```js
let { error, data } = await dnf.Api.Server.List();
if (error) consola.error(error);
else {
  consola.info(data);
}
```

---

# 캐릭터

던전 앤 파이터 게임내 캐릭터에 관련된 API 입니다.

## 캐릭터 검색

캐릭터를 닉네임으로 검색하여 받아옵니다.

```js
let { error, data } = await dnf.Api.Characters.characterName(
  dnf.ServerNames.anton,
  "쑤남"
);
if (error) console.error(error);
else {
  console.info(data);
}
```

## 캐릭터 기본 정보

캐릭터에 대한 기본적인 정보를 받아옵니다.

```js
dnfApi.characters
  .characterId("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

## 타임라인 정보

캐릭터 ID 에 대한 타임라인 정보를 받아옵니다.

타임라인 코드에 대한 정보는 [이곳](https://developers.neople.co.kr/contents/guide/pages/all#%ED%83%80%EC%9E%84%EB%9D%BC%EC%9D%B8-%EC%BD%94%EB%93%9C)에서 확인하실 수 있습니다.

```js
let opt = {
  limit: 10,
};
dnfApi.characters
  .timeline("cain", "d018e5f7e7519e34b8ef21db0c40fd98", opt)
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

## 능력치 정보

```js
dnfApi.characters
  .status("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

---

# 캐릭터 장비

## 장착 장비 정보

```js
dnfApi.characters.equip
  .equipment("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

## 장착 아바타 정보

```js
dnfApi.characters.equip
  .avatar("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

## 장착 크리쳐 정보

```js
dnfApi.characters.equip
  .creature("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

## 장착 휘장 정보

```js
dnfApi.characters.equip
  .flag("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

---

# 버프 스킬 강화 (스위칭)

## 스위칭 장착 장비

```js
dnfApi.characters.skill
  .equipment("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

## 스위칭 장착 아바타

```js
dnfApi.characters.skill
  .avatar("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

## 스위칭 장착 크리처

```js
dnfApi.characters.skill
  .creature("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

---

# 경매장

## 경매장 등록 아이템 검색 (이름)

```js
let opt = {
  sort: dnfApi.config.auction.sort.unitPrice,
  limit: 10,
  wordType: dnfApi.config.auction.wordType.match,
};
let query = {
  minLevel: 1,
  maxlevel: 10,
  rarity: dnfApi.config.auction.query.rarity.rare,
};
dnfApi.auction.itemName("마그토늄", opt).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 경매장 등록 아이템 조회 (경매장 등록 번호)

```js
dnfApi.auction.no("670998412").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 아이템

## 아이템 검색

```js
dnfApi.items.item("마그토늄").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 아이템 상세 정보

```js
dnfApi.items.detail("c6a38ab8c7540cfc51ea2b0b8b610fa7").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 직업

## 직업 정보

```js
dnfApi.jobs().then((data) => {
  console.log(data);
});
```

---

# 세트 아이템

## 세트 아이템 검색

```js
let opt = {
  limit: 2,
  wordType: dnfApi.config.setitems.wordType.front,
};
dnfApi.setitems.setitem("오감", opt).then((data) => {
  console.log(data);
});
```

## 세트 아이템 상세 정보

```js
dnfApi.setitems.detail("040d72e3585ea068f2d85fee654dab20").then((data) => {
  console.log(data);
});
```

---

# 캐릭터 안개 융화

## 장착 안개 융화

```js
dnfApi.equip
  .mistAssimilation("cain", "d018e5f7e7519e34b8ef21db0c40fd98")
  .then((data) => {
    if (data.err) return console.log(data.err);
    console.log(data);
  });
```

---

# 캐릭터 명성 검색

명성 구간으로 캐릭터를 검색합니다. 최근 90일 이내 접속한 110 레벨 이상 캐릭터만 검색 가능합니다.

```js
let opt = {
  minFame: 50000,
  maxFame: 52000,
  limit: 10,
};
dnfApi.characters.charactersFame("cain", opt).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 경매장 복수 아이템 검색

여러 아이템 ID로 경매장을 검색합니다 (최대 10개).

```js
dnfApi.auction.itemIds(["itemId1", "itemId2", "itemId3"]).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 경매장 시세 검색

```js
dnfApi.auction.auctionSoldName("마그토늄").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 아이템 상점 판매 정보

인게임 백과사전 기준의 상점 판매 정보를 조회합니다.

```js
dnfApi.items.shop("c6a38ab8c7540cfc51ea2b0b8b610fa7").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 아이템 해시태그

아이템 검색에 사용 가능한 해시태그 목록을 조회합니다.

```js
dnfApi.items.hashtag().then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 아바타 마켓

## 아바타 마켓 상품 검색

```js
let opt = {
  limit: 10,
  hashtag: ["귀여운", "세련된"],
};
dnfApi.avatarMarket.sale(opt).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 아바타 마켓 상품 조회

```js
dnfApi.avatarMarket.saleDetail(12345678).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 아바타 마켓 시세 검색

```js
dnfApi.avatarMarket.sold({ limit: 10 }).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 아바타 마켓 해시태그

```js
dnfApi.avatarMarket.hashtag("category").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 직업별 스킬

## 직업별 스킬 리스트

```js
dnfApi.jobs.skills("jobId", "jobGrowId").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 직업별 스킬 상세 정보

```js
dnfApi.jobs.skillDetail("jobId", "skillId").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 다중 조회

## 다중 아이템 조회

아이템 최대 15개를 한 번에 조회합니다.

```js
dnfApi.multi.items(["itemId1", "itemId2", "itemId3"]).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 다중 세트 아이템 조회

세트 아이템 최대 15개를 한 번에 조회합니다.

```js
dnfApi.multi.setItems(["setItemId1", "setItemId2"]).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 다중 스킬 조회

스킬 최대 10개를 한 번에 조회합니다.

```js
dnfApi.multi.skills("jobId", ["skillId1", "skillId2"]).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```
