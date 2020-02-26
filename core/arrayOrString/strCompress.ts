/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-25 07:48:22
 * @Desc: 字符串压缩
 */
type KeyCount = {
  [key: string]: number
}

/**
 * 计算同一个字符作为key在对象中出现的次数
 * @param o 一个对象
 * @param k 要计算的字符
 */
const countKey = (o: KeyCount, k: string): number => {
  let count = 0
  for (const key in o) {
    if (key.charAt(0) === k) {
      count++
    }
  }
  return count
}
const joinStr = (arr: string[], o: {}): string => {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i]
    if (o[key] >= 2) {
      str += `${key[0]}${o[key]}`
    } else {
      str += `${key[0]}`
    }
  }
  return str
}
const strCompress = (str: string): string => {
  const o = {}
  const arr = []
  for (let i = 0; i < str.length; i++) {
    const curr = str.charAt(i)
    const prev = str.charAt(i - 1)
    if (curr === prev) {
      const key = `${curr}${countKey(o, curr) - 1}`
      o[key]++
    } else {
      const key = `${curr}${countKey(o, curr)}`
      o[key] = 1
      arr.push(key)
    }
  }
  const res = joinStr(arr, o)
  if (res.length === str.length) {
    return str
  }
  return res
}
export default strCompress
