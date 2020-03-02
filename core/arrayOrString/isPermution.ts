/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-24 07:30:49
 * @Desc: 判断俩个字符串是否互为重排
 * 区分大小写 假定无非字母字符
 */
type keyCont = {
  [key: string]: number
}
/**
 * 对字符串排序
 * @param str string
 */
const sort = (str: string): string => {
  return str
    .split('')
    .sort()
    .join()
}
/**
 * 采用字符串转数组在排序的思路
 * @param a string  要比较的字符 a
 * @param b  string  要比较的字符 b
 */
const isPermution = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false
  return sort(a) === sort(b)
}

/**
 * 计算字符串出现的次数
 * @param str string
 */
const calcKeyCount = (str: string): keyCont => {
  const o = {}
  for (let i = 0; i < str.length; i++) {
    const k = str.charAt(i)
    if (!o[k]) {
      o[k] = 1
    } else {
      o[k]++
    }
  }
  return o
}
/**
 * 比较对象计数的结果
 * @param a 字符串计数对象a
 * @param b 字符串计数对象b
 */
const contrastObj = (a: keyCont, b: keyCont): boolean => {
  for (const k in a) {
    if (a[k] !== b[k]) return false
  }
  return true
}
/**
 * 对字符计数后在比较
 * @param a string  要比较的字符 a
 * @param b string  要比较的字符 b
 */
const isPermutionTwo = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false
  return contrastObj(calcKeyCount(a), calcKeyCount(b))
}
export default isPermution
export {isPermutionTwo}
