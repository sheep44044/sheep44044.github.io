---
title: LeetCode-128.最长连续序列
published: 2026-02-21
description: ''
image: ''
tags: ["哈希"]
category: '算法'
draft: false 
lang: ''
---

### 哈希表

[**128. 最长连续序列**](https://leetcode.cn/problems/longest-consecutive-sequence/)

> 给定一个未排序的整数数组 `nums` ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
>
> 请你设计并实现时间复杂度为 `O(n)` 的算法解决此问题。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [100,4,200,1,3,2]
> 输出：4
> 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [0,3,7,2,5,8,4,6,0,1]
> 输出：9
> ```
>
> **示例 3：**
>
> ```
> 输入：nums = [1,0,1,2]
> 输出：3
> ```
>
> ----



**1.自己的解法**

> 其实我没太看出来，和哈希有什么关系，可能是我用了Go的sort.Ints(nums)，我的速度还挺快的，8ms，击败96.45%，😁
>
> 好吧，它要求了时间复杂度是 O(n)，排序的时间复杂度是O(n log n)，其实算偏题了，但速度比哈希快也是挺奇怪的...

```go
func longestConsecutive(nums []int) int {
    if len(nums) == 0 {
        return 0
    }
    sort.Ints(nums)
    count := 1
    max := 1
  
    for i, num := range nums {
        if i > 0 && num == nums[i-1] {
            continue
        }
        if i > 0 && num == nums[i-1]+1{
            count += 1
            if count > max{
                max = count
            }
        }else{
            count = 1
        }
    }
    return max
}
```



**2.哈希表**

```go
func longestConsecutive(nums []int) int {
    set := make(map[int]bool)
    for _, num := range nums {
        set[num] = true
    }
    maxLen := 0
    for num := range set {
        if !set[num-1] {
            curNum := num
            curLen := 1
            for set[curNum+1] {
                curNum++
                curLen++
            }
            if curLen > maxLen {
                maxLen = curLen
            }
        }
    }
    return maxLen
}
```

