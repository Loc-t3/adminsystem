import request from '@/utils/request'

export function options() {
  return request({
    url: '/otherData/cnvd/options',
    method: 'get'
  })
}
export function lists(data) {
  return request({
    url: '/otherData/cnvd/lists',
    method: 'post',
    data
  })
}
