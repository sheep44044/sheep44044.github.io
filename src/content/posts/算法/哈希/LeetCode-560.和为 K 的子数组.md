---
title: LeetCode-560.和为 K 的子数组
published: 2026-03-05
description: ''
image: ''
tags: ["前缀和","哈希"]
category: '算法'
draft: false 
lang: ''
---

### 哈希表

[**560. 和为 K 的子数组**](https://leetcode.cn/problems/subarray-sum-equals-k/)

> 给你一个整数数组 `nums` 和一个整数 `k` ，请你统计并返回 *该数组中和为 `k` 的子数组的个数* 。
>
> 子数组是数组中元素的连续非空序列
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [1,1,1], k = 2
> 输出：2
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [1,2,3], k = 3
> 输出：2
> ```
>
> ----



**1.解法**

思路：1.负数破坏了单调性，所以不能用滑动窗口

​	2.前缀和 + 哈希表 | k = 两个前缀和的差

​	3.参考[**1. 两数之和**](https://leetcode.cn/problems/two-sum/)

```go
func subarraySum(nums []int, k int) int {
    sum := 0
    m := make(map[int]int)
    m[0] = 1
    res := 0

    for i := 0; i < len(nums); i++ {
        sum += nums[i]
        need := sum - k
        if j, ok := m[need]; ok {
            res += j
        }
        m[sum]++
    } 
    return res
}
```

