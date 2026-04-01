---
title: LeetCode-77. 组合
published: 2026-04-01
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---

### 回溯

[**77. 组合**](https://leetcode.cn/problems/combinations/)

> 给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。
>
> 你可以按 **任何顺序** 返回答案。
>
> ----

> **示例 1：**
>
> ```
> 输入：n = 4, k = 2
> 输出：
> [
>   [2,4],
>   [3,4],
>   [2,3],
>   [1,2],
>   [1,3],
>   [1,4],
> ]
> ```
>
> **示例 2：**
>
> ```
> 输入：n = 1, k = 1
> 输出：[[1]]
> ```
>
> ---



```go
func combine(n int, k int) [][]int {
    res := [][]int{}
    path := []int{}

    var backtrack func(int)
    backtrack = func(index int) {
        if len(path) == k {
            res = append(res, append([]int(nil), path...))
            return
        }
        
        for i := index; i <= n; i++ {
            path = append(path, i)
            backtrack(i+1)
            path = path[:len(path)-1]
        }
    }

    backtrack(1)
    return res
}
```

