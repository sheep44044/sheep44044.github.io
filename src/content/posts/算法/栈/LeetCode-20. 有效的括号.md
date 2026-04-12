---
title: LeetCode-20. 有效的括号
published: 2026-04-12
description: ''
image: ''
tags: ["栈"]
category: '算法'
draft: false 
lang: ''
---

### 栈

[**20. 有效的括号**](https://leetcode.cn/problems/valid-parentheses/)

> 给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。
>
> 有效字符串需满足：
>
> 1. 左括号必须用相同类型的右括号闭合。
> 2. 左括号必须以正确的顺序闭合。
> 3. 每个右括号都有一个对应的相同类型的左括号。
>
> ----

> **示例 1：**
>
> **输入：**s = "()"
>
> **输出：**true
>
> **示例 2：**
>
> **输入：**s = "()[]{}"
>
> **输出：**true
>
> **示例 3：**
>
> **输入：**s = "(]"
>
> **输出：**false
>
> **示例 4：**
>
> **输入：**s = "([])"
>
> **输出：**true
>
> **示例 5：**
>
> **输入：**s = "([)]"
>
> **输出：**false
>
> ---



**思路**

初识栈，这题就是利用栈道对称性，思路挺简单的

```go
func isValid(s string) bool {
    if len(s)%2 == 1 {
        return false
    }

    stack := make([]rune, 0)

    for _, v := range s {
        if v == '(' {
            stack = append(stack, ')')
        }else if v == '{' {
            stack = append(stack, '}')
        }else if v == '[' {
            stack = append(stack, ']')
        }else {
            if len(stack) == 0 || stack[len(stack)-1] != v {
                return false
            }
            stack = stack[:len(stack)-1]
        }
    }

    if len(stack) == 0 {
        return true
    }else {
        return false
    }
}
```

