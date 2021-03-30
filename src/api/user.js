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
  async Bingtu(params){
    return request.post("bingtu",{
      params:params
    })
  },
  async Zhekou(params){
    return request.post("zhekou",{
      params:params
    })
  },
  async Guanxi(params){
    return request.post("guanxi",{
      params:params
    })
  },
  async Ciyuntu(params){
    return request.post("ciyuntu",{
      params:params
    })
  },
  async Xingrcibitu(params){
    return request.post("xingrcibitu",{
      params:params
    })
  },
  async Tinglungx(params){
    return request.post("tinglungx",{
      params:params
    })
  },
  async Zongdeleidatu(params){
    return request.post("zongdeleidatu",{
      params:params
    })
  },
  async Gljg(params){
    return request.post("gljg",{
      params:params
    })
  },
  
}
