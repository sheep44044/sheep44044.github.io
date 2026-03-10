---
title: LeetCode-707.设计链表
published: 2026-03-10
description: ''
image: ''
tags: ["链表"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**707. 设计链表**](https://leetcode.cn/problems/design-linked-list/)

> 你可以选择使用单链表或者双链表，设计并实现自己的链表。
>
> 单链表中的节点应该具备两个属性：`val` 和 `next` 。`val` 是当前节点的值，`next` 是指向下一个节点的指针/引用。
>
> 如果是双向链表，则还需要属性 `prev` 以指示链表中的上一个节点。假设链表中的所有节点下标从 **0** 开始。
>
> 实现 `MyLinkedList` 类：
>
> - `MyLinkedList()` 初始化 `MyLinkedList` 对象。
> - `int get(int index)` 获取链表中下标为 `index` 的节点的值。如果下标无效，则返回 `-1` 。
> - `void addAtHead(int val)` 将一个值为 `val` 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
> - `void addAtTail(int val)` 将一个值为 `val` 的节点追加到链表中作为链表的最后一个元素。
> - `void addAtIndex(int index, int val)` 将一个值为 `val` 的节点插入到链表中下标为 `index` 的节点之前。如果 `index` 等于链表的长度，那么该节点会被追加到链表的末尾。如果 `index` 比长度更大，该节点将 **不会插入** 到链表中。
> - `void deleteAtIndex(int index)` 如果下标有效，则删除链表中下标为 `index` 的节点。
>
> ----

> **示例：**
>
> ```
> 输入
> ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
> [[], [1], [3], [1, 2], [1], [1], [1]]
> 输出
> [null, null, null, null, 2, null, 3]
> 
> 解释
> MyLinkedList myLinkedList = new MyLinkedList();
> myLinkedList.addAtHead(1);
> myLinkedList.addAtTail(3);
> myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
> myLinkedList.get(1);              // 返回 2
> myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
> myLinkedList.get(1);              // 返回 3
> ```
>
> ---



**单链表解法**

> 是一道新手学习和了解链表的很好的题目

```go
type Node struct {
	Val  int         
	Next *Node 
}

type MyLinkedList struct {
   dummyHead *Node
   Size int
}


func Constructor() MyLinkedList {
    newNode := &Node{ 
		-999,
		nil,
	}
	return MyLinkedList{ 
		dummyHead: newNode,
		Size:      0,
	}
}


func (this *MyLinkedList) Get(index int) int {
    if this == nil || index < 0 || index >= this.Size { 
		return -1
	}

    current := this.dummyHead.Next
    for i := 0; i < index; i++ {
        current = current.Next
    }

    return current.Val
}


func (this *MyLinkedList) AddAtHead(val int)  {
    newNode := &Node{
        Val: val,
        Next: this.dummyHead.Next,
    }

    this.dummyHead.Next = newNode
    this.Size++
}


func (this *MyLinkedList) AddAtTail(val int)  {
    newNode := &Node{Val: val}

    current := this.dummyHead
    for current.Next != nil {
        current = current.Next
    }

    current.Next = newNode
    this.Size++
}


func (this *MyLinkedList) AddAtIndex(index int, val int)  {
    if index < 0 || index > this.Size {
        return
    }

    newNode := &Node{Val: val}
    current := this.dummyHead
    for i := 0; i < index; i++ {
        current = current.Next
    }

    newNode.Next = current.Next
    current.Next = newNode
    this.Size++
}


func (this *MyLinkedList) DeleteAtIndex(index int)  {
    if index < 0 || index >= this.Size { 
		return
	}
	current := this.dummyHead       
	for i := 0; i < index; i++ { 
		current = current.Next
	}
	if current.Next != nil {
		current.Next = current.Next.Next 
	}
	this.Size-- 
}


/**
 * Your MyLinkedList object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */
```

