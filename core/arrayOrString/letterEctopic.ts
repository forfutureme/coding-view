/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-29 07:21:44
 * @Desc: 判断俩个字符串是否互为异位词
 */
const letterEctopic = (strF: string, strS: string): boolean => {
  if (!strF || !strF) return false
  if (strF.length !== strS.length) return false
  const objF = {}
  const objS = {}
  for (let i = 0; i < strF.length; i++) {
    const keyF = strF[i]
    const keyS = strS[i]
    objF[keyF] ? objF[keyF] + 1 : (objF[keyF] = 1)
    objS[keyS] ? objS[keyS] + 1 : (objS[keyS] = 1)
  }
  for (const k in objF) {
    if (objF[k] !== objS[k]) return false
  }
  return true
}

export default letterEctopic
