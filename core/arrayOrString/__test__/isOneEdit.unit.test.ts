/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-25 07:27:42
 * @Desc: isOneEdit 单元测试
 */
import isOneEdit, {isOneEditTwo, isOneEditThree} from '../isOneEdit'
describe('isOneEdit测试', () => {
  it('00空字符串测试', () => {
    const result = isOneEdit('', '')
    expect(result).toEqual(false)
  })
  it('01相等字符串测试', () => {
    const result = isOneEdit('abc', 'abc')
    expect(result).toEqual(false)
  })
  it('02相等字符串测试', () => {
    const result = isOneEdit('abc', 'abc')
    expect(result).toEqual(false)
  })
  it('03相差2个字符测试-1', () => {
    const result = isOneEdit('abc', 'abcde')
    expect(result).toEqual(false)
  })
  it('04相差2个字符测试-2', () => {
    const result = isOneEdit('abccd', 'abc')
    expect(result).toEqual(false)
  })
  it('05满足一次编辑测试-1', () => {
    const result = isOneEdit('pale', 'palee')
    expect(result).toEqual(true)
  })
  it('06满足一次编辑测试-2', () => {
    const result = isOneEdit('pales', 'pale')
    expect(result).toEqual(true)
  })
  it('07满足一次编辑测试-3', () => {
    const result = isOneEdit('pale', 'bale')
    expect(result).toEqual(true)
  })
  it('07满足一次编辑测试-3', () => {
    const result = isOneEdit('pale', 'pales')
    expect(result).toEqual(true)
  })
  it('08不满足一次编辑测试', () => {
    const result = isOneEdit('pale', 'bake')
    expect(result).toEqual(false)
  })
  it('09不满足一次编辑测试不同位置不同', () => {
    const result = isOneEditTwo('l', 'po')
    expect(result).toEqual(false)
  })
})

describe('isOneEditTwo测试', () => {
  it('00空字符串测试', () => {
    const result = isOneEditTwo('', '')
    expect(result).toEqual(true)
  })
  it('01相等字符串测试', () => {
    const result = isOneEditTwo('abc', 'abc')
    expect(result).toEqual(true)
  })
  it('02相等字符串测试', () => {
    const result = isOneEditTwo('abc', 'abc')
    expect(result).toEqual(true)
  })
  it('03相差2个字符测试-1', () => {
    const result = isOneEditTwo('abc', 'abcde')
    expect(result).toEqual(false)
  })
  it('04相差2个字符测试-2', () => {
    const result = isOneEditTwo('abccd', 'abc')
    expect(result).toEqual(false)
  })
  it('05满足一次编辑测试-1', () => {
    const result = isOneEditTwo('pale', 'palee')
    expect(result).toEqual(true)
  })
  it('06满足一次编辑测试-2', () => {
    const result = isOneEditTwo('pales', 'pale')
    expect(result).toEqual(true)
  })
  it('07满足一次编辑测试-3', () => {
    const result = isOneEditTwo('pale', 'bale')
    expect(result).toEqual(true)
  })
  it('07满足一次编辑测试-3', () => {
    const result = isOneEditTwo('pale', 'pales')
    expect(result).toEqual(true)
  })
  it('08不满足一次编辑测试', () => {
    const result = isOneEditTwo('pale', 'bake')
    expect(result).toEqual(false)
  })
  it('09不满足一次编辑测试不同位置不同', () => {
    const result = isOneEditTwo('l', 'po')
    expect(result).toEqual(false)
  })
})

describe('isOneEditThree测试', () => {
  it('00空字符串测试', () => {
    const result = isOneEditThree('', '')
    expect(result).toEqual(true)
  })
  it('01相等字符串测试', () => {
    const result = isOneEditThree('abc', 'abc')
    expect(result).toEqual(true)
  })
  it('02相等字符串测试', () => {
    const result = isOneEditThree('abc', 'abc')
    expect(result).toEqual(true)
  })
  it('03相差2个字符测试-1', () => {
    const result = isOneEditThree('abc', 'abcde')
    expect(result).toEqual(false)
  })
  it('04相差2个字符测试-2', () => {
    const result = isOneEditThree('abccd', 'abc')
    expect(result).toEqual(false)
  })
  it('05满足一次编辑测试-1', () => {
    const result = isOneEditThree('pale', 'palee')
    expect(result).toEqual(true)
  })
  it('06满足一次编辑测试-2', () => {
    const result = isOneEditThree('pales', 'pale')
    expect(result).toEqual(true)
  })
  it('07满足一次编辑测试-3', () => {
    const result = isOneEditThree('pale', 'bale')
    expect(result).toEqual(true)
  })
  it('07满足一次编辑测试-3', () => {
    const result = isOneEditThree('pale', 'pales')
    expect(result).toEqual(true)
  })
  it('08不满足一次编辑测试', () => {
    const result = isOneEditThree('pale', 'bake')
    expect(result).toEqual(false)
  })
  it('09不满足一次编辑测试不同位置不同', () => {
    const result = isOneEditThree('l', 'po')
    expect(result).toEqual(false)
  })
})
