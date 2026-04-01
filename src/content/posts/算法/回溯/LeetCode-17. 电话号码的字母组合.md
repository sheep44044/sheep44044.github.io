---
title: LeetCode-17. 电话号码的字母组合
published: 2026-04-01
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---

### 回溯

[**17. 电话号码的字母组合**](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

> 给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。答案可以按 **任意顺序** 返回。
>
> 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
>
> <img src="https://pic.leetcode.cn/1752723054-mfIHZs-image.png" alt="img" style="zoom: 25%;" />
>
> ----

> **示例 1：**
>
> ```
> 输入：digits = "23"
> 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
> ```
>
> **示例 2：**
>
> ```
> 输入：digits = "2"
> 输出：["a","b","c"]
> ```
>
> ---



```go
func letterCombinations(digits string) []string {
    if len(digits) == 0 {
        return nil
    }

    m := []string{"","","abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}

    res := []string{}
    path:= []byte{}

    var backtrack func(index int)
    backtrack = func(index int) {
        if index == len(digits) {
            res = append(res, string(path))
            return
        }

        digit := digits[index] - '0'
        letters := m[digit]
        for i := 0; i < len(letters); i++ {
            path = append(path, letters[i])
            backtrack(index+1)
            path = path[:len(path)-1]
        }
    }
    
    backtrack(0)
    return res
}
```

