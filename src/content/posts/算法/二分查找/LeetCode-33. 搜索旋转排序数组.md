---
title: LeetCode-33. 搜索旋转排序数组
published: 2026-04-11
description: ''
image: ''
tags: ["二分查找"]
category: '算法'
draft: false 
lang: ''
---

### 二分查找

[**33. 搜索旋转排序数组**](https://leetcode.cn/problems/search-in-rotated-sorted-array/)

> 整数数组 `nums` 按升序排列，数组中的值 **互不相同** 。
>
> 在传递给函数之前，`nums` 在预先未知的某个下标 `k`（`0 <= k < nums.length`）上进行了 **向左旋转**，使数组变为 `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`（下标 **从 0 开始** 计数）。例如， `[0,1,2,4,5,6,7]` 下标 `3` 上向左旋转后可能变为 `[4,5,6,7,0,1,2]` 。
>
> 给你 **旋转后** 的数组 `nums` 和一个整数 `target` ，如果 `nums` 中存在这个目标值 `target` ，则返回它的下标，否则返回 `-1` 。
>
> 你必须设计一个时间复杂度为 `O(log n)` 的算法解决此问题。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [4,5,6,7,0,1,2], target = 0
> 输出：4
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [4,5,6,7,0,1,2], target = 3
> 输出：-1
> ```
>
> **示例 3：**
>
> ```
> 输入：nums = [1], target = 0
> 输出：-1
> ```
>
> ---



**思路**

这题的难点我认为是在强调时间复杂度为`O(log n)`，必须用二分查找的情况下，普通数组全局有序不同的是，这里是部分有序

所以我们要在原来的基础上多一个步骤，1. 先判断哪边是有序的，2. 其次才与`target`比较进行`left`或`right`的移动

```go
func search(nums []int, target int) int {
    left, right := 0, len(nums)-1

    for left <= right {
        mid := left + (right - left)/2

        if nums[mid] == target {
            return mid
        }

        if nums[left] < nums[mid] {
            if nums[left] <= target && target < nums[mid] {
                right = mid - 1
            }else {
                left = mid + 1
            }
        }else {
            if target > nums[mid] && target <= nums[right] {
                left = mid + 1  
            } else {
                right = mid - 1
            }
        }
    }
    return -1
}
```



**时间复杂度为O(nlog n)的解法**

虽然这个思路简单，但时间复杂度不论是`for`还是 `sort.Ints(nums)`都超了好多

1. `for` 循环遍历数组，时间复杂度是 O(n)

2. 使用 `sort.Ints(nums)`排序，时间复杂度是 O(n log n)

3. 二分查找： 时间复杂度是 O(log n)

```go
func search(nums []int, target int) int {
    index := 0
    for i := 1; i < len(nums); i++ {
        if nums[i] < nums[i-1] {
            index = i
            break
        }
    }

    sort.Ints(nums)
    left, right := 0, len(nums)-1
    for left <= right {
        mid := left + (right - left)/2

        if nums[mid] == target {
            return (mid + index)%len(nums)
        }else if nums[mid] < target {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return -1
}
```

