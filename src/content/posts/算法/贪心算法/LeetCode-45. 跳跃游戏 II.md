---
title: LeetCode-45. 跳跃游戏 II
published: 2026-04-16
description: ''
image: ''
tags: ["贪心算法"]
category: '算法'
draft: false 
lang: ''
---

### 贪心算法

[**45. 跳跃游戏 II**](https://leetcode.cn/problems/jump-game-ii/)

> 给定一个长度为 `n` 的 **0 索引**整数数组 `nums`。初始位置在下标 0。
>
> 每个元素 `nums[i]` 表示从索引 `i` 向后跳转的最大长度。换句话说，如果你在索引 `i` 处，你可以跳转到任意 `(i + j)` 处：
>
> - `0 <= j <= nums[i]` 且
> - `i + j < n`
>
> 返回到达 `n - 1` 的最小跳跃次数。测试用例保证可以到达 `n - 1`。
>
> ----

> **示例 1:**
>
> ```
> 输入: nums = [2,3,1,1,4]
> 输出: 2
> 解释: 跳到最后一个位置的最小跳跃数是 2。
>      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
> ```
>
> **示例 2:**
>
> ```
> 输入: nums = [2,3,0,1,4]
> 输出: 2
> ```
>
> ---



**思路**

这题我们很容易陷入逻辑定式“跳跃”中，到跳跃的地方是不是就需要`jump++`了?（其实不需要，这层跳跃结束后统计的次数+1即可）

本题我们只需要实现类似`queue`的层序遍历即可，因为已经有数组`nums`的存在，所以我们无需真创立一个`queue`队列，只需要判断他们的`index`即可。

相较于 [**55. 跳跃游戏**](https://leetcode.cn/problems/jump-game/) ，我们还需要变量`currentEnd`，确定当前这一步的覆盖边界在哪里，`curEnd := 0`和`if i == curEnd {}`完美开始第一层跳跃。后面就和上一题类似了。

```go
func jump(nums []int) int {
    if len(nums) == 1 {
        return 0
    }

    jumps := 0
    curEnd := 0
    maxReach := 0
    
    for i := 0; i < len(nums)-1; i++ {
        maxReach = max(maxReach, i + nums[i])

        if i == curEnd {
            jumps++
            curEnd = maxReach
        }
    }
    return jumps
}
```

