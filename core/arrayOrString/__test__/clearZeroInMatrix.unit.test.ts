/**
 * @format
 * @Author: huweijian
 * @Date: 2020-03-04 11:02:15
 * @Desc: clearZeroInMatrix 单元测试
 */
import clearZeroInMatrix from '../clearZeroInMatrix'
describe('clearZeroInMatrix测试', () => {
  it('空数组测试', () => {
    const result = clearZeroInMatrix([])
    expect(result).toEqual([])
  })
  it('小矩阵测试', () => {
    const result = clearZeroInMatrix([[0, 1]])
    expect(result).toEqual([[0, 0]])
  })
  it('小中矩阵测试', () => {
    const result = clearZeroInMatrix([
      [1, 1],
      [1, 1]
    ])
    expect(result).toEqual([
      [1, 1],
      [1, 1]
    ])
  })
  it('小中需要替换矩阵测试', () => {
    const result = clearZeroInMatrix([
      [1, 0],
      [1, 1]
    ])
    expect(result).toEqual([
      [0, 0],
      [1, 0]
    ])
  })
  it('中矩阵测试', () => {
    const result = clearZeroInMatrix([
      [1, 2, 3],
      [1, 2, 3],
      [1, 3, 5, 6]
    ])
    expect(result).toEqual([
      [1, 2, 3],
      [1, 2, 3],
      [1, 3, 5, 6]
    ])
  })
  it('中需要替换矩阵测试', () => {
    const result = clearZeroInMatrix([
      [1, 0, 3],
      [1, 2, 3],
      [1, 3, 5, 6]
    ])

    expect(result).toEqual([
      [0, 0, 0],
      [1, 0, 3],
      [1, 0, 5, 6]
    ])
  })
  it('中需要替换矩阵测试', () => {
    const result = clearZeroInMatrix([
      [1, 1, 3],
      [1, 2, 0],
      [1, 3, 5, 6]
    ])

    expect(result).toEqual([
      [1, 1, 0],
      [0, 0, 0],
      [1, 3, 0, 6]
    ])
  })
  it('中需要替换矩阵测试', () => {
    const result = clearZeroInMatrix([
      [1, 1, 3],
      [1, 2, 3],
      [1, 3, 5, 0]
    ])
    expect(result).toEqual([
      [1, 1, 3],
      [1, 2, 3],
      [0, 0, 0, 0]
    ])
  })
  it('中需要替换矩阵测试', () => {
    const result = clearZeroInMatrix([
      [1, 1, 3],
      [1, 3],
      [1, 3, 5, 0]
    ])
    expect(result).toEqual([
      [1, 1, 3],
      [1, 3],
      [0, 0, 0, 0]
    ])
  })
})
