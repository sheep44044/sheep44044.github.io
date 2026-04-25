---
title: LeetCode-300. 最长递增子序列
published: 2026-04-25
description: ''
image: ''
tags: ["动态规划"]
category: '算法'
draft: false 
lang: ''
---

### 动态规划

[**300. 最长递增子序列**](https://leetcode.cn/problems/longest-increasing-subsequence/)

> 给你一个整数数组 `nums` ，找到其中最长严格递增子序列的长度。
>
> **子序列** 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，`[3,6,2,7]` 是数组 `[0,3,1,6,2,2,7]` 的子序列。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [10,9,2,5,3,7,101,18]
> 输出：4
> 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [0,1,0,3,2,3]
> 输出：4
> ```
>    
> **示例 3：**
>
> ```
>输入：nums = [7,7,7,7,7,7,7]
> 输出：1
> ```
> 
> ---



**思路**

作为新手面对这种问题，如果我们把 `dp[i]`定义为“前 i 个数中最长的递增子序列长度”，会发现状态转移方程写不出来，我们无法判断 i 是否能够添加上去。

所以，判断为把 `dp[i]`定义为“以`nums[i]`结尾的前 i 个数中最长的递增子序列长度，这样就可以直观比较了

```go
func lengthOfLIS(nums []int) int {
    n := len(nums)
    if n == 0 {
        return 0
    }
    
    dp := make([]int, n)
    for i := 0; i < n; i++ {
        dp[i] = 1
    }

    res := 1
    for i := 1; i < n; i++ {
        for j := 0; j < i; j++ {
            if nums[i] > nums[j] {
                dp[i] = max(dp[i], dp[j]+1)
            }
            res = max(res, dp[i])
        } 
    }

    return res
}
```

