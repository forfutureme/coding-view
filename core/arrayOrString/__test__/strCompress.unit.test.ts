/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-26 07:44:09
 * @Desc: strCompress 单元测试
 */
import strCompress, {strCompressTwo} from '../strCompress'
describe('strCompress测试', () => {
  it('测试一个字符', () => {
    const result = strCompress('a')
    expect(result).toEqual('a')
  })
  it('测试二个字符', () => {
    const result = strCompress('ab')
    expect(result).toEqual('ab')
  })
  it('测试三个字符', () => {
    const result = strCompress('abc')
    expect(result).toEqual('abc')
  })
  it('测试三个字符2个相同', () => {
    const result = strCompress('abb')
    expect(result).toEqual('abb')
  })
  it('测试四个字符2个相同', () => {
    const result = strCompress('abbc')
    expect(result).toEqual('abbc')
  })
  it('测试五个字符一个需要压缩', () => {
    const result = strCompress('abbbc')
    expect(result).toEqual('ab3c')
  })
  it('测试多个字符2个需要压缩', () => {
    const result = strCompress('abbbcccca')
    expect(result).toEqual('ab3c4a')
  })
  it('测试多个字符2个需要压缩', () => {
    const result = strCompress('abbbccccaa')
    expect(result).toEqual('ab3c4a2')
  })
  it('测试多个字符3个需要压缩', () => {
    const result = strCompress('abbbccccaaaab')
    expect(result).toEqual('ab3c4a4b')
  })
  it('测试多个字符不用压缩', () => {
    const result = strCompress('abbccaab')
    expect(result).toEqual('abbccaab')
  })
})

describe('strCompressTwo测试', () => {
  it('测试一个字符', () => {
    const result = strCompressTwo('a')
    expect(result).toEqual('a')
  })
  it('测试二个字符', () => {
    const result = strCompressTwo('ab')
    expect(result).toEqual('ab')
  })
  it('测试三个字符', () => {
    const result = strCompressTwo('abc')
    expect(result).toEqual('abc')
  })
  it('测试三个字符2个相同', () => {
    const result = strCompressTwo('abb')
    expect(result).toEqual('abb')
  })
  it('测试四个字符2个相同', () => {
    const result = strCompressTwo('abbc')
    expect(result).toEqual('abbc')
  })
  it('测试五个字符一个需要压缩', () => {
    const result = strCompressTwo('abbbc')
    expect(result).toEqual('ab3c')
  })
  it('测试多个字符2个需要压缩', () => {
    const result = strCompressTwo('abbbcccca')
    expect(result).toEqual('ab3c4a')
  })
  it('测试多个字符2个需要压缩', () => {
    const result = strCompressTwo('abbbccccaa')
    expect(result).toEqual('ab3c4a2')
  })
  it('测试多个字符3个需要压缩', () => {
    const result = strCompressTwo('abbbccccaaaab')
    expect(result).toEqual('ab3c4a4b')
  })
  it('测试多个字符不用压缩', () => {
    const result = strCompressTwo('abbccaab')
    expect(result).toEqual('abbccaab')
  })
})
