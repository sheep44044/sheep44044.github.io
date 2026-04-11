---
title: LeetCode-35. 搜索插入位置
published: 2026-04-11
description: ''
image: ''
tags: ["二分查找"]
category: '算法'
draft: false 
lang: ''
---

### 二分查找

[**35. 搜索插入位置**](https://leetcode.cn/problems/search-insert-position/)

> 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
>
> 请必须使用时间复杂度为 `O(log n)` 的算法。
>
> ----

> **示例 1:**
>
> ```
> 输入: nums = [1,3,5,6], target = 5
> 输出: 2
> ```
>
> **示例 2:**
>
> ```
> 输入: nums = [1,3,5,6], target = 2
> 输出: 1
> ```
>
> **示例 3:**
>
> ```
> 输入: nums = [1,3,5,6], target = 7
> 输出: 4
> ```
>
> ---



**思路**

这题我感觉唯一需要思考的就是不存在时的插入位置

1. 数组中插入位置有三种可能：最左侧和数列中间和最右侧，最左侧和最右侧很容易推倒出来可以`return left`解决，就需要考虑数列中间的情况
2. 由于`left <= right`和`mid+1`，所以最后`left`和`right`和`mid`必然重合，且`mid`一定在他的左侧或右侧，距离为1
3. 所以最后无论是`target < mid`导致`right - 1`，还是`target > mid`导致`left + 1`，left必然是target的插入位置，所以最后`return left`即可

```go
func searchInsert(nums []int, target int) int {
    left, right := 0, len(nums)-1
    mid := 0
    for left <= right {
        mid = left + (right - left)/2

        if nums[mid] == target {
            return mid
        }else if nums[mid] < target {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return left
}
```

