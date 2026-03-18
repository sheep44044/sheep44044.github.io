---
title: LeetCode-124.二叉树中的最大路径和
published: 2026-03-18
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**124. 二叉树中的最大路径和**](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)

> 二叉树中的 **路径** 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 **至多出现一次** 。该路径 **至少包含一个** 节点，且不一定经过根节点。
>
> **路径和** 是路径中各节点值的总和。
>
> 给你一个二叉树的根节点 `root` ，返回其 **最大路径和** 。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [1,2,3]
> 输出：6
> 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
> ```
>
> **示例 2：**
>
> <img src="https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [-10,9,20,null,null,15,7]
> 输出：42
> 解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
> ```
>
> ---



**递归的解法**

> 作为困难题，其实还是挺简单的

思路：和 [**543. 二叉树的直径**](https://leetcode.cn/problems/diameter-of-binary-tree/) 类似，不过数据处理相对复杂一点，需要处理左右为负的情况，判断最大时需要都加起来，而返回时需要根+左右两边更大的值，这里稍微不一样。

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

