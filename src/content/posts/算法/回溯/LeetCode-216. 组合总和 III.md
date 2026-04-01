---
title: LeetCode-216. 组合总和 III
published: 2026-04-01
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---

### 回溯

[**216. 组合总和 III**](https://leetcode.cn/problems/combination-sum-iii/)

> 找出所有相加之和为 `n` 的 `k` 个数的组合，且满足下列条件：
>
> - 只使用数字1到9
> - 每个数字 **最多使用一次** 
>
> 返回 *所有可能的有效组合的列表* 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
>
> ----

> **
> 示例 1:**
>
> ```
> 输入: k = 3, n = 7
> 输出: [[1,2,4]]
> 解释:
> 1 + 2 + 4 = 7
> 没有其他符合的组合了。
> ```
>
> **示例 2:**
>
> ```
> 输入: k = 3, n = 9
> 输出: [[1,2,6], [1,3,5], [2,3,4]]
> 解释:
> 1 + 2 + 6 = 9
> 1 + 3 + 5 = 9
> 2 + 3 + 4 = 9
> 没有其他符合的组合了。
> ```
>
> **示例 3:**
>
> ```
> 输入: k = 4, n = 1
> 输出: []
> 解释: 不存在有效的组合。
> 在[1,9]范围内使用4个不同的数字，我们可以得到的最小和是1+2+3+4 = 10，因为10 > 1，没有有效的组合。
> ```
>
> ---



**手撕**

```go
func combinationSum3(k int, n int) [][]int {
    res := [][]int{}
    path := []int{}

    var end int
    if n > 9 {
        end = 9
    }else {
        end = n
    }

    var sum int
    var backtrack func(int)
    backtrack = func(index int) {
        if len(path) == k {
            if sum == n {
                res = append(res, append([]int(nil), path...))
                return
            }
            return
        }

        for i := index; i <= end; i++ {
            path = append(path, i)
            sum += i
            backtrack(i+1)
            path = path[:len(path)-1]
            sum -= i
        }
    }

    backtrack(1)
    return res
}
```



**剪枝优化版**

```go
func combinationSum3(k int, n int) [][]int {
    var res [][]int
    var path []int
    var sum int

    var backtrack func(int)
    backtrack = func(startIndex int) {
        if sum > n {
            return
        }
      
        if len(path) == k {
            if sum == n {
                res = append(res, append([]int(nil), path...))
            }
            return
        }

        maxStart := 9 - (k - len(path)) + 1 
        
        for i := startIndex; i <= maxStart; i++ {
            if sum + i > n {
                break
            }

            path = append(path, i)
            sum += i
            backtrack(i + 1)      
            sum -= i              
            path = path[:len(path)-1] 
        }
    }

    backtrack(1)
    return res
}
```
