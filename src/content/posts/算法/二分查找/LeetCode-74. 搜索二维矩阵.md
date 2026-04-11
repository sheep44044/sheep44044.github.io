---
title: LeetCode-74. 搜索二维矩阵
published: 2026-04-11
description: ''
image: ''
tags: ["二次查找"]
category: '算法'
draft: false 
lang: ''
---

### 二分查找

[**74. 搜索二维矩阵**](https://leetcode.cn/problems/search-a-2d-matrix/)

> 给你一个满足下述两条属性的 `m x n` 整数矩阵：
>
> - 每行中的整数从左到右按非严格递增顺序排列。
> - 每行的第一个整数大于前一行的最后一个整数。
>
> 给你一个整数 `target` ，如果 `target` 在矩阵中，返回 `true` ；否则，返回 `false` 。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
> 输出：true
> ```
>
> **示例 2：**
>
> <img src="https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/11/25/mat2.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
> 输出：false
> ```
>
> ---



**手撕**

思路: 这题可以看作长度为 m*n 的数组，只需要把`mid`转换为对应矩阵的`row`和`col`即可，其他与 [**35. 搜索插入位置**](https://leetcode.cn/problems/search-insert-position/) 类似

```go
func searchMatrix(matrix [][]int, target int) bool {
    m, n := len(matrix), len(matrix[0])
    left, right := 0, m*n-1
    var mid, row, col int

    for left <= right {
        mid = left + (right - left)/2
        row = mid / n
        col = mid % n

        if matrix[row][col] == target {
            return true
        }else if matrix[row][col] < target {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return false
}
```

