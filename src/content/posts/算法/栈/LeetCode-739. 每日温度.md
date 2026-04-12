---
title: LeetCode-739. 每日温度
published: 2026-04-12
description: ''
image: ''
tags: ["栈"]
category: '算法'
draft: false 
lang: ''
---

### 栈

[**739. 每日温度**](https://leetcode.cn/problems/daily-temperatures/)

> 给定一个整数数组 `temperatures` ，表示每天的温度，返回一个数组 `answer` ，其中 `answer[i]` 是指对于第 `i` 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 `0` 来代替。
>
> ----

> **示例 1:**
>
> ```
> 输入: temperatures = [73,74,75,71,69,72,76,73]
> 输出: [1,1,4,2,1,1,0,0]
> ```
>
> **示例 2:**
>
> ```
> 输入: temperatures = [30,40,50,60]
> 输出: [1,1,1,0]
> ```
>
> **示例 3:**
>
> ```
> 输入: temperatures = [30,60,90]
> 输出: [1,1,0]
> ```
>
> ---



**思路**

尝试写一下逻辑为什么用单调栈

1. 这题暴力法两个`for`要重复扫描，所以需要数据结构存储数据

2. 求**最近**的较大值，所以需要栈
3. 大的会挡住小的，小的没用了 ，所以 栈必须是单调的。

所以，这题可以得出需要单调栈

```go
func dailyTemperatures(temperatures []int) []int {
    n := len(temperatures)
    res := make([]int, n)
    stack := make([]int, 0)

    for i, v := range temperatures {
        for len(stack) > 0 && v > temperatures[stack[len(stack)-1]] {
            index := stack[len(stack)-1]
            stack = stack[:len(stack)-1]
            res[index] = i - index
        }
        stack = append(stack, i)
    }
    return res
}
```

