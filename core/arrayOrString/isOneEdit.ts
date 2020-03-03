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
const isEdit = (s1: string, s2: string): boolean => {
  let different = false
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (different) {
        return false
      }
      different = true
    }
  }
  return true
}
const isInsert = (sF: string, sT: string): boolean => {
  let i = 0
  let j = 0
  while (i < sF.length && j < sT.length) {
    if (sF[i] !== sT[j]) {
      if (i !== j) {
        return false
      }
      j++
    } else {
      i++
      j++
    }
  }
  return true
}
const isOneEditTwo = (s1: string, s2: string): boolean => {
  if (s1.length === s2.length) {
    return isEdit(s1, s2)
  } else if (s1.length + 1 === s2.length) {
    return isInsert(s1, s2)
  } else if (s1.length - 1 === s2.length) {
    return isInsert(s2, s1)
  }
  return false
}
const isOneEditThree = (sF: string, sT: string): boolean => {
  const diff = sF.length - sT.length
  if (Math.abs(diff) > 1) return false
  const s1 = diff < 0 ? sF : sT
  const s2 = diff < 0 ? sT : sF
  let i = 0
  let j = 0
  let different = false
  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      if (different) return false
      different = true
      if (s1.length === s2.length) {
        i++
      }
    } else {
      i++
    }
    j++
  }
  return true
}
export default isOneEdit
export {isOneEditTwo, isOneEditThree}
