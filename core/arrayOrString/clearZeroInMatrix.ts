/**
 * @format
 * @Author: huweijian
 * @Date: 2020-03-04 09:41:02
 * @Desc: 清空矩阵中含0的列和行
 */
type Arr = number[][]
type Obj = {
  [key: string]: number
}
const clearZeroInMatrix = (arr: Arr): Arr => {
  if (arr.length === 0) return arr
  // 列
  const cols: Obj = {}
  // 行
  const rows: Obj = {}
  // 遍历矩阵记录值为0的行和列
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    for (let j = 0; j < item.length; j++) {
      if (item[j] === 0) {
        cols[i] = 1
        rows[j] = 1
      }
    }
  }
  // 处理某一行对应所有列的元素
  for (let i = 0; i < arr.length; i++) {
    for (const k in rows) {
      if (arr[i][k] !== undefined) {
        arr[i][k] = 0
      }
    }
  }
  // 处理某一列对应所有行的元素
  for (const k in cols) {
    for (let i = 0; i < arr[k].length; i++) {
      arr[k][i] = 0
    }
  }
  return arr
}

export default clearZeroInMatrix
