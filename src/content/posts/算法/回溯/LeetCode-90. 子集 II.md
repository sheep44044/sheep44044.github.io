---
title: LeetCode-90. 子集 II
published: 2026-04-04
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---

### 回溯

[**90. 子集 II**](https://leetcode.cn/problems/subsets-ii/)

> 给你一个整数数组 `nums` ，其中可能包含重复元素，请你返回该数组所有可能的 子集（幂集）。
>
> 解集 **不能** 包含重复的子集。返回的解集中，子集可以按 **任意顺序** 排列。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [1,2,2]
> 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
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



**手撕**

思路:这里很像 [**47. 全排列 II**](https://leetcode.cn/problems/permutations-ii/) 的情况，本身不需要`used`，但是需要判断不同的情况，像`1 2 2`和`1 2`的不同，所以需要判断前面的数是否使用，所以引入used

```go
func subsetsWithDup(nums []int) [][]int {
    sort.Ints(nums)

    res := [][]int{}
    path := []int{}
    used := make([]bool, len(nums))

    var backtrack func(index int) 
    backtrack = func(index int) {
        res = append(res, append([]int(nil), path...))     

        for i := index; i < len(nums); i++ {
            if i > 0 && nums[i] == nums[i-1] && !used[i-1] {
                continue
            }

            path = append(path, nums[i])
            used[i] = true
            backtrack(i+1)
            path = path[:len(path)-1]
            used[i] = false
        }
    }

    backtrack(0)
    return res
}
```

