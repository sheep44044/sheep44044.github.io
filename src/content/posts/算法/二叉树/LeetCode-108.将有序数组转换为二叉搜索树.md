---
title: LeetCode-108.将有序数组转换为二叉搜索树
published: 2026-03-15
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**108. 将有序数组转换为二叉搜索树**](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)

> 给你一个整数数组 `nums` ，其中元素已经按 **升序** 排列，请你将其转换为一棵 平衡 二叉搜索树。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：nums = [-10,-3,0,5,9]
> 输出：[0,-3,9,-10,null,5]
> 解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
> ```
>
> **示例 2：**
>
> <img src="https://assets.leetcode.com/uploads/2021/02/18/btree.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：nums = [1,3]
> 输出：[3,1]
> 解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
> ```
>
> ---



**递归的解法**

> 递归这种题有时候就是很傻逼和神奇，就像这题和汉谟拉比，不同的是这题从逻辑上可以从下往上推出来，汉谟拉比很麻烦

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedArrayToBST(nums []int) *TreeNode {
    if len(nums) == 0 {
        return nil
    }

    mid := len(nums)/2

    root := &TreeNode{Val: nums[mid]}

    root.Left = sortedArrayToBST(nums[:mid])
    root.Right = sortedArrayToBST(nums[mid+1:])

    return root
}
```

