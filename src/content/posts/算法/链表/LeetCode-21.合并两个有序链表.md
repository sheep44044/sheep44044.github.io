---
title: LeetCode-21.合并两个有序链表
published: 2026-03-11
description: ''
image: ''
tags: ["链表"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**21. 合并两个有序链表**](https://leetcode.cn/problems/merge-two-sorted-lists/)

> 给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 **新的头节点** 。
>
> ----

> 将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
>
>  
>
> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)
>
> ```
> 输入：l1 = [1,2,4], l2 = [1,3,4]
> 输出：[1,1,2,3,4,4]
> ```
>
> **示例 2：**
>
> ```
> 输入：l1 = [], l2 = []
> 输出：[]
> ```
>
> **示例 3：**
>
> ```
> 输入：l1 = [], l2 = [0]
> 输出：[0]
> ```
>
> ---



**自己的解法**

> 手撕

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    dummy := &ListNode{}
    cur := dummy
    if list1 == nil {
        return list2
    }

    if list2 == nil {
        return list1
    }

    for list1 != nil || list2 != nil {
        if list1 == nil {
            cur.Next = list2
            return dummy.Next
        }
        
        if list2 == nil {
            cur.Next = list1
            return dummy.Next
        }

        if list1.Val < list2.Val {
            cur.Next = list1
            cur = cur.Next
            list1 = list1.Next
        }else {
            cur.Next = list2
            cur = cur.Next
            list2 = list2.Next
        }
    }
    return dummy.Next
}
```



**ai润色后**

```go
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
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



**递归**

```go
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    if list1 == nil {
        return list2
    }
    if list2 == nil {
        return list1
    }

    if list1.Val < list2.Val {
        list1.Next = mergeTwoLists(list1.Next, list2)
        return list1
    } else {
        list2.Next = mergeTwoLists(list1, list2.Next)
        return list2
    }
}
```
