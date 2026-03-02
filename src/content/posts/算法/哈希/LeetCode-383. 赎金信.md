---
title: LeetCode-383. 赎金信
published: 2026-02-20
description: ''
image: ''
tags: ["哈希"]
category: '算法'
draft: false 
lang: ''
---

### 哈希表

[**383. 赎金信**](https://leetcode.cn/problems/ransom-note/)

> 给你两个字符串：`ransomNote` 和 `magazine` ，判断 `ransomNote` 能不能由 `magazine` 里面的字符构成。
>
> 如果可以，返回 `true` ；否则返回 `false` 。
>
> `magazine` 中的每个字符只能在 `ransomNote` 中使用一次。
>
> ----

> **示例 1：**
>
> ```
> 输入：ransomNote = "a", magazine = "b"
> 输出：false
> ```
>
> **示例 2：**
>
> ```
> 输入：ransomNote = "aa", magazine = "ab"
> 输出：false
> ```
>
> **示例 3：**
>
> ```
> 输入：ransomNote = "aa", magazine = "aab"
> 输出：true
> ```
>
> ----



**1.自己的解法**

> 我做到了，自己完成，秒杀，哈哈哈！！！
>
> (没想到我三个循环比代码随想录的两个循环一个判断要快5ms，amazing)

```go
func canConstruct(ransomNote string, magazine string) bool {
    m := make(map[rune]int)
    for _, i := range magazine {
        m[i-'a']++
    }

    for _, i := range ransomNote {
        m[i-'a']-- 
    }

    for _, i := range m{
        if i < 0 {
            return false
        }
    }

    return true
}
```

