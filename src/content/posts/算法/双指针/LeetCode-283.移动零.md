---
title: LeetCode-283.移动零
published: 2026-03-02
description: ''
image: ''
tags: ["双指针"]
category: '算法'
draft: false 
lang: ''
---

### 双指针

[**283. 移动零**](https://leetcode.cn/problems/move-zeroes/)

> 给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。
>
> **请注意** ，必须在不复制数组的情况下原地对数组进行操作。
>
> ----

> **示例 1:**
>
> ```
> 输入: nums = [0,1,0,3,12]
> 输出: [1,3,12,0,0]
> ```
>
> **示例 2:**
>
> ```
> 输入: nums = [0]
> 输出: [0]
> ```
>
> ----

**1.自己的方法**

> 可以看出不难，简单的快慢针的应用，最后被如何填充0卡住了一会儿，老想着用append，最后陷入append后，len(nums)又更长的愚蠢状况下

```go
func moveZeroes(nums []int)  {
    fast, slow := 0, 0
    for ; fast < len(nums); fast++ {
        if nums[fast] != 0 {
            nums[slow] = nums[fast]
            slow++
        }
    }   
    
    for i := slow; i < len(nums); i++ {
            nums[i] = 0
    }
}
```



