---
title: LeetCode-11. 盛最多水的容器
published: 2026-03-03
description: ''
image: ''
tags: ["双指针"]
category: '算法'
draft: false 
lang: ''
---

### 双指针

[**11. 盛最多水的容器**](https://leetcode.cn/problems/container-with-most-water/)

> 给定一个长度为 `n` 的整数数组 `height` 。有 `n` 条垂线，第 `i` 条线的两个端点是 `(i, 0)` 和 `(i, height[i])` 。
>
> 找出其中的两条线，使得它们与 `x` 轴共同构成的容器可以容纳最多的水。
>
> 返回容器可以储存的最大水量。
>
> **说明：**你不能倾斜容器。
>
> ----

> ```
> 输入：[1,8,6,2,5,4,8,3,7]
> 输出：49 
> 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
> ```
>
> **示例 2：**
>
> ```
> 输入：height = [1,1]
> 输出：1
> ```
>
> ----

**1.自己的方法(双指针)**

> 比较简单的中等题

思路:在减小宽度时时，永远只移动较短的那块木板

```go
func maxArea(height []int) int {
    left := 0
    right := len(height) - 1
    h := 0
    max := 0
    for left < right {
        if height[left] <  height[right] {
            h = height[left]
        }else {
            h = height[right]
        }

        if max < h * (right - left) {
            max = h * (right - left)
        }
        
        if height[left] < height[right] {
            left++
        }else{
            right--
        }
    }
    return max
}
```

