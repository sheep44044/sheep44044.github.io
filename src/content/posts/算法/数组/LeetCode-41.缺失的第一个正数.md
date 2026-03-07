---
title: LeetCode-41.缺失的第一个正数
published: 2026-03-06
description: ''
image: ''
tags: ["数组","哈希"]
category: '算法'
draft: false 
lang: ''
---

### 数组

[**41. 缺失的第一个正数**](https://leetcode.cn/problems/first-missing-positive/)

> 给你一个未排序的整数数组 `nums` ，请你找出其中没有出现的最小的正整数。
>
> 请你实现时间复杂度为 `O(n)` 并且只使用常数级别额外空间的解决方案。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [1,2,0]
> 输出：3
> 解释：范围 [1,2] 中的数字都在数组中。
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [3,4,-1,1]
> 输出：2
> 解释：1 在数组中，但 2 没有。
> ```
>
> **示例 3：**
>
> ```
> 输入：nums = [7,8,9,11,12]
> 输出：1
> 解释：最小的正数 1 没有出现。
> ```
>
> ----



**正确的解法**

> 🤔，感觉很神奇

```go
func firstMissingPositive(nums []int) int {
    n := len(nums)
    for i := range n {
        for nums[i] > 0 && nums[i] < n && nums[nums[i]-1] != nums[i] {
            nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]
        }
    }
  
    for i := range n {
        if nums[i] != i+1 {
            return i+1
        }
    }
    return n+1
}
```



**自己的解法(哈希)**

> 写了我一节课提交了6次终于过了，感觉不是很难，但就是写不出来...
>
> 虽然耗时也挺高10ms，但终究还是写出来，毕竟也算是困难题
>
> 好吧，其实不完全满足，时间复杂度为 O(nlogn)，空间复杂度为 O(n)，算做出来一道中等题吧

```go
func firstMissingPositive(nums []int) int {
    sort.Ints(nums)
    count := 0
    skip := 0
    m := []int{}
     
    for _, j := range nums {
        if j > 0 {
            m = append(m, j)
            count++
        }
    } 

    for i := 0; i < count; i++ {
        if i > 0 && m[i] == m[i-1] {
            skip++
            if i == count-1 {
                return m[i]+1
            }
            continue
        }

        if m[i] != i - skip + 1 {
            return i - skip + 1
        } 

        if i == count-1 {
            return m[i]+1
        }
    }
    
    return 1
}
```



