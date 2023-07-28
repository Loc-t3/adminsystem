/**
 * 判断是否是json字符串
 * @param str
 * @returns {boolean}
 */
export function isJSON(str) {
  if (typeof str !== 'string') { // 1、传入值必须是 字符串
    return false
  }

  try {
    const obj = JSON.parse(str) // 2、仅仅通过 JSON.parse(str)，不能完全检验一个字符串是JSON格式的字符串
    if (typeof obj === 'object' && obj) { // 3、还必须是 object 类型
      return true
    } else {
      return false
    }
  } catch (e) {
    console.log('error：[' + str + '] !!! ' + e)
    return false
  }
}
