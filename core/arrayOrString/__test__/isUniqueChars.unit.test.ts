/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-23 11:11:47
 * @Desc: isUniqueChars 单元测试
 */
import isUniqueChars, {isUniqueCharsByFor} from '../isUniqueChars'

describe('isUniqueChars测试', () => {
  it('00空字符串测试', () => {
    const result = isUniqueChars('')
    expect(result).toEqual(false)
  })
  it('01无重复字符测试', () => {
    const result = isUniqueChars('q')
    expect(result).toEqual(true)
  })
  it('02有重复字符测试', () => {
    const result = isUniqueChars('qwertyuiopasdfghjklzxcvbnmq')
    expect(result).toEqual(false)
  })
})

describe('isUniqueCharsByFor测试', () => {
  it('00空字符串测试', () => {
    const result = isUniqueCharsByFor('')
    expect(result).toEqual(false)
  })
  it('01无重复字符测试', () => {
    const result = isUniqueCharsByFor('qa')
    expect(result).toEqual(true)
  })
  it('02有重复字符测试', () => {
    const result = isUniqueCharsByFor('qwertyuiopasdfghjklzxcvbnmq')
    expect(result).toEqual(false)
  })
})
