---

published: 2025-11-25
draft: false
category: "算法"
tags: ["哈希"]
title: "LeetCode 1.两数之和"

---

### 哈希表

[**1. 两数之和**](https://leetcode.cn/problems/two-sum/)

> 给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。
>
> 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
>
> 你可以按任意顺序返回答案。
>
> ----

> **示例 1：**
>
> `输入：nums = [2,7,11,15], target = 9
> 输出：[0,1]
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。`
>
> **示例 2：**
>
> `输入：nums = [3,2,4], target = 6
> 输出：[1,2]`
>
> **示例 3：**
>
> 输入：nums = [3,3], target = 6
> 输出：[0,1]
>
> ----



**1.最简单暴力的(自己很久前的解法)**

```go
func twoSum(nums []int, target int) []int {
    for i := 0; i < len(nums); i++ {
        for j := i + 1; j < len(nums); j++ {
            if nums[i] + nums[j] == target {
                return []int{i, j}  
            }
        }
    }
    return nil
}
```



**2.现在的**

> AI告诉我说要先检查后储存，我把m[num] = i放前面 竟然是错了

```go
func twoSum(nums []int, target int) []int {
    m := make(map[int]int)
    for i , num := range nums {
        need := target - num
        if j , ok := m[need] ; ok{
            return []int{j, i}
        }
        m[num] = i
    }
    return nil
}
```

