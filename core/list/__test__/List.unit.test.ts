/**
 * @format
 * @Author: huweijian
 * @Date: 2020-03-05 10:16:19
 * @Desc: Lits 单元测试
 */
import List from '../List'
describe('List测试', () => {
  it('00初始化Lits', () => {
    const list = new List(1)
    expect(list.head.value).toEqual(1)
    expect(list.head.next).toEqual(null)
    expect(list.length).toEqual(1)
  })
  it('01增加元素到链表', () => {
    const list = new List(1)
    list.append(2)
    list.append(3)
    expect(list.head.value).toEqual(1)
    expect(list.head.next.value).toEqual(2)
    expect(list.head.next.next.value).toEqual(3)
    expect(list.head.next.next.next).toEqual(null)
    expect(list.length).toEqual(3)
  })
  it('02删除元素到链表-表头', () => {
    const list = new List(1)
    list.append(2)
    list.append(3)
    expect(list.head.value).toEqual(1)
    expect(list.head.next.value).toEqual(2)
    expect(list.head.next.next.value).toEqual(3)
    expect(list.head.next.next.next).toEqual(null)
    expect(list.length).toEqual(3)
    list.delete(1)
    expect(list.head.value).toEqual(2)
    expect(list.head.next.value).toEqual(3)
    expect(list.head.next.next).toEqual(null)
    expect(list.length).toEqual(2)
  })
  it('03删除元素到链表-中间值', () => {
    const list = new List(1)
    list.append(2)
    list.append(3)
    list.append(4)
    expect(list.head.value).toEqual(1)
    expect(list.head.next.value).toEqual(2)
    expect(list.head.next.next.value).toEqual(3)
    expect(list.head.next.next.next.value).toEqual(4)
    expect(list.length).toEqual(4)
    list.delete(2)
    expect(list.head.value).toEqual(1)
    expect(list.head.next.value).toEqual(3)
    expect(list.head.next.next.value).toEqual(4)
    expect(list.length).toEqual(3)
  })
  it('04删除元素到链表-中间靠后值', () => {
    const list = new List(1)
    list.append(2)
    list.append(3)
    list.append(4)
    list.append(5)
    expect(list.head.value).toEqual(1)
    expect(list.head.next.value).toEqual(2)
    expect(list.head.next.next.value).toEqual(3)
    expect(list.head.next.next.next.value).toEqual(4)
    expect(list.length).toEqual(5)
    list.delete(3)
    list.delete(4)
    expect(list.head.value).toEqual(1)
    expect(list.head.next.value).toEqual(2)
    expect(list.length).toEqual(3)
  })
  it('05删除元素到链表-表尾巴', () => {
    const list = new List(1)
    list.append(2)
    list.append(3)
    list.append(4)
    list.append(5)
    expect(list.head.value).toEqual(1)
    expect(list.head.next.value).toEqual(2)
    expect(list.head.next.next.value).toEqual(3)
    expect(list.head.next.next.next.value).toEqual(4)
    expect(list.length).toEqual(5)
    list.delete(5)
    expect(list.head.value).toEqual(1)
    expect(list.head.next.value).toEqual(2)
    expect(list.head.next.next.value).toEqual(3)
    expect(list.head.next.next.next.value).toEqual(4)
    expect(list.length).toEqual(4)
  })
  it('06插入元素到链表-表头', () => {
    const list = new List(1)
    list.insertAt(2, 1)
    expect(list.head.next.value).toEqual(2)
    expect(list.length).toEqual(2)
  })
  it('07插入元素到链表-表中', () => {
    const list = new List(1)
    list.append(3)
    list.append(4)
    list.insertAt(2, 1)
    expect(list.head.next.value).toEqual(2)
    expect(list.length).toEqual(4)
  })
  it('08插入元素到链表-表中后', () => {
    const list = new List(1)
    list.append(3)
    list.append(4)
    list.append(6)
    list.insertAt(2, 1)
    list.insertAt(5, 4)
    expect(list.head.next.value).toEqual(2)
    expect(list.length).toEqual(6)
  })
  it('09插入元素到链表-表尾', () => {
    const list = new List(1)
    list.append(2)
    list.append(3)
    list.insertAt(4, 3)
    expect(list.length).toEqual(4)
  })
  it('10插入元素的参照元素不存在', () => {
    const list = new List(1)
    list.append(2)
    list.append(3)
    list.insertAt(4, 4)
    expect(list.length).toEqual(3)
  })
  it('11根据索引删除-前位溢出', () => {
    const list = new List(1)
    list.append(2)
    list.append(3)
    list.delete(undefined, -1)
    expect(list.length).toEqual(3)
  })
})
