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



思路:相较于 [**46. 全排列**](https://leetcode.cn/problems/permutations/) 这里多了一步就是如何判断重复，通过`if i > 0 && nums[i] == nums[i-1] && !used[i-1]`这个语句，能避免重复的情况直接跳过

唯一需要注意的是`i > 0 && nums[i] == nums[i-1]`顺序不要写反了，不然会执行错误

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

            if i > 0 && nums[i] == nums[i-1] && !used[i-1] {
                continue
            }

            path = append(path, nums[i])
            used[i] = true
            backtrack()
            path = path[:len(path)-1]
            used[i] = false
        }
    }

    backtrack()
    return res
}
```

