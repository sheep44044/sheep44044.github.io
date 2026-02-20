---
title: LeetCode-454.四数相加II
published: 2026-02-20
description: ''
image: ''
tags: ["哈希"]
category: '算法'
draft: false 
lang: ''
---

### 哈希表

[**454.四数相加II**](https://leetcode.cn/problems/4sum-ii/)

> 给你四个整数数组 `nums1`、`nums2`、`nums3` 和 `nums4` ，数组长度都是 `n` ，请你计算有多少个元组 `(i, j, k, l)` 能满足：
>
> - `0 <= i, j, k, l < n`
> - `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`
>
> ----

> **示例 1：**
>
> ```
> 输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
> 输出：2
> 解释：
> 两个元组如下：
> 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
> 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
> ```
>
> **示例 2：**
>
> ```
> 输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
> 输出：1
> ```
>
> ----



**代码随想路**

> 感觉是对直接四个循环的优化，通过一个哈希储存数据减少循环,拿空间换时间

```go
func fourSumCount(nums1 []int, nums2 []int, nums3 []int, nums4 []int) int {
    m :=make(map[int]int)
    count := 0
    for _, i := range nums1 {
        for _, j := range nums2{
            m[i + j]++
        }
    }

    for _, i := range nums3 {
        for _, j := range nums4{
            if v , ok := m[-i - j]; ok{
                count += v
            }
        }
    }

    return count
}
```

