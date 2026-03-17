---
title: LeetCode-230.二叉搜索树中第 K 小的元素
published: 2026-03-16
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**230. 二叉搜索树中第 K 小的元素**](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)

> 给定一个二叉搜索树的根节点 `root` ，和一个整数 `k` ，请你设计一个算法查找其中第 `k` 小的元素（`k` 从 1 开始计数）。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [3,1,4,null,2], k = 1
> 输出：1
> ```
>
> **示例 2：**
>
> <img src="https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [5,3,6,2,4,null,null,1], k = 3
> 输出：3
> ```
>
> ---



**递归的解法**

思路：只要知道二叉搜索树进行中序遍历，得到的结果一定是一个「严格递增」的有序序列就很简单了

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func kthSmallest(root *TreeNode, k int) int {
    res := []int{}

    var inorder func(*TreeNode)
    inorder = func(node *TreeNode){
        if node == nil {
            return 
        }

        inorder(node.Left)

        res = append(res, node.Val)

        inorder(node.Right)
    }

    inorder(root)
    return res[k-1]
}
```

