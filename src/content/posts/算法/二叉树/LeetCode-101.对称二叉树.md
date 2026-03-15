---
title: LeetCode-101.对称二叉树
published: 2026-03-15
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**101. 对称二叉树**](https://leetcode.cn/problems/symmetric-tree/)

> 给你一个二叉树的根节点 `root` ， 检查它是否轴对称。
>
> ----

> **示例 1：**
>
> ![img](https://pic.leetcode.cn/1698026966-JDYPDU-image.png)
>
> ```
> 输入：root = [1,2,2,3,4,4,3]
> 输出：true
> ```
>
> **示例 2：**
>
> ![img](https://pic.leetcode.cn/1698027008-nPFLbM-image.png)
>
> ```
> 输入：root = [1,2,2,null,3,null,3]
> 输出：false
> ```
>
> ---



**递归的解法**

思路：

1. 这道题我们需要操纵两个节点，所以我们需要另起一个辅助函数，而不是像前几道用原本的函数。

2. 在写这段代码的终止条件时，逻辑顺序非常重要。 我们必须**先处理节点为空的情况**，**再处理节点不为空但值不相等的情况**。如果你先把 `left.Val != right.Val` 写在前面，一旦传入的是空指针，程序直接就 Panic了。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    if root == nil {
        return true
    }

    return compare(root.Left, root.Right)
}

func compare(left, right *TreeNode) bool {
    if left == nil && right == nil {
        return true
    }else if left == nil && right != nil {
        return false
    }else if left != nil && right == nil {
        return false
    }else if left.Val != right.Val {
        return false
    }

    outside := compare(left.Left, right.Right)
    inside := compare(left.Right, right.Left)

    return outside && inside       
}
```

