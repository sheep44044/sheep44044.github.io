---
title: LeetCode-15.三数之和
published: 2026-02-21
description: ''
image: ''
tags: ["哈希"]
category: '算法'
draft: false 
lang: ''
---

### 哈希表

[**15. 三数之和**](https://leetcode.cn/problems/3sum/)

> 给你一个整数数组 `nums` ，判断是否存在三元组 `[nums[i], nums[j], nums[k]]` 满足 `i != j`、`i != k` 且 `j != k` ，同时还满足 `nums[i] + nums[j] + nums[k] == 0` 。请你返回所有和为 `0` 且不重复的三元组。
>
> **注意：**答案中不可以包含重复的三元组。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [-1,0,1,2,-1,-4]
> 输出：[[-1,-1,2],[-1,0,1]]
> 解释：
> nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
> nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
> nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
> 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
> 注意，输出的顺序和三元组的顺序并不重要。
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [0,1,1]
> 输出：[]
> 解释：唯一可能的三元组和不为 0 。
> ```
>
> **示例 3：**
>
> ```
> 输入：nums = [0,0,0]
> 输出：[[0,0,0]]
> 解释：唯一可能的三元组和为 0 。
> ```
>
> ----



**1.代码随想录的哈希**

> 没做出来捏☹️，这个题目用哈希真的是很麻烦和恶心，对于新手来说去重真的不简单，不只是先固定a再加上二数之和这么简单。速度也很慢479ms... 之后学到双指针再看看

```go
func threeSum(nums []int) [][]int {
    res := make([][]int, 0)
    sort.Ints(nums)
    for i := 0; i < len(nums); i++ {
        if nums[i] > 0 {
            break
        }
        if i > 0 && nums[i] == nums[i-1] {
            continue
        }
        set := make(map[int]struct{})
        for j := i + 1; j < len(nums); j++ {
            if j > i + 2 && nums[j] == nums[j-1] && nums[j-1] == nums[j-2] {
                continue
            }
            c := -nums[i] - nums[j]
            if _, ok := set[c]; ok {
                res = append(res, []int{nums[i], nums[j], c})
                delete(set, c)
            } else {
                set[nums[j]] = struct{}{}
            }
        }
    }
    return res
}
```

