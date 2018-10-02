/////////////////////////////////////////
// MIT License
//
//  Copyright (c) 2018 k22pr, 서버지기
//
////////////////////////////////////////
import api from "./api";
api.opt = {
  //자신의 API키
  APIKey: "",
  //respone오류 에서 자신의 API KEY갑을 숨겨서 표시합니다.
  hideOnErrorApiKey: true,
  hidekeyText: "{HIDEKEY}",
  //요청후 기다리는 최대 시간입니다 (ms)
  axiosTimeout: 5000,

  //응답에 대한 정보를 JSON형태로 받습니다.
  returnJSON: false,

  //응답내용을 상세하게 출력하도록 변경합니다.
  responeHeader: false
};

export default api;
