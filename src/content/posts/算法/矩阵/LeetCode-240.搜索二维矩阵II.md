---
title: LeetCode-240.搜索二维矩阵II
published: 2026-03-08
description: ''
image: ''
tags: ["矩阵"]
category: '算法'
draft: false 
lang: ''
---

### 矩阵

[**240. 搜索二维矩阵 II**](https://leetcode.cn/problems/search-a-2d-matrix-ii/)

> 编写一个高效的算法来搜索 `*m* x *n*` 矩阵 `matrix` 中的一个目标值 `target` 。该矩阵具有以下特性：
>
> - 每行的元素从左到右升序排列。
> - 每列的元素从上到下升序排列。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/11/25/searchgrid2.jpg)
>
> ```
> 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
> 输出：true
> ```
>
> 
>
> **示例 2：**
>
> ![img](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/11/25/searchgrid.jpg)
>
> ```
> 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
> 输出：false
> ```
>
> ---



**暴力法最快乐的一集**

> 二叉树似乎是最正确的答案，等之后学到再看看吧

```go
func searchMatrix(matrix [][]int, target int) bool {
    m := len(matrix)
    n := len(matrix[0])

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if matrix[i][j] > target {
                break
            }

            if(matrix[i][j]==target) {
                return true
            }
        }
    }

    return false;
}
```

