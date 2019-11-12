import { install } from '../index'
console.log(install)
export const getInfo = (data: any) => {
  return install.httpGet(data.url, data.data)
}
