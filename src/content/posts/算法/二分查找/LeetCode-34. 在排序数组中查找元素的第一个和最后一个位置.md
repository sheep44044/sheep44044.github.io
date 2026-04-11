---
title: LeetCode-34. 在排序数组中查找元素的第一个和最后一个位置
published: 2026-04-11
description: ''
image: ''
tags: ["二分查找"]
category: '算法'
draft: false 
lang: ''
---

### 二分查找

[**34. 在排序数组中查找元素的第一个和最后一个位置**](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

> 给你一个按照非递减顺序排列的整数数组 `nums`，和一个目标值 `target`。请你找出给定目标值在数组中的开始位置和结束位置。
>
> 如果数组中不存在目标值 `target`，返回 `[-1, -1]`。
>
> 你必须设计并实现时间复杂度为 `O(log n)` 的算法解决此问题。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [5,7,7,8,8,10], target = 8
> 输出：[3,4]
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [5,7,7,8,8,10], target = 6
> 输出：[-1,-1]
> ```
>
> **示例 3：**
>
> ```
> 输入：nums = [], target = 0
> 输出：[-1,-1]
> ```
>
> ---



**思路**

这题与前面只找一个数不同，这里需要寻找到第一个和最后一个数

其实由于`for left <= right`的循环结构，具备不断查找的功能，之前只寻找一个数的问题局限了我们的思维，只需要在找到`target`后，继续执行找到左和右边界即可

所以，我们只需要执行两次二分查找即可

```go
func searchRange(nums []int, target int) []int {
    first := findBound(nums, target, true)
    if first == -1 {
        return []int{-1, -1}
    }

    last := findBound(nums, target, false)

    return []int{first, last}
}

func findBound (nums []int, target int , isFirst bool) int {
    left, right := 0, len(nums)-1  
    bound := -1

    for left <= right {
        mid := left + (right - left)/2

        if nums[mid] == target {
            bound = mid
            if isFirst {
                right = mid - 1
            }else {
                left = mid + 1
            }
        }else if nums[mid] < target {
            left = mid + 1
        }else {
            right = mid - 1 
        }
    }
    return bound
}
```



**时间复杂度为O(n)的思路**

很直接的在查到对应的值后，向左和右用循环找到初始和最后的位置，但时间复杂度为`O(n)`与题目要求的`O(log n)` 不符

```go
func searchRange(nums []int, target int) []int {
    if len(nums) == 0 {
        return []int{-1, -1}
    }

    left, right := 0, len(nums)-1
    var mid int

    for left <= right {
        mid = left + (right - left)/2

        if nums[mid] == target {
            ans := mid 
            for mid-1 >= 0 && nums[mid-1] == target {
                mid--
            }
            for ans+1 < len(nums) && nums[ans+1] == target {
                ans++
            }
            return []int{mid, ans}
        }else if nums[mid] < target {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return []int{-1, -1}
}
```

