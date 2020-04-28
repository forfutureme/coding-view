/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-29 07:01:55
 * @Desc: 字符串中字符对调，一个和最后一个对调，第二个和倒数第二个对调，以此类推
 */
const stringSwap = (str: string): string => {
  const len = str.length
  const res = []
  const middle = ~~len / 2
  for (let i = 0; i < middle; ++i) {
    res[i] = str.charAt(len - 1 - i)
    res[len - 1 - i] = str.charAt(i)
  }
  if (len % 2 !== 0) {
    res[middle] = str.charAt(middle - 1)
  }
  return res.join('')
}

export default stringSwap
