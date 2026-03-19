---
title: LeetCode-200.岛屿数量
published: 2026-03-19
description: ''
image: ''
tags: ["图论","DFS","BFS"]
category: '算法'
draft: false 
lang: ''
---

### 图论

[**200. 岛屿数量**](https://leetcode.cn/problems/number-of-islands/)

> 给你一个由 `'1'`（陆地）和 `'0'`（水）组成的的二维网格，请你计算网格中岛屿的数量。
>
> 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
>
> 此外，你可以假设该网格的四条边均被水包围。
>
> ----

> **示例 1：**
>
> ```
> 输入：grid = [
>   ['1','1','1','1','0'],
>   ['1','1','0','1','0'],
>   ['1','1','0','0','0'],
>   ['0','0','0','0','0']
> ]
> 输出：1
> ```
>
> **示例 2：**
>
> ```
> 输入：grid = [
>   ['1','1','0','0','0'],
>   ['1','1','0','0','0'],
>   ['0','0','1','0','0'],
>   ['0','0','0','1','1']
> ]
> 输出：3
> ```
>
> ---



**DFS的解法**

> 初次接触图论

```go
func numIslands(grid [][]byte) int {
    if len(grid) == 0 {
        return 0
    }
    count := 0

    var dfs func(r, c int)
    dfs = func(r, c int) {
        if r < 0 || c < 0 || r >= len(grid) || c >= len(grid[0]) || grid[r][c] == '0' {
            return
        }

        grid[r][c] = '0'

        dfs(r-1, c)
        dfs(r+1, c)
        dfs(r, c-1)
        dfs(r, c+1)
    }

    for i := 0; i < len(grid); i++ {
        for j := 0; j < len(grid[0]); j++ {
            if grid[i][j] == '1' {
                count++
                dfs(i, j)
            }
        }
    }

    return count
}
```



**BFS的解法**

```go
func numIslands(grid [][]byte) int {
    if len(grid) == 0 {
        return 0
    }

    count := 0
    dirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

    var bfs func(r, c int)
    bfs = func(r, c int) {
        queue := [][]int{{r, c}}
        grid[r][c] = '0'

        for len(queue) > 0 {
            cur := queue[0]
            queue = queue[1:]
            row, col := cur[0], cur[1]
            
            for _, d := range dirs {
                nr, nc := row+d[0], col+d[1]
                if nr >= 0 && nc >= 0 && nr < len(grid) && nc < len(grid[0]) && grid[nr][nc] =='1'{
                    grid[nr][nc] = '0'
                    queue = append(queue, []int{nr, nc})
                }
            }
        }

    }

    for i := 0; i < len(grid); i++ {
        for j := 0; j < len(grid[0]); j++ {
            if grid[i][j] == '1' {
                count++
                bfs(i, j)
            }
        }
    }

    return count
}
```
