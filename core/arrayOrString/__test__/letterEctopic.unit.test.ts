/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-29 07:29:24
 * @Desc: 判断俩个字符串是否互为异位词 单元测试
 */
import letterEctopic from '../letterEctopic'
describe('letterEctopic测试', () => {
  it('01-单个空字符串判断', () => {
    const result = letterEctopic('', 'a')
    expect(result).toEqual(false)
  })
  it('02-都是空字符串判断', () => {
    const result = letterEctopic('', '')
    expect(result).toEqual(false)
  })
  it('02-字符串不等长度判断', () => {
    const result = letterEctopic('a', 'ab')
    expect(result).toEqual(false)
  })
  it('03-非异位词测试', () => {
    const result = letterEctopic('a', 'b')
    expect(result).toEqual(false)
  })
  it('04-非异位词测试', () => {
    const result = letterEctopic('abc', 'bdg')
    expect(result).toEqual(false)
  })
  it('05-非异位词测试', () => {
    const result = letterEctopic('arewrw', 'bsdssw')
    expect(result).toEqual(false)
  })
  it('06-非异位词测试', () => {
    const result = letterEctopic('a', 'a')
    expect(result).toEqual(true)
  })
  it('07-非异位词测试', () => {
    const result = letterEctopic('abc', 'cab')
    expect(result).toEqual(true)
  })
  it('05-非异位词测试', () => {
    const result = letterEctopic('arewrw', 'wrreaw')
    expect(result).toEqual(true)
  })
})
