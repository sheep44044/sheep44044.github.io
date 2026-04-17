---
title: LeetCode-435. 无重叠区间
published: 2026-04-17
description: ''
image: ''
tags: ["贪心算法"]
category: '算法'
draft: false 
lang: ''
---

### 贪心算法

[**435. 无重叠区间**](https://leetcode.cn/problems/non-overlapping-intervals/)

> 给定一个区间的集合 `intervals` ，其中 `intervals[i] = [starti, endi]` 。返回 *需要移除区间的最小数量，使剩余区间互不重叠* 。
>
> **注意** 只在一点上接触的区间是 **不重叠的**。例如 `[1, 2]` 和 `[2, 3]` 是不重叠的。
>
> ----

> **示例 1:**
>
> ```
> 输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
> 输出: 1
> 解释: 移除 [1,3] 后，剩下的区间没有重叠。
> ```
>
> **示例 2:**
>
> ```
> 输入: intervals = [ [1,2], [1,2], [1,2] ]
> 输出: 2
> 解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
> ```
>
> **示例 3:**
>
> ```
> 输入: intervals = [ [1,2], [2,3] ]
> 输出: 0
> 解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
> ```
>
> ---



**思路(自己完成)**

本题要 求除区间的最小数量，就是连接最多的区间。所以，在按照左排序的情况下，为了右边尽可能的多，如果它的左边界在前一个元素的右边界之内那么发生了重叠，我们移除前一个元素还是移除当前元素是依据谁的右边界更小（因为右边界更长那么更有可能与后面的元素发生重叠）

```go
func eraseOverlapIntervals(intervals [][]int) int {
    if len(intervals) <= 1 {
        return 0
    }

    sort.Slice(intervals, func(i, j int) bool {
        return intervals[i][0] < intervals[j][0]
    })

    count := 0
    for i, j := 0, 1; j < len(intervals); j++ {
        if intervals[i][1] <= intervals[j][0] {
            i = j
        }else {
             if intervals[i][1] > intervals[j][1] {
                i = j
            }   
            count++
        }  
    }
    return count
}
```



**思路**

这是右边界排序的方法，和上面的思路差不多，只是少了一个判断的条件

```go
func eraseOverlapIntervals(intervals [][]int) int {
    if len(intervals) <= 1 {
        return 0
    }

    sort.Slice(intervals, func(i, j int) bool {
        return intervals[i][1] < intervals[j][1] 
    })

    count := 0
    end := intervals[0][1]
    for i := 1; i < len(intervals); i++ {
        if intervals[i][0] < end { 
            count++                
        } else {                   
            end = intervals[i][1]  
        }
    }
    return count
}
```
