---
title: LeetCode-322. 零钱兑换
published: 2026-04-18
description: ''
image: ''
tags: ["动态规划"]
category: '算法'
draft: false 
lang: ''
---

### 动态规划

[**279. 完全平方数**](https://leetcode.cn/problems/perfect-squares/)

> 给你一个整数数组 `coins` ，表示不同面额的硬币；以及一个整数 `amount` ，表示总金额。
>
> 计算并返回可以凑成总金额所需的 **最少的硬币个数** 。如果没有任何一种硬币组合能组成总金额，返回 `-1` 。
>
> 你可以认为每种硬币的数量是无限的。
>
> ----

> **示例 1：**
>
> ```
> 输入：coins = [1, 2, 5], amount = 11
> 输出：3 
> 解释：11 = 5 + 5 + 1
> ```
>
> **示例 2：**
>
> ```
> 输入：coins = [2], amount = 3
> 输出：-1
> ```
>
> **示例 3：**
>
> ```
> 输入：coins = [1], amount = 0
> 输出：0
> ```
>
> ---



**思路**

相较于上题 [**279. 完全平方数**](https://leetcode.cn/problems/perfect-squares/) ，这题对物品的选取作了限制，以及可能无法返回-1的要求。

我们只需要最后`dp[amount] == math.MaxInt32`进行校验即可，因为`dp[i]`如果没有正常值，会因为`math.MaxInt32 < math.MaxInt32+1`保持这个值。

其他逻辑一样

```go
func coinChange(coins []int, amount int) int {
    dp := make([]int, amount+1)

    dp[0] = 0
    for i := 1; i <= amount; i++ {
        dp[i] = math.MaxInt32
    }

    for i := 0; i <= amount; i++ {
        for j := 0; j < len(coins); j++ {
            if coins[j] <= i {
                dp[i] = min(dp[i], dp[i-coins[j]]+1)
            } 
        }
    }

    if dp[amount] == math.MaxInt32 {
        return -1
    }
    return dp[amount]
}
```



**思路**

令一种写法先物品，后容量

```go
func coinChange(coins []int, amount int) int {
    // 1. 定义并初始化 dp 数组
    dp := make([]int, amount+1)
    dp[0] = 0
    for i := 1; i <= amount; i++ {
        dp[i] = math.MaxInt32
    }

    // 2. 完全背包标准遍历：外层遍历物品(硬币)，内层正序遍历背包(金额)
    for i := 0; i < len(coins); i++ {
        for j := coins[i]; j <= amount; j++ {
            // 3. 拦截溢出：只有当去掉了当前硬币的剩余金额是“可达的”，才进行计算
            if dp[j-coins[i]] != math.MaxInt32 {
                // 4. 状态转移
                dp[j] = min(dp[j], dp[j-coins[i]]+1)
            }
        }
    }

    // 5. 循环结束后，统一结算：如果最终目标金额还是极大值，说明彻底凑不出，返回 -1
    if dp[amount] == math.MaxInt32 {
        return -1
    }
    
    return dp[amount]
}
```
