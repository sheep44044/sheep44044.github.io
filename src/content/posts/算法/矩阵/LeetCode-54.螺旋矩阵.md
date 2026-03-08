---
title: LeetCode-54.螺旋矩阵
published: 2026-03-08
description: ''
image: ''
tags: ["矩阵"]
category: '算法'
draft: false 
lang: ''
---

### 矩阵

[**54. 螺旋矩阵**](https://leetcode.cn/problems/spiral-matrix/)

> 给你一个 `m` 行 `n` 列的矩阵 `matrix` ，请按照 **顺时针螺旋顺序** ，返回矩阵中的所有元素。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)
>
> ```
> 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
> 输出：[1,2,3,6,9,8,7,4,5]
> ```
>
> **示例 2：**
>
> ![img](https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg)
>
> ```
> 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
> 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
> ```
>
> ---



**打了补丁的自己的解法**

> 我靠，这个矩形我看半天没看出来哪里写错了，后来看了ai才发现矩形会有一条行/列，没有消耗完，会继续执行的

**思路**: 参照[**59. 螺旋矩阵 II**](https://leetcode.cn/problems/spiral-matrix-ii/)

**难点**:

- **正方形**特殊之处是**行和列是一样多**的，向右走完后，剩下的一定是空集。向左的循环自然进不去。
- **长方形**向右走完后**行和列是不一样多**的，行虽然死了，但列还活着。代码就会依靠还活着的“列条件”，继续执行

```go
func spiralOrder(matrix [][]int) []int {
    m := len(matrix) 
    n := len(matrix[0])
    res := []int{}
    top, bottom := 0, m-1
    left, right := 0, n-1

    for len(res) < m * n {
        for i := left; i <= right; i++ {
            res = append(res, matrix[top][i])
        }
        top++
        
        if top > bottom {
            break
        }

        for i := top; i <= bottom; i++ {
            res = append(res, matrix[i][right])
        }
        right--
        
        if left > right {
            break
        }
        

        for i := right; i >= left; i-- {
            res = append(res, matrix[bottom][i])
        }
        bottom--

        for i := bottom; i >= top; i-- {
            res = append(res, matrix[i][left])
        }
        left++
    }

    return res
}
```

