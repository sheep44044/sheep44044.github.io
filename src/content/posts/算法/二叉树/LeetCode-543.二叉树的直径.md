---
title: LeetCode-543.二叉树的直径
published: 2026-03-15
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**543. 二叉树的直径**](https://leetcode.cn/problems/diameter-of-binary-tree/)

> 给你一棵二叉树的根节点，返回该树的 **直径** 。
>
> 二叉树的 **直径** 是指树中任意两个节点之间最长路径的 **长度** 。这条路径可能经过也可能不经过根节点 `root` 。
>
> 两节点之间路径的 **长度** 由它们之间边数表示。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg)
>
> ```
> 输入：root = [1,2,3,4,5]
> 输出：3
> 解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
> ```
>
> **示例 2：**
>
> ```
> 输入：root = [1,2]
> 输出：1
> ```
>
> ---



**递归的解法**

思路：可以认为是 所有节点中左右子树的深度和的最大值 or 不经过根节点的最大值

所以在求`maxDepth`时，维护一个全局的最大值`maxDiameter`即可，存储到达跟节点前的最大值

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func diameterOfBinaryTree(root *TreeNode) int {
    if root == nil {
        return 0
    }
    maxDiameter := 0
    
    var maxDepth func(*TreeNode) int
    maxDepth = func(root *TreeNode) int {
        if root == nil {
            return 0
        }

        leftHeight := maxDepth(root.Left)
        rightHeight := maxDepth(root.Right)

        if leftHeight + rightHeight > maxDiameter {
            maxDiameter = leftHeight + rightHeight
        }
    
        return max(leftHeight, rightHeight) + 1
    }
    maxDepth(root)

    return maxDiameter
}
```

