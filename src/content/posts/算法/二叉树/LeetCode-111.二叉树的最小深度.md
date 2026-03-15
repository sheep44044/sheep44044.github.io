---
title: LeetCode-111.二叉树的最小深度
published: 2026-03-14
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**111. 二叉树的最小深度**](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

> 给定一个二叉树，找出其最小深度。
>
> 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
>
> **说明：**叶子节点是指没有子节点的节点。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg)
>
> ```
>输入：root = [3,9,20,null,null,15,7]
> 输出：2
> ```
> 
> **示例 2：**
>
> ```
>输入：root
> ```
> 
> ---



**自己的解法**

思路：这题与 [二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/) 稍有不同，求最小时会面临一个问题：如果一颗树是“偏瘫”的（比如只有左边的，没有右边的），直接用 `min(left, right)`，右边的空指针会返回深度 0，导致整棵树算出来的最小深度是 1。

所以，我们需要`if root.Left == nil && root.Right != nil { ... }` 和
`if root.Right == nil && root.Left != nil { ... }` 去除这些错误

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }

    if root.Left == nil && root.Right != nil {
        return minDepth(root.Right) + 1
    }
   
    if root.Right == nil && root.Left != nil {
        return minDepth(root.Left) + 1
    }
    
    return min(minDepth(root.Left), minDepth(root.Right)) + 1
}
```

