---
title: LeetCode-24.两两交换链表中的节点
published: 2026-03-10
description: ''
image: ''
tags: ["链表"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**24. 两两交换链表中的节点**](https://leetcode.cn/problems/swap-nodes-in-pairs/)

> 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)
>
> ```
> 输入：head = [1,2,3,4]
> 输出：[2,1,4,3]
> ```
>
> **示例 2：**
>
> ```
> 输入：head = []
> 输出：[]
> ```
>
> **示例 3：**
>
> ```
> 输入：head = [1]
> 输出：[1]
> ```
>
> ---



**正确的解法**

思路：与[**206. 反转链表**](https://leetcode.cn/problems/reverse-linked-list/)稍有不同，这里需要注意两点

1. 这里需要变动头节点，所以最好引入虚拟头节点
2. 边界空指针的问题：这里操作涉及三个元素，但只需要检查两个，第三个元素可以是 `nil`。如果只检查一个1.是没有意义2.是会造成询问`nil`的下一个元素是什么，导致程序崩溃

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
    dummy := &ListNode{Next: head}
    pre := dummy

    for pre.Next != nil && pre.Next.Next != nil {
        node1 := pre.Next
        node2 := node1.Next
        node3 := node2.Next

        pre.Next = node2
        node2.Next = node1
        node1.Next = node3

        pre = node1
    } 

    return dummy.Next
}
```

