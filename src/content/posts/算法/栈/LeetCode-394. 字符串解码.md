---
title: LeetCode-394. 字符串解码
published: 2026-04-12
description: ''
image: ''
tags: ["栈"]
category: '算法'
draft: false 
lang: ''
---

### 栈

[**394. 字符串解码**](https://leetcode.cn/problems/decode-string/)

> 给定一个经过编码的字符串，返回它解码后的字符串。
>
> 编码规则为: `k[encoded_string]`，表示其中方括号内部的 `encoded_string` 正好重复 `k` 次。注意 `k` 保证为正整数。
>
> 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
>
> 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 `k` ，例如不会出现像 `3a` 或 `2[4]` 的输入。
>
> 测试用例保证输出的长度不会超过 `105`。
>
> ----

> **示例 1：**
>
> ```
> 输入：s = "3[a]2[bc]"
> 输出："aaabcbc"
> ```
>
> **示例 2：**
>
> ```
> 输入：s = "3[a2[c]]"
> 输出："accaccacc"
> ```
>
> **示例 3：**
>
> ```
> 输入：s = "2[abc]3[cd]ef"
> 输出："abcabccdcdcdef"
> ```
>
> **示例 4：**
>
> ```
> 输入：s = "abc3[cd]xyz"
> 输出："abccdcdcdxyz"
> ```
>
> ---



**思路**

虽然看着很麻烦，其实逻辑挺简单的，和人脑想的顺序一样。

1. 遇到了字母，那拿一个普通变量`curStr`储存
2. 遇到了数字，那再拿一个普通变量`curNum`储存
3. 遇到了`[`，需要暂存前面的字母和数字，那就存入栈了，继续处理括号里面的内容
4. 遇到了`]`，可以组成一个`string`了，那就从栈后进先出，获取前面对应的字母和数字，拼接
5. 重复操作

ps：可能是golang中像队列、栈这些都是用切片实现的，所以对栈没有太多感受

```go
func decodeString(s string) string {
    strStack := []string{}
    numStack := []int{}

    curStr := ""
    curNum := 0

    for _, char := range s {
        if char >= '0' && char <= '9' {
            curNum = curNum*10 + int(char-'0')
        }else if char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' {
            curStr += string(char) 
        }else if char == '[' {
            numStack = append(numStack, curNum)
            curNum = 0

            strStack = append(strStack, curStr)
            curStr = ""
        }else {
            num := numStack[len(numStack)-1]
            numStack = numStack[:len(numStack)-1]

            str := strStack[len(strStack)-1]
            strStack = strStack[:len(strStack)-1]

            curStr = str + strings.Repeat(curStr, num)
        }
    }
    return curStr
}
```

