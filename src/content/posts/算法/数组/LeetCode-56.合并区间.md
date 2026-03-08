---
title: LeetCode-56.合并区间
published: 2026-03-06
description: ''
image: ''
tags: ["数组"]
category: '算法'
draft: false 
lang: ''
---

### 数组

[**56. 合并区间**](https://leetcode.cn/problems/merge-intervals/)

> 以数组 `intervals` 表示若干个区间的集合，其中单个区间为 `intervals[i] = [starti, endi]` 。请你合并所有重叠的区间，并返回 *一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间* 。
>
> ----

> **示例 1：**
>
> ```
> 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
> 输出：[[1,6],[8,10],[15,18]]
> 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
> ```
>
> **示例 2：**
>
> ```
> 输入：intervals = [[1,4],[4,5]]
> 输出：[[1,5]]
> 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
> ```
>
> **示例 3：**
>
> ```
> 输入：intervals = [[4,7],[1,4]]
> 输出：[[1,7]]
> 解释：区间 [1,4] 和 [4,7] 可被视为重叠区间。
> ```
>
> ----



**看了思路后写的**

思路：1.排序

​	2.遍历排序后的区间。

- 如果当前区间的**左端点** ≤ 结果集中最后一个区间的**右端点**，说明有重叠，**合并**（更新结果集最后一个区间的右端点为两者的最大值）。
- 如果当前区间的**左端点** > 结果集中最后一个区间的**右端点**，说明不重叠，直接作为新区间**加入**结果集

```go
func merge(intervals [][]int) [][]int {
    if len(intervals) <= 1 {
        return intervals
    }

    sort.Slice(intervals,func(i, j int) bool {
        return intervals[i][0] < intervals[j][0]
    })

    res := [][]int{intervals[0]}
    for i := 1; i < len(intervals); i++ {
        current := intervals[i]
        last := &res[len(res)-1]

        if current[0] <= (*last)[1] {
            if current[1] > (*last)[1] {
                (*last)[1] = current[1]
            }
        }else{
                res = append(res, current)
            }

    }

    return res
}
```



