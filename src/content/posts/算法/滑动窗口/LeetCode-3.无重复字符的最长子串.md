---
title: LeetCode-3.无重复字符的最长子串
published: 2026-03-04
description: ''
image: ''
tags: ["滑动窗口"]
category: '算法'
draft: false 
lang: ''
---

### 滑动窗口

[**3. 无重复字符的最长子串**](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

> 给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长 子串** 的长度。
>
> ----

> **示例 1:**
>
> ```
> 输入: s = "abcabcbb"
> 输出: 3 
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。
> ```
>
> **示例 2:**
>
> ```
> 输入: s = "bbbbb"
> 输出: 1
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
> ```
>
> **示例 3:**
>
> ```
> 输入: s = "pwwkew"
> 输出: 3
> 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
>      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
> ```
>
> ----



**1.滑动的窗口**

> 第一次做滑动窗口的题目，所以是看完答案后，自己再一遍，不知道是不是双指针的拓展的原因，我感觉其实不太难

```go
func lengthOfLongestSubstring(s string) int {
    left, right := 0, 0
    maxlen := 0
    window := make(map[byte]int)

    for right < len(s) {
        window[s[right]]++

        for window[s[right]] > 1 {
            window[s[left]]--
            left++
        }

        if maxlen < right - left + 1 {
            maxlen = right - left + 1
        }

        right++
    }

    return maxlen
}
```

