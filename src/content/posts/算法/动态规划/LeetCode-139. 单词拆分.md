---
title: LeetCode-139. 单词拆分
published: 2026-04-18
description: ''
image: ''
tags: ["动态规划"]
category: '算法'
draft: false 
lang: ''
---

### 动态规划

[**139. 单词拆分**](https://leetcode.cn/problems/word-break/)

> 给你一个字符串 `s` 和一个字符串列表 `wordDict` 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 `s` 则返回 `true`。
>
> **注意：**不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
>
> ----

> **示例 1：**
>
> ```
> 输入: s = "leetcode", wordDict = ["leet", "code"]
> 输出: true
> 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
> ```
>
> **示例 2：**
>
> ```
> 输入: s = "applepenapple", wordDict = ["apple", "pen"]
> 输出: true
> 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
>      注意，你可以重复使用字典中的单词。
> ```
>
> **示例 3：**
>
> ```
> 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
> 输出: false
> ```
>
> ---



**思路**

这题也是完全背包问题，物品的重量就是他的长度，只关心是否能否恰好装满背包，不关心其价值。

相较于 [**279. 完全平方数**](https://leetcode.cn/problems/perfect-squares/)，这里只是多了一层字符串内容匹配的逻辑

```go
func wordBreak(s string, wordDict []string) bool {
    wordMap := make(map[string]bool)
    for _, word := range wordDict {
        wordMap[word] = true
    }

    dp := make([]bool, len(s)+1)
    dp[0] = true 

    for i := 1; i <= len(s); i++ {
        for j := 0; j < i; j++ {
            if dp[j] && wordMap[s[j:i]] {
                dp[i] = true
                break 
            }
        }
    }

    return dp[len(s)]
}
```

