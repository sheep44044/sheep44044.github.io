---
title: LeetCode-49. 字母异位词分组
published: 2026-02-21
description: ''
image: ''
tags: ["哈希"]
category: '算法'
draft: false 
lang: ''
---

### 哈希表

[**49. 字母异位词分组**](https://leetcode.cn/problems/group-anagrams/)

> 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
>
> ----

> **示例 1:**
>
> **输入:** strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
>
> **输出:** [["bat"],["nat","tan"],["ate","eat","tea"]]
>
> **解释：**
>
> - 在 strs 中没有字符串可以通过重新排列来形成 `"bat"`。
> - 字符串 `"nat"` 和 `"tan"` 是字母异位词，因为它们可以重新排列以形成彼此。
> - 字符串 `"ate"` ，`"eat"` 和 `"tea"` 是字母异位词，因为它们可以重新排列以形成彼此。
>
> **示例 2:**
>
> **输入:** strs = [""]
>
> **输出:** [[""]]
>
> **示例 3:**
>
> **输入:** strs = ["a"]
>
> **输出:** [["a"]]
>
> ----



**1.自己的解法**

> 算真正意义上自己完成的hot100的第一题，虽然做了半个多小时，但还是做出来了，吼吼～
>
> 感觉学哈希只学会了count[v - 'a']++，做出来后感觉还是挺简单的，开始困住我的是构建怎样的map，有点左右脑互搏了

```go
func groupAnagrams(strs []string) [][]string {
   m := make(map[[26]int][]string)
   for _, str := range strs {
        count := [26]int{}
        for _, v := range str {
            count[v - 'a']++
        }
        m[count] = append(m[count],str)
   }   

    res := [][]string{}
    for _, v := range m {
        res =append(res, v)
    }
   return res
}
```



