---
title: LeetCode-118. 杨辉三角
published: 2026-04-17
description: ''
image: ''
tags: ["动态规划"]
category: '算法'
draft: false 
lang: ''
---

### 动态规划

[**118. 杨辉三角**](https://leetcode.cn/problems/pascals-triangle/)

> 给定一个非负整数 *`numRows`，*生成「杨辉三角」的前 *`numRows`* 行。
>
> 在**「杨辉三角」**中，每个数是它左上方和右上方的数的和。
>
> <img src="https://pic.leetcode.cn/1626927345-DZmfxB-PascalTriangleAnimated2.gif" alt="img" style="zoom: 67%;" />
>
> ----

>  **示例 1:**
>
> ```
> 输入: numRows = 5
> 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
> ```
>
> **示例 2:**
>
> ```
> 输入: numRows = 1
> 输出: [[1]]
> ```
>
> ---



**思路(手撕)**

与 [**70. 爬楼梯**](https://leetcode.cn/problems/climbing-stairs/) 类似

```go
func generate(numRows int) [][]int {
    if numRows == 1 {
        return [][]int{{1}}
    }

    if numRows == 2 {
        return [][]int{{1},{1, 1}}
    }

    res := [][]int{{1}, {1, 1}}
    for i := 2; i < numRows; i++ {
        path := make([]int, i+1)
        path[0], path[len(path)-1] = 1, 1
        for j := 1; j < i; j++ {
            path[j] = res[i-1][j-1] + res[i-1][j]
        }
        res = append(res, path)
    }
    return res
}
```

