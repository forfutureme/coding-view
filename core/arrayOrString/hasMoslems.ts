/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-24 07:58:47
 * @Desc: 检查一个字符串是否可以重新排列成回文
 */
const hasMoslems = (str: string): boolean => {
  if (!str) return false
  const o = {}
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i)
    if (o[ch]) {
      o[ch]++
    } else {
      o[ch] = 1
    }
  }
  let count = 0
  for (const k in o) {
    if (o[k] % 2 !== 0) {
      count++
    }
  }
  return count === 1 || count === 0
}

export default hasMoslems
