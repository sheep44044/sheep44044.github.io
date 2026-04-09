---
title: LeetCode-79. 单词搜索
published: 2026-04-02
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---

### 回溯

[**79. 单词搜索**](https://leetcode.cn/problems/word-search/)

> 给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在于网格中，返回 `true` ；否则，返回 `false` 。
>
> 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2020/11/04/word2.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = "ABCCED"
> 输出：true
> ```
>
> **示例 2：**
>
> <img src="https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = "SEE"
> 输出：true
> ```
>
> **示例 3：**
>
> <img src="https://assets.leetcode.com/uploads/2020/10/15/word3.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = "ABCB"
> 输出：false
> ```
>
> ---



**思路**

感觉这道题是 [**200. 岛屿数量**](https://leetcode.cn/problems/number-of-islands/) 的进阶版，难点就是如何处理四个方向的递归？

这里就给`backtrack`引入了一个`bool`返回值，这段代码`found := backtrack(row-1, col, index+1) || backtrack(row+1, col, index+1) || backtrack(row, col-1, index+1) || backtrack(row, col+1, index+1)`是点精之笔

并且这里对数据的存储和处理也是比较有意思的，`board[row][col] = '#'`，不需要引入额外的数组，就可以避开这个数

```go
func exist(board [][]byte, word string) bool {
    m, n := len(board), len(board[0])
    
    var backtrack func(row, col, index int) bool
    backtrack = func(row, col, index int) bool {
        if index == len(word) {
            return true
        }

        if row < 0 || col < 0 || row >= m || col >= n || board[row][col] != word[index] {
            return false
        }
        
        temp := board[row][col]
        board[row][col] = '#'

        found := backtrack(row-1, col, index+1) || backtrack(row+1, col, index+1) || backtrack(row, col-1, index+1) || backtrack(row, col+1, index+1)
        
        board[row][col] = temp
        return found
    }
    
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if board[i][j] == word[0] {
                if backtrack(i, j, 0) {
                    return true
                }
            }
        }
    }
    return false
}
```

