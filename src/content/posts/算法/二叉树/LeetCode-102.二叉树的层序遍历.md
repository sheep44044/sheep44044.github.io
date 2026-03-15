---
title: LeetCode-102.二叉树的层序遍历
published: 2026-03-15
description: ''
image: ''
tags: ["二叉树"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**102. 二叉树的层序遍历**](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

> 给你二叉树的根节点 `root` ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右访问所有节点）。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)
>
> ```
> 输入：root = [3,9,20,null,null,15,7]
> 输出：[[3],[9,20],[15,7]]
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



**BFS?的解法**

> 初识层序遍历，与之前的一直递归不太一样。感觉是个挺好用的模版

思路：用切片来模拟队列

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
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
    return res
}
```

