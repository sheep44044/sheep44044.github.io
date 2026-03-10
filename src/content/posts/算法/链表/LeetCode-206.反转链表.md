---
title: LeetCode-206.反转链表
published: 2026-03-10
description: ''
image: ''
tags: ["链表","双指针"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**206. 反转链表**](https://leetcode.cn/problems/reverse-linked-list/)

> 给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)
>
> ```
> 输入：head = [1,2,3,4,5]
> 输出：[5,4,3,2,1]
> ```
>
> **示例 2：**
>
> ![img](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)
>
> ```
> 输入：head = [1,2]
> 输出：[2,1]
> ```
>
> **示例 3：**
>
> ```
> 输入：head = []
> 输出：[]
> ```
>
> ---



**双指针的解法**

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
    var pre *ListNode
    cur := head
    for cur != nil {
        next := cur.Next
        cur.Next = pre
        pre = cur
        cur = next
    }
    
    return pre
}
```



**递归的方法**

```go
func reverseList(head *ListNode) *ListNode {
    return help(nil, head)
}

func help(pre, head *ListNode)*ListNode{
    if head == nil {
        return pre
    }
    next := head.Next
    head.Next = pre
    return help(head, next)
}
```
