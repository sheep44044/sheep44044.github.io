---
title: LeetCode-23.合并 K 个升序链表
published: 2026-03-12
description: ''
image: ''
tags: ["链表","归并排序"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**23. 合并 K 个升序链表**](https://leetcode.cn/problems/merge-k-sorted-lists/)

> 给你一个链表数组，每个链表都已经按升序排列。
>
> 请你将所有链表合并到一个升序链表中，返回合并后的链表。
>
> ----

> **示例 1：**
>
> ```
> 输入：lists = [[1,4,5],[1,3,4],[2,6]]
> 输出：[1,1,2,3,4,4,5,6]
> 解释：链表数组如下：
> [
>   1->4->5,
>   1->3->4,
>   2->6
> ]
> 将它们合并到一个有序链表中得到。
> 1->1->2->3->4->4->5->6
> ```
>
> **示例 2：**
>
> ```
> 输入：lists = []
> 输出：[]
> ```
>
> **示例 3：**
>
> ```
> 输入：lists = [[]]
> 输出：[]
> ```
>
> ---



**自己的解法(照抄148. 排序链表)**

> 也算是手撕吧...

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeKLists(lists []*ListNode) *ListNode {
    filtered := make([]*ListNode, 0, len(lists))
    for _, l := range lists {
        if l != nil {
            filtered = append(filtered, l)
        }
    }
    if len(filtered) == 0 {
        return nil
    }
    if len(filtered) == 1 {
        return filtered[0]
    }

    for i := 0; i < len(filtered)-1; i++ {
        cur := filtered[i]
        for cur.Next != nil {
            cur = cur.Next
        }
        cur.Next = filtered[i+1]
    }

    return sortList(filtered[0])
}

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



**更合适的解法**

思路：这里的思路与 [**148. 排序链表**](https://leetcode.cn/problems/sort-list/) 稍有不同，上一题是把一个链表化为多个长度为一的链表，这里`lists`我们把切片的每一个元素提取，所以需要`divideAndMerge`。

其中，`divideAndMerge`本质就是对一串数字进行操作，如果只剩一个数字，就进行`mergeTwoLists`,后面的逻辑就是和排序链表差不多了。

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeKLists(lists []*ListNode) *ListNode {
    if len(lists) == 0 {
        return nil
    }
    return divideAndMerge(lists, 0, len(lists)-1)
}

func divideAndMerge(lists []*ListNode, left, right int) *ListNode {
    if left == right {
        return lists[left]
    }
    
    mid := left + (right - left) / 2
    
    l1 := divideAndMerge(lists, left, mid)
    l2 := divideAndMerge(lists, mid+1, right)
    
    return mergeTwoLists(l1, l2)
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
