---
title: LeetCode-75. 颜色分类
published: 2026-04-26
description: ''
image: ''
tags: ["技巧"]
category: '算法'
draft: false 
lang: ''
---

### 技巧

[**75. 颜色分类**](https://leetcode.cn/problems/sort-colors/)

> 给定一个包含红色、白色和蓝色、共 `n` 个元素的数组 `nums` ，**[原地](https://baike.baidu.com/item/原地算法)** 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
>
> 我们使用整数 `0`、 `1` 和 `2` 分别表示红色、白色和蓝色。
>
> 必须在不使用库内置的 sort 函数的情况下解决这个问题。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [2,0,2,1,1,0]
> 输出：[0,0,1,1,2,2]
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [2,0,1]
> 输出：[0,1,2]
> ```
>
> ---



**思路**

我们可以把数组划分为三个区域：0 的区域在最左边，2 的区域在最右边，1 的区域在中间。 我们维护三个指针：

- `p0`：指向当前 0 应该存放的位置（初始为 0）。
- `p2`：指向当前 2 应该存放的位置（初始为数组末尾）。
- `curr`：用于遍历数组的当前指针（初始为 0）。

其中为什么`p0`可以变动`cur`，`p2`不行，因为原来 `p0` 位置的那个 `1`，被换到了 `curr` 现在的位置。因为我们百分之百确信换过来的是 `1`，所以 `curr` 没必要再检查它一次，直接 `curr++` 走向下一个目标即可。

```go
func sortColors(nums []int)  {
    p0 := 0
    cur := 0
    p2 := len(nums) - 1

    for cur <= p2 {
        if nums[cur] == 0 {
            nums[p0], nums[cur] = nums[cur], nums[p0]
            p0++
            cur++
        }else if nums[cur] == 2 {
            nums[p2], nums[cur] = nums[cur], nums[p2]
            p2--
        }else {
            cur++
        }
    }
}
```

