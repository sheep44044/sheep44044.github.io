---
title: LeetCode-994.腐烂的橘子
published: 2026-03-19
description: ''
image: ''
tags: ["图论","BFS"]
category: '算法'
draft: false 
lang: ''
---

### 图论

[**994. 腐烂的橘子**](https://leetcode.cn/problems/rotting-oranges/)

> 在给定的 `m x n` 网格 `grid` 中，每个单元格可以有以下三个值之一：
>
> - 值 `0` 代表空单元格；
> - 值 `1` 代表新鲜橘子；
> - 值 `2` 代表腐烂的橘子。
>
> 每分钟，腐烂的橘子 **周围 4 个方向上相邻** 的新鲜橘子都会腐烂。
>
> 返回 *直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 `-1`* 。
>
> ----

> **示例 1：**
>
> **![img](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2019/02/16/oranges.png)**
>
> ```
> 输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
> 输出：4
> ```
>
> **示例 2：**
>
> ```
> 输入：grid = [[2,1,1],[0,1,1],[1,0,1]]
> 输出：-1
> 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上。
> ```
>
> **示例 3：**
>
> ```
> 输入：grid = [[0,2]]
> 输出：0
> 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
> ```
>
> ---



**BFS的解法**

思路：

1.  容易被题目示例误导的一点是：这里的烂橘子是可以不止一个的，这就与 [**200. 岛屿数量**](https://leetcode.cn/problems/number-of-islands/) 有所不同，从“单源”改为“多源”，所以需要先遍历一次网格，把所有初始状态就是 `2` 的烂橘子**全部**塞进初始队列中。它们处于同一“层”，地位平等，会像水波纹一样同时向外扩散。

2. 就是`rottedThisMinute = true`的作用，我们会疑惑时间不是一直在增加的吗，为什么需要这个？

   这是因为会遇到像`示例3`的状况，它们被从 `queue` 中取出来，此时，它们周围已经没有任何新鲜橘子了（或者被墙挡住了），但程序还会检查，所以这段时间是不需要或者说是没意义的。

```go
func orangesRotting(grid [][]int) int {
    if len(grid) == 0 {
        return 0
    }

    m, n := len(grid), len(grid[0])
    queue := [][]int{}
    freshCount := 0

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == 2 {
                queue = append(queue, []int{i, j})
            } else if grid[i][j] == 1 {
                freshCount++
            }
        }
    }

    if freshCount == 0 {
        return 0
    }

    time := 0
    dirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

    for len(queue) > 0 {
        size := len(queue)
        rottedThisMinute := false 

        for i := 0; i < size; i++ {
            cur := queue[0]
            queue = queue[1:]
            row, col := cur[0], cur[1]

            for _, d := range dirs {
                nr, nc := row+d[0], col+d[1]
                if nr >= 0 && nc >= 0 && nr < m && nc < n && grid[nr][nc] == 1 {
                    grid[nr][nc] = 2 
                    freshCount--    
                    queue = append(queue, []int{nr, nc})
                    rottedThisMinute = true
                }
            }
        }
        
        if rottedThisMinute {
            time++
        }
    }

    if freshCount > 0 {
        return -1
    }

    return time
}
```

