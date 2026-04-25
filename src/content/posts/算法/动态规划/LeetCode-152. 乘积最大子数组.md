---
title: LeetCode-152. 乘积最大子数组
published: 2026-04-25
description: ''
image: ''
tags: ["动态规划"]
category: '算法'
draft: false 
lang: ''
---

### 动态规划

[**152. 乘积最大子数组**](https://leetcode.cn/problems/maximum-product-subarray/)

> 给你一个整数数组 `nums` ，请你找出数组中乘积最大的非空连续 子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
>
> 测试用例的答案是一个 **32-位** 整数。
>
> **请注意**，一个只包含一个元素的数组的乘积是这个元素的值。
>
> ----

> **示例 1:**
>
> ```
> 输入: nums = [2,3,-2,4]
> 输出: 6
> 解释: 子数组 [2,3] 有最大乘积 6。
> ```
>
> **示例 2:**
>
> ```
> 输入: nums = [-2,0,-1]
> 输出: 0
> 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
>    ```
> 
>---



**思路**

这题其实只需要解决掉负数这个问题即可。

如果同时处理`curMax`和`curMin`和`nums[i]`的正负性比较复杂，我们只需要利用`max`和`min`比较即可

```go
func maxProduct(nums []int) int {
    if len(nums) == 0 {
        return 0
    }

    curMax := nums[0]
    curMin := nums[0]
    res := nums[0]

    for i := 1; i < len(nums); i++ {
        tmpMax, tmpMin := curMax, curMin

        curMax = max(nums[i], max(tmpMax*nums[i], tmpMin*nums[i]))
        curMin = min(nums[i], min(tmpMax*nums[i], tmpMin*nums[i]))
        
        res = max(res, curMax)
    }
    return res
}
```

