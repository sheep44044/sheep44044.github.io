---
title: LeetCode-19.删除链表的倒数第 N 个结点
published: 2026-03-10
description: ''
image: ''
tags: ["链表"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**19. 删除链表的倒数第 N 个结点**](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

> 给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)
>
> ```
> 输入：head = [1,2,3,4,5], n = 2
> 输出：[1,2,3,5]
> ```
>
> **示例 2：**
>
> ```
> 输入：head = [1], n = 1
> 输出：[]
> ```
>
> **示例 3：**
>
> ```
> 输入：head = [1,2], n = 1
> 输出：[1]
> ```
>
> ---



**自己的解法**

> 手撕，一遍过，哈哈哈！不妄我失败了这么多次链表，虽然比较简单就是了

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
    dummy := &ListNode{Next: head}

    cur := dummy.Next
    count := 1
    for cur != nil {
        cur = cur.Next
        count++
    }

    need := count - n - 1
    cur = dummy
    for i := 0; i < need; i++ {
        cur = cur.Next
    }

    if cur.Next != nil {
        cur.Next = cur.Next.Next
    }

    return dummy.Next
}
```



**双指针**

```go
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummyNode := &ListNode{0, head}
	fast, slow := dummyNode, dummyNode
  
	for i := 0; i <= n; i++ { 
		fast = fast.Next
	}
  
	for fast != nil {
		fast = fast.Next
		slow = slow.Next
	}
	slow.Next = slow.Next.Next
  
	return dummyNode.Next
}
```
