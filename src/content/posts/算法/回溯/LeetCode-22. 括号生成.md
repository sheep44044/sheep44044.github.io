---
title: LeetCode-22. 括号生成
published: 2026-04-02
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---

### 回溯

[**22. 括号生成**](https://leetcode.cn/problems/generate-parentheses/)

> 数字 `n` 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效的** 括号组合。
>
> ----

> **示例 1：**
>
> ```
> 输入：n = 3
> 输出：["((()))","(()())","(())()","()(())","()()()"]
> ```
>
> **示例 2：**
>
> ```
> 输入：n = 1
> 输出：["()"]
> ```
>
> ---



```go
func generateParenthesis(n int) []string {
    res := []string{}
    path := []byte{}

    var backtrack func(left, right int)
    backtrack = func(left, right int) {
        if len(path) == n * 2 {
            res = append(res, string(path))
            return
        }

        if left < n {
            path = append(path, '(')
            backtrack(left+1,right)
            path = path[:len(path)-1]
        }

        if right < left {
            path = append(path, ')')
            backtrack(left,right+1)
            path = path[:len(path)-1]
        }
    }

    backtrack(0,0)
    return res
}
```

