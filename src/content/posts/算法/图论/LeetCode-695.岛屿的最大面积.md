---
title: LeetCode-695.岛屿的最大面积
published: 2026-03-19
description: ''
image: ''
tags: ["图论","DFS"]
category: '算法'
draft: false 
lang: ''
---

### 图论

[**695. 岛屿的最大面积**](https://leetcode.cn/problems/max-area-of-island/)

> 给你一个大小为 `m x n` 的二进制矩阵 `grid` 。
>
> **岛屿** 是由一些相邻的 `1` (代表土地) 构成的组合，这里的「相邻」要求两个 `1` 必须在 **水平或者竖直的四个方向上** 相邻。你可以假设 `grid` 的四个边缘都被 `0`（代表水）包围着。
>
> 岛屿的面积是岛上值为 `1` 的单元格的数目。
>
> 计算并返回 `grid` 中最大的岛屿面积。如果没有岛屿，则返回面积为 `0` 。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
> 输出：6
> 解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
> ```
>
> **示例 2：**
>
> ```
> 输入：grid = [[0,0,0,0,0,0,0,0]]
> 输出：0
> ```
>
> ---



**自己的解法(DFS)**

> 我靠，怎么你和 [200. 岛屿数量](https://leetcode.cn/problems/number-of-islands/) 的数组类型不一样的，害我看了好一会儿没看出来哪里有问题

思路：我认为是 [**200. 岛屿数量**](https://leetcode.cn/problems/number-of-islands/) + [**543. 二叉树的直径**](https://leetcode.cn/problems/diameter-of-binary-tree/) 

```go
func maxAreaOfIsland(grid [][]int) int {
    if len(grid) == 0 {
        return 0
    }
    maxcount := 0

    var dfs func(r,c int) int
    dfs = func(r, c int) int {
        if r < 0 || c < 0 || r >= len(grid) || c >= len(grid[0]) || grid[r][c] == 0 {
            return 0
        }

        grid[r][c] = 0

        up := dfs(r-1, c)
        down := dfs(r+1, c)
        left := dfs(r, c-1)
        right := dfs(r, c+1)

        if up + down + left + right + 1 > maxcount {
            maxcount = up + down + left + right + 1
        }

        return up + down + left + right + 1
    }

    for i := 0; i < len(grid); i++ {
        for j := 0; j < len(grid[0]); j++ {
            if grid[i][j] == 1 {
                dfs(i, j)
            }
        }
    }

    return maxcount
}
```



**稍微优化一下**

```go
func maxAreaOfIsland(grid [][]int) int {
    if len(grid) == 0 {
        return 0
    }
    maxcount := 0

    var dfs func(r, c int) int
    dfs = func(r, c int) int {
        if r < 0 || c < 0 || r >= len(grid) || c >= len(grid[0]) || grid[r][c] == 0 {
            return 0
        }
        grid[r][c] = 0 
        return 1 + dfs(r-1, c) + dfs(r+1, c) + dfs(r, c-1) + dfs(r, c+1)
    }

    for i := 0; i < len(grid); i++ {
        for j := 0; j < len(grid[0]); j++ {
            if grid[i][j] == 1 {
                area := dfs(i, j)
                if area > maxcount {
                    maxcount = area
                }
            }
        }
    }
    return maxcount
}
```

