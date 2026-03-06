---
title: LeetCode-977.有序数组的平方
published: 2026-03-05
description: ''
image: ''
tags: ["双指针","数组"]
category: '算法'
draft: false 
lang: ''
---

### 数组

[**977. 有序数组的平方**](https://leetcode.cn/problems/squares-of-a-sorted-array/)

> 给你一个按 **非递减顺序** 排序的整数数组 `nums`，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [-4,-1,0,3,10]
> 输出：[0,1,9,16,100]
> 解释：平方后，数组变为 [16,1,0,9,100]
> 排序后，数组变为 [0,1,9,16,100]
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [-7,-3,2,3,11]
> 输出：[4,9,9,49,121]
> ```
>
> ----



**我的答案**

> 被简单题卡住了一会儿

思路：1.平方就是看绝对值，来个abs把负的变为正的即可

​	2.普通的左右双指针

```go
func sortedSquares(nums []int) []int {
    n := len(nums)
    res := make([]int, n)
    left, right := 0, n-1
    
    for i := n - 1; i >= 0; i-- {
        if abs(nums[left]) > abs(nums[right]) {
            res[i] = nums[left] * nums[left]
            left++
        } else {
            res[i] = nums[right] * nums[right]
            right--
        }
    }
    return res
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```
