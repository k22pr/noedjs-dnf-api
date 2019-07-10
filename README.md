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
- [경매장](#경매장)
  - [경매장 등록 아이템 검색 (이름)](<#경매장-등록-아이템-검색-(이름)>)
  - [경매장 등록 아이템 조회 (경매장 등록 번호)](<경매장-등록-아이템-조회-(경매장-등록-번호)>)
- [아이템](#아이템)
  - [아이템 검색](#아이템-검색)
  - [아이템 상세 정보](#아이템-상세-정보)
- [직업](#직업)
  - [직업 정보](#직업-정보)
- [세트 아이템](#세트-아이템)
  - [세트 아이템 검색](#세트-아이템-검색)
  - [세트 아이템 상세 정보](#세트-아이템-상세-정보)

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

dnfApi.setOptions({ key: "YOUR API KEY" });
//or
dnfApi.setOptions({
  //자신의 API키
  key: "YOUR API KEY",
  //respone오류 에서 자신의 API KEY갑을 숨겨서 표시합니다.
  hideOnErrorApiKey: true,
  hidekeyText: "{HIDEKEY}",
  //요청후 기다리는 최대 시간입니다 (ms)
  axiosTimeout: 5000,

  //응답에 대한 정보를 JSON형태로 받습니다.
  returnJSON: false,

  //응답내용을 상세하게 출력하도록 변경합니다.
  responeHeader: false,
});

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
let { error, data } = await dnf.Api.Characters.characterName(dnf.ServerNames.anton, "쑤남");
if (error) console.error(error);
else {
  console.info(data);
}
```

## 캐릭터 기본 정보

캐릭터에 대한 기본적인 정보를 받아옵니다.

```js
dnfApi.characters.characterId("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then((data) => {
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
dnfApi.characters.timeline("cain", "d018e5f7e7519e34b8ef21db0c40fd98", opt).then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 능력치 정보

```js
dnfApi.characters.status("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 캐릭터 장비

## 장착 장비 정보

```js
dnfApi.characters.equip.equipment("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 장착 아바타 정보

```js
dnfApi.characters.equip.avatar("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 장착 크리쳐 정보

```js
dnfApi.characters.equip.creature("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 장착 휘장 정보

```js
dnfApi.characters.equip.flag("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

---

# 버프 스킬 강화 (스위칭)

## 스위칭 장착 장비

```js
dnfApi.characters.skill.equipment("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 스위칭 장착 아바타

```js
dnfApi.characters.skill.avatar("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then((data) => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
```

## 스위칭 장착 크리처

```js
dnfApi.characters.skill.creature("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then((data) => {
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
