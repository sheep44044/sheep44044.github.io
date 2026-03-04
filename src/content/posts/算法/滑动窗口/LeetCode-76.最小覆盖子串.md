---
title: LeetCode-76.最小覆盖子串
published: 2026-03-04
description: ''
image: ''
tags: ["滑动窗口"]
category: '算法'
draft: false 
lang: ''
---

### 滑动窗口

[**76. 最小覆盖子串**](https://leetcode.cn/problems/minimum-window-substring/)

> 给定两个字符串 `s` 和 `t`，长度分别是 `m` 和 `n`，返回 s 中的 **最短窗口 子串**，使得该子串包含 `t` 中的每一个字符（**包括重复字符**）。如果没有这样的子串，返回空字符串 `""`。
>
> 测试用例保证答案唯一。
>
> ----

> **示例 1：**
>
> ```
> 输入：s = "ADOBECODEBANC", t = "ABC"
> 输出："BANC"
> 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
> ```
>
> **示例 2：**
>
> ```
> 输入：s = "a", t = "a"
> 输出："a"
> 解释：整个字符串 s 是最小覆盖子串。
> ```
>
> **示例 3:**
>
> ```
> 输入: s = "a", t = "aa"
> 输出: ""
> 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
> 因此没有符合条件的子字符串，返回空字符串。
> ```
>
> ----



**1.一个正确的答案**

> 刚开始做被爆了捏，做不出来
>
> 不过事后看其实也还好，没想象的可怕

思路：1.判断出s包含了t 2.使用滑动窗口，让它左右互搏，推断出最小值

这里的难点是是如何高效地判断s包含了t？

答：多引入几个变量，need、valid、needcount和window，表示不同的状态量，都匹配了就是包含。

关于这里的滑动窗口，我认为可以参考[**904. 水果成篮**](https://leetcode.cn/problems/fruit-into-baskets/)是差不多的

```go
func minWindow(s string, t string) string {
    left, right := 0, 0
    var need, window [128]int
    needcount, valid := 0, 0
    minlen := 100001
    start := 0

    for _, i := range t {
        need[i]++
        if need[i] == 1 {
            needcount++
        }
    }

    for right < len(s) {
        c := s[right]
        if need[c] > 0 {
            window[c]++
            if window[c] == need[c] {
                valid++
            }
        }

        for valid == needcount {
            if right - left + 1 < minlen {
                start = left
                minlen = right - left + 1
            }
            
            d := s[left]
            if need[d] > 0 {
                window[d]--
                if window[d] < need[d]{
                    valid--
                }
            }
            left++
        }

        right++
    }

    if minlen == 100001 {
        return ""
    }

    return s[start : start+minlen]
}
```

