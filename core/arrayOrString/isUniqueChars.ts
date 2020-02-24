/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-23 11:08:05
 * @Desc: 检查字符串里是否有重复字母
 */
export default function isUniqueChars(str: string): boolean {
  if (!str) return false
  const o = {}
  for (let i = 0; i < str.length; i++) {
    const k = str.charAt(i)
    if (o[k]) {
      return false
    }
    o[k] = 1
  }
  return true
}

const isUniqueCharsByFor = (str: string): boolean => {
  if (!str) return false
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i)
    for (let j = i + 1; j < str.length; j++) {
      if (c === str.charAt(j)) {
        return false
      }
    }
  }
  return true
}

export {isUniqueCharsByFor}
