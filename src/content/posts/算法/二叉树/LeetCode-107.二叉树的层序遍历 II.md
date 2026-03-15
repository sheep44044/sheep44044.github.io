---
title: LeetCode-107.二叉树的层序遍历 II
published: 2026-03-15
description: ''
image: ''
tags: ["二叉树"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**107. 二叉树的层序遍历 II**](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)

> 给你二叉树的根节点 `root` ，返回其节点值 **自底向上的层序遍历** 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)
>
> ```
> 输入：root = [3,9,20,null,null,15,7]
> 输出：[[15,7],[9,20],[3]]
> ```
>
> **示例 2：**
>
> ```
> 输入：root = [1]
> 输出：[[1]]
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



**解法**

思路：[**102. 二叉树的层序遍历**](https://leetcode.cn/problems/binary-tree-level-order-traversal/)+反转即可

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrderBottom(root *TreeNode) [][]int {
    res := [][]int{}
    if root == nil {
        return res
    }

    queue := []*TreeNode{root}
    for len(queue) > 0 {
        size := len(queue)
        level := []int{}
        for i := 0; i < size; i++ {
            node := queue[0]
            queue = queue[1:]
            level = append(level, node.Val)

            if node.Left != nil {
                queue = append(queue, node.Left)
            }

            if node.Right != nil {
                queue = append(queue, node.Right)
            }
        }
        res = append(res, level)
    }

    for i := 0; i < len(res)/2; i++ {
        res[i], res[len(res)-1-i] = res[len(res)-1-i], res[i]
    }

    return res
}
```

