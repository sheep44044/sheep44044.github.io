---
title: LeetCode-78. 子集
published: 2026-04-01
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---

### 回溯

[**78. 子集**](https://leetcode.cn/problems/subsets/)

> 给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。
>
> 解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [1,2,3]
> 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [0]
> 输出：[[],[0]]
> ```
>
> ---



```go
func subsets(nums []int) [][]int {
    if len(nums) == 0 {
        return nil
    }

    res := [][]int{}
    path := []int{}

    var backtrack func(int)
    backtrack = func(start int) {
        res = append(res, append([]int(nil), path...))
        
        for i:= start; i < len(nums); i++ {
            path = append(path, nums[i])
            backtrack(i+1)
            path = path[:len(path)-1]
        }
    }

    backtrack(0)
    return res
}
```

