---
title: LeetCode-416. 分割等和子集
published: 2026-04-26
description: ''
image: ''
tags: ["动态规划"]
category: '算法'
draft: false 
lang: ''
---

### 动态规划

[**416. 分割等和子集**](https://leetcode.cn/problems/partition-equal-subset-sum/)

> 给你一个 **只包含正整数** 的 **非空** 数组 `nums` 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [1,5,11,5]
> 输出：true
> 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [1,2,3,5]
> 输出：false
> 解释：数组不能分割成两个元素和相等的子集。
> ```
>
> ---



**思路**

这题思路就是01背包。 第i个物品的容量和价值都是nums[i]，而背包总容量是sum/2（前面先判断sum是奇数还是偶数，奇数直接返回false了），因为容量和价值是相等的，所以动规后背包装下的最大价值如果恰是sum/2，就说明背包必须恰好装满了，此时就说明数组可以被分为两个相等子集。

```go
func canPartition(nums []int) bool {
    sum := 0
    for _, num := range nums {
        sum += num
    }

    if sum % 2 != 0 {
        return false
    }

    target := sum / 2

    dp := make([]int, target+1)

    for i := 0; i < len(nums); i++ {
        for j := target; j >= nums[i]; j-- {
            dp[j] = max(dp[j], dp[j-nums[i]]+nums[i])
            
            if dp[target] == target {
                return true
            }
        }
    }

    return dp[target] == target
}
```

