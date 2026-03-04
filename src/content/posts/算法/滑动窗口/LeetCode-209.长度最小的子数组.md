---
title: LeetCode-209.长度最小的子数组
published: 2026-03-04
description: ''
image: ''
tags: ["滑动窗口"]
category: '算法'
draft: false 
lang: ''
---



### 滑动窗口

[**209. 长度最小的子数组**](https://leetcode.cn/problems/minimum-size-subarray-sum/)

> 给定一个含有 `n` 个正整数的数组和一个正整数 `target` **。**
>
> 找出该数组中满足其总和大于等于 `target` 的长度最小的 **子数组** `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度**。**如果不存在符合条件的子数组，返回 `0` 。
>
> ----

> **示例 1：**
>
> ```
> 输入：target = 7, nums = [2,3,1,2,4,3]
> 输出：2
> 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
> ```
>
> **示例 2：**
>
> ```
> 输入：target = 4, nums = [1,4,4]
> 输出：1
> ```
>
> **示例 3：**
>
> ```
> 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
> 输出：0
> ```
>
> ----



**1.自己的解法(滑动的窗口)**

> 手撕，不过自己写的太丑陋了，让ai润色一下

```go
func minSubArrayLen(target int, nums []int) int {
    left, right := 0, 0
    sum := 0
    minlen := len(nums) + 1 

    for right < len(nums) {
        sum += nums[right]
        
        for sum >= target {
            minlen = min(minlen,right-left+1)
            sum -= nums[left]
            left++
        }

        right++
    }

    if minlen == len(nums) + 1 {
        return 0
    }

    return minlen
}
```

