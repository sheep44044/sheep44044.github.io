---
title: LeetCode-55. 跳跃游戏
published: 2026-04-16
description: ''
image: ''
tags: ["贪心算法"]
category: '算法'
draft: false 
lang: ''
---

### 贪心算法

[**55. 跳跃游戏**](https://leetcode.cn/problems/jump-game/)

> 给你一个非负整数数组 `nums` ，你最初位于数组的 **第一个下标** 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
>
> 判断你是否能够到达最后一个下标，如果可以，返回 `true` ；否则，返回 `false` 。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [2,3,1,1,4]
> 输出：true
> 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [3,2,1,0,4]
> 输出：false
> 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
> ```
>
> ---



**思路**

我认为这题很有贪心算法的感觉。

这题的思路就是：相较于去盯着那些会卡住我们的 `0`，不如判断最远能走到哪里

1. 维护一个变量 `maxReach`，表示目前能跳到的最远距离。
2. 我们按顺序遍历每个格子 `i`。
3. **生死判定**：如果当前所在的格子 `i` 已经超出了 `maxReach`，说明我们连当前这个格子都走不到，更别提终点了，直接返回 `false`。
4. **贪心更新**：如果能走到格子 `i`，就计算覆盖的新边界是 `i + nums[i]`。把 `maxReach` 更新为历史最大值

```go
func canJump(nums []int) bool {
    maxReach := 0

    for i, num := range nums {
        if i > maxReach {
            return false
        }
        maxReach = max(maxReach, i + num)
    }
    return true
}
```

