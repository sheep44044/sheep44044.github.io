---
title: LeetCode-242.有效的字母异位词
published: 2026-02-20
description: ''
image: ''
tags: ["哈希"]
category: '算法'
draft: false 
lang: ''
---

### 哈希表

[**242.有效的字母异位词**](https://leetcode.cn/problems/valid-anagram/)

> 给定两个字符串 `s` 和 `t` ，编写一个函数来判断 `t` 是否是 `s` 的 字母异位词。
>
> 字母异位词是通过重新排列不同单词或短语的字母而形成的单词或短语，并使用所有原字母一次。
>
> ----

> **示例 1:**
>
> ```
> 输入: s = "anagram", t = "nagaram"
> 输出: true
> ```
>
> **示例 2:**
>
> ```
> 输入: s = "rat", t = "car"
> 输出: false
> ```
>
> ----



```go
func isAnagram(s string, t string) bool {
    record := [26]int{}
    for _, i := range s {
        record[i - rune('a')]++
    }

    for _, i := range t {
        record[i - rune('a')]--
    }

    return record == [26]int{}
}
```

