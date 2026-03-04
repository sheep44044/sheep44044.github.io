---
title: LeetCode-438.找到字符串中所有字母异位词
published: 2026-03-04
description: ''
image: ''
tags: ["滑动窗口"]
category: '算法'
draft: false 
lang: ''
---

### 滑动窗口

[**438. 找到字符串中所有字母异位词**](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)

> 给定两个字符串 `s` 和 `p`，找到 `s` 中所有 `p` 的 **异位词** 的子串，返回这些子串的起始索引。不考虑答案输出的顺序
>
> ----

> **示例 1:**
>
> ```
> 输入: s = "cbaebabacd", p = "abc"
> 输出: [0,6]
> 解释:
> 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
> 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
> ```
>
>  **示例 2:**
>
> ```
> 输入: s = "abab", p = "ab"
> 输出: [0,1,2]
> 解释:
> 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
> 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
> 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
> ```
>
> ----



**1.自己的解法(滑动的窗口)**

> 手撕，嘿嘿...

思路:滑动窗口+哈希

```go
func findAnagrams(s string, p string) []int {
    left, right := 0, 0
    m, window := [26]int{}, [26]int{}
    res := []int{}
    
    for _, i := range p {
        m[i-'a']++
    }

    for right < len(s) {
        window[s[right]-'a']++

        if right - left + 1 == len(p) {
            if window == m {
                res = append(res, left)
            }

            window[s[left]-'a']--
            left++
        }

        right++
    }
    return res
}
```

