/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-24 07:30:49
 * @Desc: 判断俩个字符串是否互为重排
 */
const isPermution = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false
  return (
    a
      .split('')
      .sort()
      .join() ===
    b
      .split('')
      .sort()
      .join()
  )
}

export default isPermution
