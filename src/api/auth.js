import request from '@/utils/request'

export function loginByTicket(data) {
  return request({
    url: '/loginByTicket',
    method: 'post',
    data
  })
}
export function getCurrentUserinfo() {
  return request({
    url: '/getCurrentUserinfo',
    method: 'post'
  })
}
