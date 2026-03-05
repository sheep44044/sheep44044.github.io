---
title: LeetCode-53.最大子数组和
published: 2026-03-05
description: ''
image: ''
tags: ["前缀和" "数组"]
category: '算法'
draft: false 
lang: ''
---

### 数组

[**53. 最大子数组和**](https://leetcode.cn/problems/maximum-subarray/)

> 给你一个整数数组 `nums` ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
>
> **子数组**是数组中的一个连续部分。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
> 输出：6
> 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [1]
> 输出：1
> ```
>
> **示例 3：**
>
> ```
> 输入：nums = [5,4,-1,7,8]
> 输出：23
> ```
>
> ----



**AI优化后的答案**

> 优雅

思路：前缀和+数组

```go
func maxSubArray(nums []int) int {
    sum := 0
    maxsum := -10001
    minsum := 0

    for _, num := range nums {
        sum += num
        
        maxsum = max(maxsum, sum-minsum)

        minsum = min(minsum, sum)
    }

    return maxsum
}
```



**自己的答案**

> 有点丑陋了这个答案，虽然是手撕

```go
func maxSubArray(nums []int) int {
    sum := 0
    maxsum := -10001
    minnum := 10001
    m := []int{0}
    

    if len(nums) == 1 {
        return nums[0]
    }

    for i := 1; i <= len(nums); i++ {
        minnum = min(minnum, m[i-1])
        sum += nums[i-1]
        m = append(m, sum)
        
        maxsum = max(maxsum, m[i]-minnum)
    }

    return maxsum
}
```



**一个204/210正确的答案**

> 超时了，可惜...纪念一下逝去的暴力法

```go
func maxSubArray(nums []int) int {
    sum := 0
    maxsum := -10001
    m := []int{0}
    

    if len(nums) == 1 {
        return nums[0]
    }

    for i := 1; i <= len(nums); i++ {
        sum += nums[i-1]
        m = append(m, sum)

        for j := 0; j < i; j++ {
            maxsum = max(maxsum, m[i]-m[j])
        }
        
    }

    return maxsum
}
```

