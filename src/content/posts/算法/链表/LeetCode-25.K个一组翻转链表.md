---
title: LeetCode-25.K个一组翻转链表
published: 2026-03-11
description: ''
image: ''
tags: ["链表"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**25. K 个一组翻转链表**](https://leetcode.cn/problems/reverse-nodes-in-k-group/)

> 给你链表的头节点 `head` ，每 `k` 个节点一组进行翻转，请你返回修改后的链表。
>
> `k` 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 `k` 的整数倍，那么请将最后剩余的节点保持原有顺序。
>
> 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg)
>
> ```
> 输入：head = [1,2,3,4,5], k = 2
> 输出：[2,1,4,3,5]
> ```
>
> **示例 2：**
>
> ![img](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg)
>
> ```
> 输入：head = [1,2,3,4,5], k = 3
> 输出：[3,2,1,4,5]
> ```
>
> ---



**自己的解法**

> 做出来了，哈哈哈！！！我终于做出来了！！！哈哈哈哈！！！困难题！！！哈哈。我太tm牛了

思路：[**206. 反转链表**](https://leetcode.cn/problems/reverse-linked-list/) 和 [**24. 两两交换链表中的节点**](https://leetcode.cn/problems/swap-nodes-in-pairs/) 的结合

​	内部（206. 反转链表）+ 外部（24. 两两交换链表 / 节点缝合）

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseKGroup(head *ListNode, k int) *ListNode {
    dummy := &ListNode{Next: head}
    pre := dummy
    cur := head
    count := 0

    for cur != nil {
        cur = cur.Next
        count++
    }

    count = count / k
    cur = dummy.Next
    start := dummy

    for i:= 0; i < count; i++ {
        for j:= 0; j < k; j++ {
            next := cur.Next
            cur.Next = pre
            pre = cur
            cur = next
        }
 
        next := start.Next
        start.Next = pre
        next.Next = cur
        start = next
        pre = next
    }
    return dummy.Next
}
```



**头插法**

思路：我们不把它们拆下来反转，而是永远盯着第一个节点 `1`。

- 第一步：把 `1` 后面的 `2` 拔下来，插到最前面：`2 -> 1 -> 3`
- 第二步：把 `1` 后面的 `3` 拔下来，插到最前面：`3 -> 2 -> 1` 反转完成！在这个过程中，`1` 永远是这一组的尾巴，它自然而然地连着下一组，**完全不需要额外的“缝合”操作**。

```go
func reverseKGroup(head *ListNode, k int) *ListNode {
    dummy := &ListNode{Next: head}
    pre := dummy 

    count := 0
    cur := head
    for cur != nil {
        count++
        cur = cur.Next
    }

    for count >= k {
        cur = pre.Next 
        
        for i := 1; i < k; i++ {
            next := cur.Next       
            cur.Next = next.Next   
            next.Next = pre.Next   
            pre.Next = next        
        }
        
        pre = cur 
        count -= k 
    }

    return dummy.Next
}
```
