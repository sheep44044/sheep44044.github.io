---
title: LeetCode-131. 分割回文串
published: 2026-04-09
description: ''
image: ''
tags: ["回溯"]
category: '算法'
draft: false 
lang: ''
---



### 回溯

[**131. 分割回文串**](https://leetcode.cn/problems/palindrome-partitioning/)

> 给你一个字符串 `s`，请你将 `s` 分割成一些 子串，使每个子串都是 **回文串** 。返回 `s` 所有可能的分割方案。
>
> ----

> **示例 1：**
>
> ```
> 输入：s = "aab"
> 输出：[["a","a","b"],["aa","b"]]
> ```
>
> **示例 2：**
>
> ```
> 输入：s = "a"
> 输出：[["a"]]
> ```
>
> ---



**思路**

看完代码后，思路感觉挺简单的...看到题干应该知道需要完成一个判断回文串的函数用于剪枝，然后就感觉是正常判断和`continue`

```go
func partition(s string) [][]string {
    res := [][]string{}
    path := []string{}

    var backtrack func(start int)
    backtrack = func(start int) {
        if start == len(s) {
            temp := make([]string, len(path))
            copy(temp, path)
            res = append(res,temp)
        }

        for i := start; i < len(s); i++ {
            if isPalindrome(s,start,i) {
                path = append(path, s[start:i+1])
                backtrack(i+1)
                path = path[:len(path)-1]
            }else {
                continue
            }
        }
    }

    backtrack(0)
    return res
}

func isPalindrome(s string, left, right int) bool {
    for left < right {
        if s[left] != s[right] {
            return false
        }
        left++
        right--
    }
    return true
}

```

