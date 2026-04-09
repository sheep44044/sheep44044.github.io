---
title: LeetCode-51. N 皇后
published: 2026-04-06
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---

### 回溯

[**51. N 皇后**](https://leetcode.cn/problems/n-queens/)

> 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
>
> **n 皇后问题** 研究的是如何将 `n` 个皇后放置在 `n×n` 的棋盘上，并且使皇后彼此之间不能相互攻击。
>
> 给你一个整数 `n` ，返回所有不同的 **n 皇后问题** 的解决方案。
>
> 每一种解法包含一个不同的 **n 皇后问题** 的棋子放置方案，该方案中 `'Q'` 和 `'.'` 分别代表了皇后和空位。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2020/11/13/queens.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：n = 4
> 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
> 解释：如上图所示，4 皇后问题存在两个不同的解法。
> ```
>
> **示例 2：**
>
> ```
> 输入：n = 1
> 输出：[["Q"]]
> ```
>
> ---



**思路**

这道题的难点我认为是这两个1.如何在剪枝中去掉行列和两个对角线的重复 2.避免思维惯性，用`board`储存数据而非`path`

**同行**：因为我们每次递归都会走向下一行（`row + 1`），天生就保证了每行只有一个皇后。

**同列**：需要一个 `cols` 数组来记录哪一列已经被占用了。

**主对角线**：它们的 **`row - col` 的差值是固定相等的**。

**副对角线**：同理，它们的 **`row + col` 的和是固定相等的**。

```go
func solveNQueens(n int) [][]string {
   board := make([][]byte, n)
   res := [][]string{}

   for i := 0; i < n; i++ {
        board[i] = make([]byte, n)
        for j := 0; j < n; j++ {
            board[i][j] = '.'
        }
    }

    cols := make([]bool, n)
    diag1 := make([]bool, 2*n)
    diag2 := make([]bool, 2*n)

    var backtrack func(row int)
    backtrack = func(row int) {
        if row == n {
            temp := make([]string, n)
            for i := 0; i < n; i++ {
                temp[i] = string(board[i])
            }
            res = append(res, temp)
            return
        }

        for col := 0; col < n; col++ {
            d1 := col - row + n
            d2 := col + row

            if cols[col] || diag1[d1] || diag2[d2] {
                continue
            }

            board[row][col] = 'Q'
            cols[col] = true
            diag1[d1] = true
            diag2[d2] = true

            backtrack(row+1)

            board[row][col] = '.'
            cols[col] = false
            diag1[d1] = false
            diag2[d2] = false
        }
    }
    
    backtrack(0)
    return res
}
```

