---
title: LeetCode-18.四数之和
published: 2026-03-03
description: ''
image: ''
tags: ["双指针"]
category: '算法'
draft: false 
lang: ''
---

### 双指针

[**18. 四数之和**](https://leetcode.cn/problems/4sum/)

> 给你一个由 `n` 个整数组成的数组 `nums` ，和一个目标值 `target` 。请你找出并返回满足下述全部条件且**不重复**的四元组 `[nums[a], nums[b], nums[c], nums[d]]` （若两个四元组元素一一对应，则认为两个四元组重复）：
>
> - `0 <= a, b, c, d < n`
> - `a`、`b`、`c` 和 `d` **互不相同**
> - `nums[a] + nums[b] + nums[c] + nums[d] == target`
>
> 你可以按 **任意顺序** 返回答案 。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [1,0,-1,0,-2,2], target = 0
> 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [2,2,2,2,2], target = 8
> 输出：[[2,2,2,2]]
> ```
>
> ----



**1.自己的解法(双指针)**

> 在三数之和的基础上加层循环即可，并处理下循环开始一些错误的剪枝，target可以为负，还是蛮需要三数之和的基础的

```go
func fourSum(nums []int, target int) [][]int {
    var res [][]int
    n := len(nums)
    if n < 4 {
        return res
    }

    sort.Ints(nums)

    for i := 0; i < n-3; i++ {
        if i > 0 && nums[i] == nums[i-1] {
            continue
        }

        for j := i + 1; j < n-2; j++ {
          
            if j > i+1 && nums[j] == nums[j-1] {
                continue
            }

            left, right := j+1, n-1
            for left < right {
                sum := nums[i] + nums[j] + nums[left] + nums[right]
                if sum == target {
                    res = append(res, []int{nums[i], nums[j], nums[left], nums[right]})
                    
                    for left < right && nums[left] == nums[left+1] {
                        left++
                    }
                   
                    for left < right && nums[right] == nums[right-1] {
                        right--
                    }
                  
                    left++
                    right--
                } else if sum < target {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return res
}
```

