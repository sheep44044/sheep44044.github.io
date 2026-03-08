---
title: LeetCode-42.接雨水
published: 2026-03-03
description: ''
image: ''
tags: ["双指针"]
category: '算法'
draft: false 
lang: ''
---

### 双指针

[**42. 接雨水**](https://leetcode.cn/problems/trapping-rain-water/)

> 给定 `n` 个非负整数表示每个宽度为 `1` 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)
>
> ```
> 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
> 输出：6
> 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
> ```
>
> **示例 2：**
>
> ```
> 输入：height = [4,2,0,3,2,5]
> 输出：9
> ```
>
> ----

**1.Gemini的方法**

> 第一道困难题，果然还是做不出来...不过知道了思路后，难度会减少很多

思路: 每个柱子能积多少水取决于左右两侧第二高的柱子，柱子自身被包括在其中一个边界中，这是正确的，但从理解上有时感觉很奇怪

```go
func trap(height []int) int {
    left, right := 0, len(height) - 1
    leftmax, rightmax := 0, 0
    res := 0

    for left < right {
        leftmax = max(leftmax, height[left])
        rightmax = max(rightmax, height[right])

        if leftmax < rightmax {
            res += leftmax - height[left]
            left++
        }else{
            res += rightmax - height[right]
            right--
        }
    }

    return res
}
```



**2.评论区翻到的思路**

> 对于初学者，其实这个思路挺简单的，很容易理解，我就按照评论区中顺着思路用Go写下来了。
>
> 不过理解后其实还是第一种更好的

思路:将实例图中的蓝色也看成实心的，算出每一层的面积，加起来，然后减去height的总和，剩下的就是水量。

```
func trap(height []int) int {
    left, right := 0, len(height) - 1
    area := 0
    sum := 0
    maxH := 0

    for _, h := range height {
        sum += h
        if h > maxH {
            maxH = h
        }
    }

    for h := 1; h <= maxH; h++ {
        for left < len(height) && height[left] < h {
            left++
        }
        
        for right >= 0 && height[right] < h {
            right--
        }

        if left > right {
            break
        }
        area += right - left + 1
    }

    return area - sum
}
```
