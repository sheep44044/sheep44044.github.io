---
title: LeetCode-105.从前序与中序遍历序列构造二叉树
published: 2026-03-17
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**105. 从前序与中序遍历序列构造二叉树**](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

> 给定两个整数数组 `preorder` 和 `inorder` ，其中 `preorder` 是二叉树的**先序遍历**， `inorder` 是同一棵树的**中序遍历**，请构造二叉树并返回其根节点。
>
> ----

> **示例 1:**
>
> <img src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
> 输出: [3,9,20,null,null,15,7]
> ```
>
> **示例 2:**
>
> ```
> 输入: preorder = [-1], inorder = [-1]
> 输出: [-1]
> ```
>
> ---



**看思路后的解法**

思路：从前序遍历序列的第一个元素确定根节点，然后在中序遍历序列中找到该根节点的位置，其左侧为左子树的中序序列，右侧为右子树的中序序列。接着根据左子树的节点个数，在前序序列中划分出左子树和右子树的前序序列，最后递归地构建左右子树即可。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func buildTree(preorder []int, inorder []int) *TreeNode {
    if len(preorder) == 0 {
        return nil
    }

    rootVal := preorder[0]
    root := &TreeNode{Val: rootVal}

    var rootIndex int
    for i, v := range inorder {
        if v == rootVal {
            rootIndex = i
            break
        }
    }

    leftinorder := inorder[:rootIndex]
    rightinorder := inorder[rootIndex+1:]

    size := len(leftinorder)
    leftpreorder := preorder[1:size+1]
    rightpreorder := preorder[size+1:]

    root.Left = buildTree(leftpreorder, leftinorder)
    root.Right = buildTree(rightpreorder, rightinorder)

    return root
}
```



**ai优化版**

```go
func buildTree(preorder []int, inorder []int) *TreeNode {
    if len(preorder) == 0 {
        return nil
    }

    rootVal := preorder[0]
    root := &TreeNode{Val: rootVal}

    var rootIndex int
    for i, v := range inorder {
        if v == rootVal {
            rootIndex = i
            break 
        }
    }

    leftSize := len(inorder[:rootIndex]) 

    root.Left = buildTree(preorder[1 : 1+leftSize], inorder[:rootIndex])

    root.Right = buildTree(preorder[1+leftSize:], inorder[rootIndex+1:])

    return root
}
```
