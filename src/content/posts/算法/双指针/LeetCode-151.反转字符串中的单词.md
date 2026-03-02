---
title: LeetCode-151.反转字符串中的单词
published: 2026-03-02
description: ''
image: ''
tags: ["双指针"]
category: '算法'
draft: false 
lang: ''
---

### 双指针

[151. 反转字符串中的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)

> 给你一个字符串 `s` ，请你反转字符串中 **单词** 的顺序。
>
> **单词** 是由非空格字符组成的字符串。`s` 中使用至少一个空格将字符串中的 **单词** 分隔开。
>
> 返回 **单词** 顺序颠倒且 **单词** 之间用单个空格连接的结果字符串。
>
> **注意：**输入字符串 `s`中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
>
> - `s` 包含英文大小写字母、数字和空格 `' '`
> - `s` 中 **至少存在一个** 单词
>
> ----

> **示例 1：**
>
> ```
> 输入：s = "the sky is blue"
> 输出："blue is sky the"
> ```
>
> **示例 2：**
>
> ```
> 输入：s = "  hello world  "
> 输出："world hello"
> 解释：反转后的字符串中不能存在前导空格和尾随空格。
> ```
>
> **示例 3：**
>
> ```
> 输入：s = "a good   example"
> 输出："example good a"
> 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
> ```
>
> ----

**1.自己的方法(调用API)**

> 原来这种题不让调用啊🤔，我还在想这就是中等题吗...

```go
func reverseWords(s string) string {
    words := strings.Fields(s)
    
    left, right := 0, len(words)-1
    for left < right {
        words[left], words[right] = words[right], words[left]
        left++
        right--
    }
    
    return strings.Join(words, " ")
}

```



**2.正确的方法(双指针)**

**思路:1. 移除多余空格 -> 2. 翻转整个字节切片 -> 3. 翻转每个单词**

疑惑点:翻转每个单词，依赖后面的空格，因此最后一个单词需要额外的边界处理

```go
func reverseWords(s string) string {
    b := []byte(s)

    fast, slow := 0, 0
    for ; fast<len(b); fast++ {
        if b[fast] != ' ' {
            if slow != 0 {
                b[slow] = ' '
                slow++
            }
            for fast<len(b) && b[fast] != ' ' {
                b[slow] = b[fast]
                fast++
                slow++
            }
        }
    }

    b = b[:slow]
    reverse(b)

    start := 0
    for i := 0; i <= len(b); i++ {
        if i == len(b) || b[i] == ' '{
            reverse(b[start:i])
            start = i + 1
        }
    }
    return string(b)
}

func reverse(s []byte)  {
    left := 0
    right := len(s)-1
    for left < right{
        s[left], s[right]= s[right], s[left]
        left++
        right--
    }
}
```

