/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-29 07:12:36
 * @Desc: 字符串中字符对调，单元测试
 */
import stringSwap from '../stringSwap'
describe('stringSwap', () => {
  it('01-基数长度测试', () => {
    const result = stringSwap('abc')
    expect(result).toEqual('cba')
  })
  it('02-基数长度测试', () => {
    const result = stringSwap('abcde')
    expect(result).toEqual('edcba')
  })
  it('03-偶数长度测试', () => {
    const result = stringSwap('abcd')
    expect(result).toEqual('dcba')
  })
  it('04-偶数长度测试', () => {
    const result = stringSwap('ab')
    expect(result).toEqual('ba')
  })
})
