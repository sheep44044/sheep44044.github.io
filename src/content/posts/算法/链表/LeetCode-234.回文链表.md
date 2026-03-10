---
title: LeetCode-234.回文链表
published: 2026-03-10
description: ''
image: ''
tags: ["链表","双指针"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**234. 回文链表**](https://leetcode.cn/problems/palindrome-linked-list/)

> 给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg)
>
> ```
> 输入：head = [1,2,2,1]
> 输出：true
> ```
>
> **示例 2：**
>
> ![img](https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg)
>
> ```
> 输入：head = [1,2]
> 输出：false
> ```
>
> ---



**自己的解法(哈希+左右指针)**

> 手撕，单纯做出来还是很简单的，不过13ms确实有点慢

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindrome(head *ListNode) bool {
    if head == nil {
        return true
    }

    cur := head
    res := []int{}
    for cur != nil {
        res = append(res, cur.Val)
        cur = cur.Next
    }

    left, right := 0, len(res)-1
    for left < right {
        if res[left] != res[right] {
            return false
        }
        left++
        right--
    }

    return true
}
```



**很有趣的解法(快慢指针+反转链表+左右指针)**

```go
func isPalindrome(head *ListNode) bool {
    if head == nil || head.Next == nil {
        return true
    }

    slow, fast := head, head
    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }

    var pre *ListNode
    cur := slow
    for cur != nil {
        next := cur.Next
        cur.Next = pre
        pre = cur
        cur = next
    }

    left := head
    right := pre
    for right != nil {
        if right.Val != left.Val {
            return false
        }
        
        left = left.Next
        right = right.Next
    }

    return true
}
```
