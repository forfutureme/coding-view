/**
 * @format
 * @Author: huweijian
 * @Date: 2020-03-02 17:59:52
 * @Desc: 提换孔哥字符为20%
 */
const replaceSpace = (str: string): string => str.replace(/\s/g, '20%')
const replaceSpaceTwo = (str: string): string => {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i)
    if (ch === ' ') {
      res += '20%'
    } else {
      res += ch
    }
  }
  return res
}
export default replaceSpace
export {replaceSpaceTwo}
