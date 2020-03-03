/**
 * @format
 * @Author: huweijian
 * @Date: 2020-03-04 07:35:24
 * @Desc: 旋转矩阵单元测试
 */

import rotateMatrix from '../rotateMatrix'

describe('rotateMatrix单元测试', () => {
  it('测试空数组', () => {
    const result = rotateMatrix([])
    expect(result).toEqual([])
  })
  it('测试空二维数组', () => {
    const result = rotateMatrix([[]])
    expect(result).toEqual([[]])
  })
  it('测试不同长度二维数组', () => {
    const result = rotateMatrix([[1], [2, 3]])
    expect(result).toEqual([[1], [2, 3]])
  })
  it('测试合法的二维数组', () => {
    const result = rotateMatrix([
      [1, 2],
      [3, 4]
    ])
    expect(result).toEqual([
      [3, 1],
      [4, 2]
    ])
  })
})
