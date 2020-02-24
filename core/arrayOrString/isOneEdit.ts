/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-25 07:04:30
 * @Desc: 判断俩个字符串是否可以通过一次编辑得到
 * 编辑方式为 增 删 替
 */
type KeyCount = {
  [key: string]: number
}
const getKeyCount = (str: string): KeyCount => {
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    const k = str.charAt(i)
    if (!obj[k]) {
      obj[k] = 1
    } else {
      obj[k]++
    }
  }
  return obj
}
const getDiffCount = (maxO: KeyCount, minO: KeyCount): number => {
  let count = 0
  for (const k in maxO) {
    if (maxO[k] !== minO[k]) {
      count++
    }
  }
  return count
}
const isOneEdit = (str: string, current: string): boolean => {
  if (!str || !current) return false
  if (str === current) return false
  const lengthStep = str.length - current.length
  if (lengthStep > 1 || lengthStep < -1) return false
  const countStr = getKeyCount(str)
  const countCurr = getKeyCount(current)
  let count = 0
  if (Object.keys(countStr).length >= Object.keys(countCurr).length) {
    count = getDiffCount(countStr, countCurr)
  } else {
    count = getDiffCount(countCurr, countStr)
  }

  return count <= 1
}

export default isOneEdit
