---
title: LeetCode-148.排序链表
published: 2026-03-12
description: ''
image: ''
tags: ["链表","归并排序"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**148. 排序链表**](https://leetcode.cn/problems/sort-list/)

> 给你链表的头结点 `head` ，请将其按 **升序** 排列并返回 **排序后的链表** 。
>
> ----

>  **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg)
>
> ```
> 输入：head = [4,2,1,3]
> 输出：[1,2,3,4]
> ```
>
> **示例 2：**
>
> ![img](https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg)
>
> ```
> 输入：head = [-1,5,3,4,0]
> 输出：[-1,0,3,4,5]
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



**归并排序的解法**

> 很神奇

思路：这个问题就是用归并排序解决的，这里可以分为两部分1.分解 和 2. 合成。

1. 分解为一个个链表，依靠快慢指针和递归，直到触发`if head == nil || head.Next == nil {}`返回一个链表
2. 就是 [**21. 合并两个有序链表**](https://leetcode.cn/problems/merge-two-sorted-lists/) 的写法

Ps: 这个代码的递归的逻辑很像中间件的洋葱模型，返回一个链表后，再不断地`return mergeTwoLists(left, right)`

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func sortList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }

    slow, fast := head, head.Next
    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }

    mid := slow.Next 
    slow.Next = nil  

    left := sortList(head)
    right := sortList(mid)

    return mergeTwoLists(left, right)
}

func mergeTwoLists(list1, list2 *ListNode) *ListNode {
    dummy := &ListNode{}
    cur := dummy

    for list1 != nil && list2 != nil {
        if list1.Val < list2.Val {
            cur.Next = list1
            list1 = list1.Next
        } else {
            cur.Next = list2
            list2 = list2.Next
        }
        cur = cur.Next
    }

    if list1 != nil {
        cur.Next = list1
    } else {
        cur.Next = list2
    }

    return dummy.Next
}
```

