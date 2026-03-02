---
title: LeetCode-344. 反转字符串
published: 2026-03-02
description: ''
image: ''
tags: ["双指针"]
category: '算法'
draft: false 
lang: ''
---

### 双指针

[**344. 反转字符串**](https://leetcode.cn/problems/reverse-string/)

> 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `s` 的形式给出。
>
> 不要给另外的数组分配额外的空间，你必须**[原地](https://baike.baidu.com/item/原地算法)修改输入数组**、使用 O(1) 的额外空间解决这一问题。
>
> ----

> **示例 1：**
>
> ```
> 输入：s = ["h","e","l","l","o"]
> 输出：["o","l","l","e","h"]
> ```
>
> **示例 2：**
>
> ```
> 输入：s = ["H","a","n","n","a","h"]
> 输出：["h","a","n","n","a","H"]
> ```
>
> ----

**1.自己的方法(双指针)**

> 对于这种送分题就该重拳出击👊

```go
func reverseString(s []byte)  {
    left := 0
    right := len(s)-1
    for left < right{
        s[left], s[right]= s[right], s[left]
        left++
        right--
    }
}
```

