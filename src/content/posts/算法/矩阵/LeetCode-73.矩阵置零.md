---
title: LeetCode-73.矩阵置零
published: 2026-03-08
description: ''
image: ''
tags: ["矩阵"]
category: '算法'
draft: false 
lang: ''
---

### 矩阵

[**73. 矩阵置零**](https://leetcode.cn/problems/set-matrix-zeroes/)

> 给定一个 `*m* x *n*` 的矩阵，如果一个元素为 **0** ，则将其所在行和列的所有元素都设为 **0** 。请使用 **[原地](http://baike.baidu.com/item/原地算法)** 算法**。**
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg)
>
> ```
> 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
> 输出：[[1,0,1],[0,0,0],[1,0,1]]
> ```
>
> **示例 2：**
>
> ![img](https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg)
>
> ```
> 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
> 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
> ```
>
> ---



**空间复杂度O(m+n)的方法**

```go
func setZeroes(matrix [][]int)  {
    m := len(matrix)
    n := len(matrix[0])
    row := make([]bool, m)
    col := make([]bool, n)

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++{
            if matrix[i][j] == 0 {
                row[i] = true
                col[j] = true
            }
        }
    }

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++{
            if row[i] == true || col[j] == true {
                matrix[i][j] = 0
            }
        }
    }

}
```



**空间复杂度O(1)的方法**

**思路**：

相较于上个方法，这里把矩阵的第一行和第一列，直接当成上面的 `row` 和 `col` 数组来用。

**两个疑惑点**: 1.为什么可以这样用？ 2.不会影响第一行和列吗？

1. 这里因为如果这个数字下面有0，那么这行/列最后会都会变为0。如果没有就不变。所以拿这个作为`row` 和 `col` 数组来用，不会影响这几个数字的结局。
2. 用两个布尔变量 `row0Flag` 和 `col0Flag`，去扫一遍第一行和第一列，记下来它们原本到底有没有 0。这样就可以判断原本有没有0。

```go
func setZeroes(matrix [][]int)  {
    m := len(matrix)
    n := len(matrix[0])
    row0Flag := false
    col0Flag := false

    for i := 0; i < n; i++ {
        if matrix[0][i] == 0 {
            row0Flag = true
        }
    }

    for i := 0; i < m; i++ {
        if matrix[i][0] == 0 {
            col0Flag = true
        }
    }

    for i := 1; i < m; i++ {
        for j := 1; j < n; j++{
            if matrix[i][j] == 0 {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for i := 1; i < m; i++ {
        for j := 1; j < n; j++{
            if matrix[i][0] == 0 || matrix[0][j] == 0 {
                matrix[i][j] = 0
            }
        }
    }
    
    if row0Flag == true {
        for i := 0; i < n; i++ {
            matrix[0][i] = 0
        }
    }

    if col0Flag == true {
        for i := 0; i < m; i++ {
            matrix[i][0] = 0
        }
    }
}
```
