---
title: LeetCode-39. 组合总和
published: 2026-04-01
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---

### 回溯

[**39. 组合总和**](https://leetcode.cn/problems/combination-sum/)

> 给你一个 **无重复元素** 的整数数组 `candidates` 和一个目标整数 `target` ，找出 `candidates` 中可以使数字和为目标数 `target` 的 所有 **不同组合** ，并以列表形式返回。你可以按 **任意顺序** 返回这些组合。
>
> `candidates` 中的 **同一个** 数字可以 **无限制重复被选取** 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
>
> 对于给定的输入，保证和为 `target` 的不同组合数少于 `150` 个。
>
> ----

> **示例 1：**
>
> ```
> 输入：candidates = [2,3,6,7], target = 7
> 输出：[[2,2,3],[7]]
> 解释：
> 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
> 7 也是一个候选， 7 = 7 。
> 仅有这两种组合。
> ```
>
> **示例 2：**
>
> ```
> 输入: candidates = [2,3,5], target = 8
> 输出: [[2,2,2,2],[2,3,3],[3,5]]
> ```
>
> **示例 3：**
>
> ```
> 输入: candidates = [2], target = 1
> 输出: []
> ```
>
> ---



**手撕版**

```go
func combinationSum(candidates []int, target int) [][]int {
    sort.Ints(candidates)
    res := [][]int{}
    path := []int{}

    var sum int
    var backtrack func(int)
    backtrack = func(index int) {
        if sum > target {
            return
        }
        
        if sum == target {
            res = append(res, append([]int(nil), path...))
            return
        }    

        for i := index; i < len(candidates); i++ {
            path = append(path, candidates[i])
            sum += candidates[i]
            backtrack(i)
            path = path[:len(path)-1]
            sum -= candidates[i]
        }
    }

    backtrack(0)
    return res
}
```



**剪枝优化版**

```go
func combinationSum(candidates []int, target int) [][]int {
    sort.Ints(candidates)
    res := [][]int{}
    path := []int{}

    var sum int
    var backtrack func(int)
    backtrack = func(index int) { 
        if sum == target {
            res = append(res, append([]int(nil), path...))
            return
        }    

        for i := index; i < len(candidates); i++ {
        		if sum + candidates[i] > target {
            		break	
          	}
            path = append(path, candidates[i])
            sum += candidates[i]
            backtrack(i)
            path = path[:len(path)-1]
            sum -= candidates[i]
        }
    }

    backtrack(0)
    return res
}
```
