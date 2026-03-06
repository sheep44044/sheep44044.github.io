---
title: LeetCode-189.轮转数组
published: 2026-03-05
description: ''
image: ''
tags: ["数组"]
category: '算法'
draft: false 
lang: ''
---

### 数组

[**189. 轮转数组**](https://leetcode.cn/problems/rotate-array/)

> 给定一个整数数组 `nums`，将数组中的元素向右轮转 `k` 个位置，其中 `k` 是非负数。
>
> ----

> **示例 1:**
>
> ```
> 输入: nums = [1,2,3,4,5,6,7], k = 3
> 输出: [5,6,7,1,2,3,4]
> 解释:
> 向右轮转 1 步: [7,1,2,3,4,5,6]
> 向右轮转 2 步: [6,7,1,2,3,4,5]
> 向右轮转 3 步: [5,6,7,1,2,3,4]
> ```
>
> **示例 2:**
>
> ```
> 输入：nums = [-1,-100,3,99], k = 2
> 输出：[3,99,-1,-100]
> 解释: 
> 向右轮转 1 步: [99,-1,-100,3]
> 向右轮转 2 步: [3,99,-1,-100]
> ```
>
> ----



**暴力法**

> 老是忘记append要+...

```go
func rotate(nums []int, k int)  {
    n := len(nums)
    l := n - k % n
    
    temp := append(nums[l:], nums[:l]...)
    copy(nums, temp)
}
```



**一个神奇的翻转三次的方法**

> 评论区卧虎藏龙啊🤔

```go
func rotate(nums []int, k int) {
    n := len(nums)
    k %= n

    reverse(nums)
    reverse(nums[:k])
    reverse(nums[k:])
}

func reverse(a []int) {
    left, right := 0, len(a)-1
    for left < right {
        a[left], a[right] = a[right], a[left]
        left++
        right--
    }
}
```
