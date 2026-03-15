---
title: LeetCode-226.翻转二叉树
published: 2026-03-14
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**226. 翻转二叉树**](https://leetcode.cn/problems/invert-binary-tree/)

> 给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)
>
> ```
> 输入：root = [4,2,7,1,3,6,9]
> 输出：[4,7,2,9,6,3,1]
> ```
>
> **示例 2：**
>
> ![img](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)
>
> ```
> 输入：root = [2,1,3]
> 输出：[2,3,1]
> ```
>
> **示例 3：**
>
> ```
> 输入：root = []
> 输出：[]
> ```
>
> ---



**前序遍历**

> 改变一下顺序是后序遍历

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func invertTree(root *TreeNode) *TreeNode {
    if root == nil {
        return nil
    }
    
    root.Left, root.Right = root.Right, root.Left

    invertTree(root.Left)
    invertTree(root.Right)

    return root
}
```

