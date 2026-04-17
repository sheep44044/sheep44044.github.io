---
title: LeetCode-452. 用最少数量的箭引爆气球
published: 2026-04-17
description: ''
image: ''
tags: ["贪心算法"]
category: '算法'
draft: false 
lang: ''
---

### 贪心算法

[**452. 用最少数量的箭引爆气球**](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)

> 有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组 `points` ，其中`points[i] = [xstart, xend]` 表示水平直径在 `xstart` 和 `xend`之间的气球。你不知道气球的确切 y 坐标。
>
> 一支弓箭可以沿着 x 轴从不同点 **完全垂直** 地射出。在坐标 `x` 处射出一支箭，若有一个气球的直径的开始和结束坐标为 `xstart`，`xend`， 且满足  `xstart ≤ x ≤ xend`，则该气球会被 **引爆** 。可以射出的弓箭的数量 **没有限制** 。 弓箭一旦被射出之后，可以无限地前进。
>
> 给你一个数组 `points` ，*返回引爆所有气球所必须射出的 **最小** 弓箭数* 。
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

思路和 [**435. 无重叠区间**](https://leetcode.cn/problems/non-overlapping-intervals/) 类似，其中这段代码` else { end = points[i][1] }`，确保`end`的右边界最大，只要在end左侧即可重叠，箭的次数减一。

```go
func findMinArrowShots(points [][]int) int {
    if len(points) <= 1 {
        return 1
    }

    sort.Slice(points, func(i, j int) bool {
        return points[i][1] < points[j][1] 
    })

    count := len(points)
    end := points[0][1]
    for i := 1; i < len(points); i++ {
        if points[i][0] <= end {
            count--

        }else {
            end = points[i][1]
        }
    }
    return count
}
```


