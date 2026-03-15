---
title: LeetCode-104.二叉树的最大深度
published: 2026-03-14
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**104. 二叉树的最大深度**](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

> 给定一个二叉树 `root` ，返回其最大深度。
>
> 二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)
>
> 
>
> ```
> 输入：root = [3,9,20,null,null,15,7]
> 输出：3
> ```
>
> **示例 2：**
>
> ```
> 输入：root = [1,null,2]
> 输出：2
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
func maxDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    leftHeight := maxDepth(root.Left)

    rightHeight := maxDepth(root.Right)
    
    return max(leftHeight, rightHeight) + 1
}
```

