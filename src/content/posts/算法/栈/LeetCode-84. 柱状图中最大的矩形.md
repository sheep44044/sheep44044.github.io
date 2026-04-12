---
title: LeetCode-84. 柱状图中最大的矩形
published: 2026-04-12
description: ''
image: ''
tags: ["栈"]
category: '算法'
draft: false 
lang: ''
---

### 栈

[**84. 柱状图中最大的矩形**](https://leetcode.cn/problems/largest-rectangle-in-histogram/)

> 给定 *n* 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
>
> 求在该柱状图中，能够勾勒出来的矩形的最大面积。
>
> ----

> **示例 1:**
>
> <img src="https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：heights = [2,1,5,6,2,3]
> 输出：10
> 解释：最大的矩形为图中红色区域，面积为 10
> ```
>
> **示例 2：**
>
> <img src="https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入： heights = [2,4]
> 输出： 4
> ```
>
> ---



**思路**

这题可以说是 [**739. 每日温度**](https://leetcode.cn/problems/daily-temperatures/) 的升级版，这里有两个我遇到的难点

1. 怎么确立左右边界？

   右边界与每日温度类似，都是`i`，这里不多赘述。

   对于左边界，因为栈是单调递增的，新的栈顶元素下标`stack[len(stack)-1]`就是离它最近且比他小的柱子，符合要求。面对`[1, 6, 3, 6]`这种类似凹字也能处理，因为3把6pop后，虽然看着少了一个数变成了`[1, 3, 6]`，但是`stack`上对应的`index`是不变的，`index`是从0~4，包括了之前被弹出的距离的

2. 如果就是很极端，一直增，遇不到更小的柱子怎么办？

​	在前后都加上0，ai叫这为哨兵。

​	尾部的0就是做个保底，避免到边界了都没有遇到更小的柱子的情况。

​	头部的0就是作为左边界的保底，保证了 `leftIndex` 永远能取到一个合法的下标，并且计算出来	的宽度 `rightIndex - leftIndex - 1` 绝对正确



```go
func largestRectangleArea(heights []int) int {
    newheights := make([]int, len(heights)+2)
    copy(newheights[1:], heights)
    stack := make([]int, 0)
    maxArea := 0

    for i, v := range newheights {
        for len(stack) > 0 && v < newheights[stack[len(stack)-1]] {
            popindex := stack[len(stack)-1]
            height := newheights[popindex]
            stack = stack[:len(stack)-1]

            leftindex := stack[len(stack)-1]
            maxArea = max(maxArea, height*(i-leftindex-1))
        }
        stack = append(stack, i)
    }
    return maxArea
}
```

