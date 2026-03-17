---
title: LeetCode-106.从中序与后序遍历序列构造二叉树
published: 2026-03-17
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**106. 从中序与后序遍历序列构造二叉树**](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

> 给定两个整数数组 `inorder` 和 `postorder` ，其中 `inorder` 是二叉树的中序遍历， `postorder` 是同一棵树的后序遍历，请你构造并返回这颗 *二叉树* 。
>
> ----

> **示例 1:**
>
> ![img](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)
>
> ```
> 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
> 输出：[3,9,20,null,null,15,7]
> ```
>
> **示例 2:**
>
> ```
> 输入：inorder = [-1], postorder = [-1]
> 输出：[-1]
> ```
>
> ---



**看思路后的解法**

思路：与 [**105. 从前序与中序遍历序列构造二叉树**](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) 类似，只是储存root的顺序不一样，一个是中左右，一个是左右中

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func buildTree(inorder []int, postorder []int) *TreeNode {
    if len(inorder) == 0 {
        return nil
    }

    nodeVal := postorder[len(postorder)-1]
    node := &TreeNode{Val: nodeVal}

    var nodeIndex int
    for i, v := range inorder {
        if v == nodeVal {
            nodeIndex = i
            break
        }
    }

    leftinorder := inorder[:nodeIndex]
    rightinorder := inorder[nodeIndex+1:]

    size := len(leftinorder)
    leftpostorder := postorder[:size]
    rightpostorder := postorder[size:len(postorder)-1]

    node.Left = buildTree(leftinorder, leftpostorder)
    node.Right = buildTree(rightinorder, rightpostorder)

    return node
}
```

