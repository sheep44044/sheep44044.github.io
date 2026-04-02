---
title: LeetCode-47. 全排列 II
published: 2026-04-02
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---

### 回溯

[**47. 全排列 II**](https://leetcode.cn/problems/permutations-ii/)

> 给定一个可包含重复数字的序列 `nums` ，***按任意顺序*** 返回所有不重复的全排列。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [1,1,2]
> 输出：
> [[1,1,2],
>  [1,2,1],
>  [2,1,1]]
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [1,2,3]
> 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
> ```
>
> ---



```go
func permuteUnique(nums []int) [][]int {
    sort.Ints(nums)

    res := [][]int{}
    path := []int{}
    used := make([]bool, len(nums))

    var backtrack func() 
    backtrack = func() {
        if len(path) == len(nums) {
            res = append(res, append([]int(nil), path...))
        }

        for i := 0; i < len(nums); i++ {
            if used[i] {
                continue
            }
            if nums[i] = nums
            path = append(path, nums[i])
            used[i] = true
            backtrack()
            path = path[:len(path)-1]
            used[i] = false
        }
    }
    
}
```

