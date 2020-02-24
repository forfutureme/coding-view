/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-24 08:06:51
 * @Desc: hasMoslems单元测试
 */
import hasMoslems from '../hasMoslems'

describe('hasMoslems测试', () => {
  it('00空字符串测试', () => {
    const result = hasMoslems('')
    expect(result).toEqual(false)
  })
  it('01拥有可重排成回文字符串测试', () => {
    const result = hasMoslems('abbcc')
    expect(result).toEqual(true)
  })
  it('02没有可重排成回文字符串测试', () => {
    const result = hasMoslems('abbccc')
    expect(result).toEqual(false)
  })
})
