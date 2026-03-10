---
title: LeetCode-203.移除链表元素
published: 2026-03-09
description: ''
image: ''
tags: ["链表"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**203. 移除链表元素**](https://leetcode.cn/problems/remove-linked-list-elements/)

> 给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 **新的头节点** 。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg)
>
> ```
> 输入：head = [1,2,6,3,4,5,6], val = 6
> 输出：[1,2,3,4,5]
> ```
>
> **示例 2：**
>
> ```
> 输入：head = [], val = 1
> 输出：[]
> ```
>
> **示例 3：**
>
> ```
> 输入：head = [7,7,7,7], val = 7
> 输出：[]
> ```
>
> ---



**自己的解法**

> 手撕，链表的第一题

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeElements(head *ListNode, val int) *ListNode {
    if head == nil {
        return head
    }

    for head != nil && head.Val == val {
        head = head.Next
    }

    current := head
    for current != nil && current.Next != nil {
        if current.Next.Val != val {
            current = current.Next
        }else {
            current.Next = current.Next.Next
        }
    }
    
    return head
}
```

