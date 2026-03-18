---
title: LeetCode-437.路径总和 III
published: 2026-03-18
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**437. 路径总和 III**](https://leetcode.cn/problems/path-sum-iii/)

> 给定一个二叉树的根节点 `root` ，和一个整数 `targetSum` ，求该二叉树里节点值之和等于 `targetSum` 的 **路径** 的数目。
>
> **路径** 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
> 输出：3
> 解释：和等于 8 的路径有 3 条，如图所示。
> ```
>
> **示例 2：**
>
> ```
> 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
> 输出：3
> ```
>
> ---



**递归的解法**

思路：这题其实看过 [**113. 路径总和 II**](https://leetcode.cn/problems/path-sum-ii/) 和 [**112. 路径总和**](https://leetcode.cn/problems/path-sum/) 的题目后，比较一下就可以发现 本题的答案就是`子节点的递归 + 根节点的路径数目`，由此写出两个递归即可

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, targetSum int) int {
    if root == nil {
        return 0
    }

    res := rootsum(root, targetSum)

    res += pathSum(root.Left, targetSum)
    res += pathSum(root.Right, targetSum)

    return res
}

func rootsum(node *TreeNode, targetSum int) int {
    if node == nil {
        return 0
    }

    count := 0
    if node.Val == targetSum {
        count++
    }

    count += rootsum(node.Left, targetSum-node.Val)
    count += rootsum(node.Right, targetSum-node.Val)

    return count
}
```

