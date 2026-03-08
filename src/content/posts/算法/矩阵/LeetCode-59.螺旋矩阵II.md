---
title: LeetCode-59.螺旋矩阵II
published: 2026-03-08
description: ''
image: ''
tags: ["矩阵"]
category: '算法'
draft: false 
lang: ''
---

### 矩阵

[**59. 螺旋矩阵 II**](https://leetcode.cn/problems/spiral-matrix-ii/)

> 给你一个正整数 `n` ，生成一个包含 `1` 到 `n2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix` 。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg)
>
> ```
> 输入：n = 3
> 输出：[[1,2,3],[8,9,4],[7,6,5]]
> ```
>
> **示例 2：**
>
> ```
> 输入：n = 1
> 输出：[[1]]
> ```
>
> ----



**自己的解法**

> 手撕，不过写的比较丑陋，我自己都看出来了混合使用了**相对长度 (`n`)** 和 **绝对长度 (`len`)**
>
> 思路简单，但写起来不那么简单，靠着测试用例不断校对

```go
func generateMatrix(n int) [][]int {
    matrix := make([][]int, n)
    count := 0
    circle := 0
    len := n
    square := n*n

    for i := 0; i < n; i++{
        matrix[i] = make([]int, n)
    }

    for count < square {
        for i := 0; i < n; i++ {
            count++ 
            matrix[circle][i+circle] = count
        }

        for i := 1; i < n; i++ {
            count++
            matrix[i+circle][len-circle-1] = count
        }

        for i := len-circle-2; i >= circle; i-- {
            count++
            matrix[len-circle-1][i] = count
        }

        for i := len-circle-2; i >= circle+1; i-- {
            count++
            matrix[i][circle] = count
        }

        n -= 2
        circle++
    }

    return matrix
}
```



**更优美的方法**

```go
func generateMatrix(n int) [][]int {
    matrix := make([][]int, n)
    for i := 0; i < n; i++ {
        matrix[i] = make([]int, n)
    }

    top, bottom := 0, n-1
    left, right := 0, n-1
    
    count := 1
    target := n * n

    for count <= target {
        // 1. 从左到右（贴着 top 走），走完后 top 边界下移
        for i := left; i <= right; i++ {
            matrix[top][i] = count
            count++
        }
        top++

        // 2. 从上到下（贴着 right 走），走完后 right 边界左移
        for i := top; i <= bottom; i++ {
            matrix[i][right] = count
            count++
        }
        right--

        // 3. 从右到左（贴着 bottom 走），走完后 bottom 边界上移
        for i := right; i >= left; i-- {
            matrix[bottom][i] = count
            count++
        }
        bottom--

        // 4. 从下到上（贴着 left 走），走完后 left 边界右移
        for i := bottom; i >= top; i-- {
            matrix[i][left] = count
            count++
        }
        left++
    }

    return matrix
}
```
