/**
 * @format
 * @Author: huweijian
 * @Date: 2020-03-02 18:01:35
 * @Desc: replaceSpace单元测试
 */

import replaceSpace, {replaceSpaceTwo} from '../replaceSpace'

describe('replaceSpace测试', () => {
  it('00测试空字符串', () => {
    const result = replaceSpace('')
    expect(result).toEqual('')
  })
  it('01测试不带空格的字符', () => {
    const result = replaceSpace('abc')
    expect(result).toEqual('abc')
  })
  it('02测试带一个空格的字符', () => {
    const result = replaceSpace('a bc')
    expect(result).toEqual('a20%bc')
  })
  it('03测试带二个空格的字符', () => {
    const result = replaceSpace('a b c')
    expect(result).toEqual('a20%b20%c')
  })
})

describe('replaceSpaceTwo测试', () => {
  it('00测试空字符串', () => {
    const result = replaceSpaceTwo('')
    expect(result).toEqual('')
  })
  it('01测试不带空格的字符', () => {
    const result = replaceSpaceTwo('abc')
    expect(result).toEqual('abc')
  })
  it('02测试带一个空格的字符', () => {
    const result = replaceSpaceTwo('a bc')
    expect(result).toEqual('a20%bc')
  })
  it('03测试带二个空格的字符', () => {
    const result = replaceSpaceTwo('a b c')
    expect(result).toEqual('a20%b20%c')
  })
})
