---
title: LeetCode-763. 划分字母区间
published: 2026-04-16
description: ''
image: ''
tags: ["贪心算法"]
category: '算法'
draft: false 
lang: ''
---

### 贪心算法

[**763. 划分字母区间**](https://leetcode.cn/problems/partition-labels/)

> 给你一个字符串 `s` 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。例如，字符串 `"ababcc"` 能够被分为 `["abab", "cc"]`，但类似 `["aba", "bcc"]` 或 `["ab", "ab", "cc"]` 的划分是非法的。
>
> 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 `s` 。
>
> 返回一个表示每个字符串片段的长度的列表。
>
> ----

> **示例 1：**
>
> ```
> 输入：s = "ababcbacadefegdehijhklij"
> 输出：[9,7,8]
> 解释：
> 划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
> 每个字母最多出现在一个片段中。
> 像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。 
> ```
>
> **示例 2：**
>
> ```
> 输入：s = "eccbbbbdec"
> 输出：[10]
> ```
>
> ---



**思路**

这题，我们的问题是如何确定一个片段？即如何判断所包含的字母是否全出现在这里。

如果我们想用`[]int{}`，每统计一次就减一直至为0判断，这样很难实现且麻烦。其实我们只需要关注每个字母的最后一个所在的`index`即可，前面的并不重要，只需`right = max(right, index)`，找到右边界的最大值即可确定整个片段。后面，`left = right + 1`重复即可

```go
func partitionLabels(s string) []int {
    lastPos := [26]int{}
    for i := 0; i < len(s); i++ {
        lastPos[s[i]-'a'] = i
    }

    left, right := 0, 0
    res := []int{}
    for i := 0; i < len(s); i++ {
        index := lastPos[s[i]-'a'] 
        right = max(right, index)
        if i == right {
            res = append(res, right-left+1)
            left = right + 1
        }
    }
    return res
}
```

