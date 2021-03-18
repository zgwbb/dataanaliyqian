import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data
  });
}


export function getInfo() {
  return request({
    url: "/protected",
    method: "get"
  });
}

export function logout() {
  return request({
    url: "/logout",
    method: "post"
  });
}

export function examArrangement(data) {
  return request({
    url: "/examArrangement",
    method: "post",
    data
  });
}

export function changePassword(data) {
  return request({
    url: "/change_password",
    method: "post",
    data
  });
}
export default{
  async SportsQuery(params){
    return request.post("sportsQuery",{
      params:params
    })
  },
}