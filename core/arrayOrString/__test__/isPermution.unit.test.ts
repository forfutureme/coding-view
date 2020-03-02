/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-24 07:35:44
 * @Desc: isPermution 单元测试
 */
import isPermution, {isPermutionTwo} from '../isPermution'

describe('isPermution测试', () => {
  it('00测试长度不同字符串', () => {
    const result = isPermution('a', 'cd')
    expect(result).toEqual(false)
  })
  it('01测试互为重排字符串', () => {
    const result = isPermution('abcd', 'bcda')
    expect(result).toEqual(true)
  })
  it('02测试不互为重排字符串', () => {
    const result = isPermution('abcd', 'bcdf')
    expect(result).toEqual(false)
  })
  it('03测试互为重排字符串', () => {
    const result = isPermutionTwo('abcdb', 'bcdab')
    expect(result).toEqual(true)
  })
})
describe('isPermutionTwo测试', () => {
  it('00测试长度不同字符串', () => {
    const result = isPermutionTwo('a', 'cd')
    expect(result).toEqual(false)
  })
  it('01测试互为重排字符串', () => {
    const result = isPermutionTwo('abcd', 'bcda')
    expect(result).toEqual(true)
  })
  it('02测试不互为重排字符串', () => {
    const result = isPermutionTwo('abcd', 'bcdf')
    expect(result).toEqual(false)
  })
  it('03测试互为重排字符串', () => {
    const result = isPermutionTwo('abcdb', 'bcdab')
    expect(result).toEqual(true)
  })
})
