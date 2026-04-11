---
title: LeetCode-153. 寻找旋转排序数组中的最小值
published: 2026-04-11
description: ''
image: ''
tags: ["二分查找"]
category: '算法'
draft: false 
lang: ''
---

### 二分查找

[**153. 寻找旋转排序数组中的最小值**](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)

> 已知一个长度为 `n` 的数组，预先按照升序排列，经由 `1` 到 `n` 次 **旋转** 后，得到输入数组。例如，原数组 `nums = [0,1,2,4,5,6,7]` 在变化后可能得到：
>
> - 若旋转 `4` 次，则可以得到 `[4,5,6,7,0,1,2]`
> - 若旋转 `7` 次，则可以得到 `[0,1,2,4,5,6,7]`
>
> 注意，数组 `[a[0], a[1], a[2], ..., a[n-1]]` **旋转一次** 的结果为数组 `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]` 。
>
> 给你一个元素值 **互不相同** 的数组 `nums` ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 **最小元素** 。
>
> 你必须设计一个时间复杂度为 `O(log n)` 的算法解决此问题。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [3,4,5,1,2]
> 输出：1
> 解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [4,5,6,7,0,1,2]
> 输出：0
> 解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。
> ```
>
> **示例 3：**
>
> ```
> 输入：nums = [11,13,15,17]
> 输出：11
> 解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。
> ```
>
> ---



**思路**

这是个经典解法，关于它主要有两个令人疑惑的点：

1. 他的输出最小值依靠left，所以他的循环条件是`left < right`最终会停留在`left = mid = right`的时候，而不是` <=`
2. 因为`mid`这个值也有可能是答案，如果是`right = mid-1`就会把这个值排除了，与平常求`target`是已经与`target`比较后被排除后才`right = mid-1`，不是一个情况

```go
func findMin(nums []int) int {
    left, right := 0, len(nums)-1
    
    for left < right {
        mid := left + (right - left)/2
        
        if nums[mid] < nums[right] {
            right = mid 
        } else {
            left = mid + 1
        }
    }
    return nums[left] 
}
```



**手撕的思路**

看到题目只对时间复杂度做了要求，就引入num储存最小值

```go
func findMin(nums []int) int {
    left, right := 0, len(nums)-1
    num := 5001

    for left <= right {
        mid := left + (right - left)/2

        if nums[left] <= nums[mid] {
            num = min(num, nums[left])
            left = mid + 1
        }else {
            num = min(num, nums[mid])
            right = mid - 1
        }
    }
    return num
}
```

