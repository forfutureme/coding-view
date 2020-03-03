/**
 * @format
 * @Author: huweijian
 * @Date: 2020-03-03 15:42:55
 * @Desc: 旋转矩阵
 */
type Arr = number[][]
const rotateMatrix = (arr: Arr): Arr => {
  if (arr.length === 0) return arr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0 || arr[i].length !== arr.length) return arr
  }
  const len = arr.length
  for (let layer = 0; layer < len / 2; layer++) {
    const first = layer
    const last = len - layer - 1
    for (let i = first; i < last; i++) {
      const offset = i - first
      // 存储上边
      const top = arr[first][i]
      // 左边移动到上边
      arr[first][i] = arr[last - offset][first]
      // 移动下边到左边
      arr[last - offset][first] = arr[last][last - offset]
      // 移动右边到下边
      arr[last][last - offset] = arr[i][last]
      // 移动上边到右边
      arr[i][last] = top
    }
  }
  return arr
}

export default rotateMatrix
