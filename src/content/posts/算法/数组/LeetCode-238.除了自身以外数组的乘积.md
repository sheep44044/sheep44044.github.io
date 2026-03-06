---
title: LeetCode-238.除了自身以外数组的乘积
published: 2026-03-06
description: ''
image: ''
tags: ["前缀和","数组"]
category: '算法'
draft: false 
lang: ''
---

### 数组

[**238. 除了自身以外数组的乘积**](https://leetcode.cn/problems/product-of-array-except-self/)

> 给你一个整数数组 `nums`，返回 数组 `answer` ，其中 `answer[i]` 等于 `nums` 中除了 `nums[i]` 之外其余各元素的乘积 。
>
> 题目数据 **保证** 数组 `nums`之中任意元素的全部前缀元素和后缀的乘积都在 **32 位** 整数范围内。
>
> 请 **不要使用除法，**且在 `O(n)` 时间复杂度内完成此题。
>
> ----

> **示例 1:**
>
> ```
> 输入: nums = [1,2,3,4]
> 输出: [24,12,8,6]
> ```
>
> **示例 2:**
>
> ```
> 输入: nums = [-1,1,0,-3,3]
> 输出: [0,0,9,0,0]
> ```
>
> ----



**看了思路后写的**

思路：就像题目说的一样，用前缀和和后缀和，不过这里是积

```go
func productExceptSelf(nums []int) []int {
    n := len(nums)
    res := make([]int,n)
    left := make([]int,n)
    right := make([]int,n)

    left[0] = 1
    for i := 1; i < n; i++ {
        left[i] = left[i-1] * nums[i-1] 
    }

    right[n-1] = 1
    for i := n-2; i >= 0; i-- {
        right[i] = right[i+1] * nums[i+1]
    }

    for i := 0; i < n; i++ {
        res[i] = left[i]*right[i]
    }

    return res
}
```



**更优化的方法**

```go
func productExceptSelf(nums []int) []int {
    n := len(nums)
    ans := make([]int, n)
    
    ans[0] = 1
    for i := 1; i < n; i++ {
        ans[i] = ans[i-1] * nums[i-1]
    }
    
    rightProduct := 1
    for i := n - 1; i >= 0; i-- {
        ans[i] = ans[i] * rightProduct
        rightProduct *= nums[i]
    }
    
    return ans
}
```

