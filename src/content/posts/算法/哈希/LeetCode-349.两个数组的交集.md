---
title: LeetCode-349.两个数组的交集
published: 2026-02-20
description: ''
image: ''
tags: ["哈希"]
category: '算法'
draft: false 
lang: ''
---

### 哈希表

[**349.两个数组的交集**](https://leetcode.cn/problems/intersection-of-two-arrays/)

> 给定两个数组 `nums1` 和 `nums2` ，返回 *它们的 交集* 。输出结果中的每个元素一定是 **唯一** 的。我们可以 **不考虑输出结果的顺序** 。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums1 = [1,2,2,1], nums2 = [2,2]
> 输出：[2]
> ```
>
> **示例 2：**
>
> ```
> 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
> 输出：[9,4]
> 解释：[4,9] 也是可通过的
> ```
>
> ----



**1.自己的解法**（在[**242.有效的字母异位词**](https://leetcode.cn/problems/valid-anagram/)的基础上修改）

```go
func intersection(nums1 []int, nums2 []int) []int {
    record1 := make(map[int]int)
    for _, i := range nums1{
        record1[i]++
    }

    record2 := make(map[int]int)
    for _, i := range nums2{
        record2[i]++
    }

    output := []int{}
    for i := range record1{
        if record2[i] > 0{
            output = append(output, i)
        }
    }

    return output
}
```



**2.使用字典和集合(代码随想录)**

```go
func intersection(nums1 []int, nums2 []int) []int {
    set:=make(map[int]struct{},0)  // 用map模拟set
    res:=make([]int,0)
    for _,v:=range nums1{
        if _,ok:=set[v];!ok{
            set[v]=struct{}{}
        }
    }
    for _,v:=range nums2{
        //如果存在于上一个数组中，则加入结果集，并清空该set值
        if _,ok:=set[v];ok{
            res=append(res,v)
            delete(set, v)
        }
    }
    return res
}
```



**3.使用数组**

> 和我的方法差不多，但感觉更精准，符合取交集这个要求

```go
func intersection(nums1 []int, nums2 []int) []int {
    count1 := make([]int, 1001, 1001)
    count2 := make([]int, 1001, 1001)
    res := make([]int, 0)
    for _, v := range nums1 {
        count1[v] = 1
    }
    for _, v := range nums2 {
        count2[v] = 1
    }
    for i := 0; i <= 1000; i++ {
        if count1[i] + count2[i] == 2 {
            res = append(res, i)
        }
    }
    return res
}
```

