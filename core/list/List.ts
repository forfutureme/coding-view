/**
 * @format
 * @Author: huweijian
 * @Date: 2020-03-05 10:12:07
 * @Desc: 实现一个链表
 */

interface ListItem {
  value: itemValue
  next: ListItem
}
type itemValue = null | number | string
class List {
  head: ListItem
  length: number
  constructor(value: itemValue) {
    this.head = {
      value,
      next: null
    }
    this.length = 1
    // return this.list
  }
  append(value: itemValue, head?: ListItem): ListItem {
    let item = head || this.head
    while (item.next) {
      item = item.next
    }
    item.next = {
      value,
      next: null
    }
    this.length++
    return item
  }
  deleteHead(): void {
    this.head = this.head.next
    this.length--
  }
  delete(value?: itemValue, position?: number): void {
    let item = this.head
    let cache = item
    // 如果指定了索引，优先使用索引
    if (position !== undefined) {
      // 如果指定位置溢出不做处理
      if (position < 0 || position > this.length) return
      // 如果指定删除链表起始位置
      if (position === 0) {
        return this.deleteHead()
      }
      let index = 0
      while (index !== position) {
        cache = item
        item = item.next
        index++
      }
      cache.next = item.next
      this.length--
      return
    }
    //如果没指定索引，使用输入值作为值查找
    if (position === undefined) {
      // 如果删除链表头部
      if (this.head.value === value) {
        return this.deleteHead()
      }
      while (item.value !== value) {
        cache = item
        item = item.next
        if (!item) return
      }
    }
    cache.next = item.next
    this.length--
  }
  insertAt(value: itemValue, pos: itemValue): void {
    let item = this.head
    let cache: ListItem = item
    while (item && item.value !== pos) {
      cache = item
      item = item.next
    }
    if (item === null) {
      return
    }
    cache.next = {
      value,
      next: item.next
    }
    this.length++
  }
}

export default List
