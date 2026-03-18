---
title: LeetCode-112.路径总和
published: 2026-03-17
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**112. 路径总和**](https://leetcode.cn/problems/path-sum/)

> 给你二叉树的根节点 `root` 和一个表示目标和的整数 `targetSum` 。判断该树中是否存在 **根节点到叶子节点** 的路径，这条路径上所有节点值相加等于目标和 `targetSum` 。如果存在，返回 `true` ；否则，返回 `false` 。
>
> **叶子节点** 是指没有子节点的节点。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
> 输出：true
> 解释：等于目标和的根节点到叶节点路径如上图所示。
> ```
>
> **示例 2：**
>
> <img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [1,2,3], targetSum = 5
> 输出：false
> 解释：树中存在两条根节点到叶子节点的路径：
> (1 --> 2): 和为 3
> (1 --> 3): 和为 4
> 不存在 sum = 5 的根节点到叶子节点的路径。
> ```
>
> **示例 3：**
>
> ```
> 输入：root = [], targetSum = 0
> 输出：false
> 解释：由于树是空的，所以不存在根节点到叶子节点的路径。
> ```
>
> ---



**递归的解法**

思路：毕竟是简单题，这题其实不难，只需要注意一下叶子的边界即可

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func hasPathSum(root *TreeNode, targetSum int) bool {
    if root == nil {
        return false
    }

    if root.Left == nil && root.Right == nil {
        return root.Val == targetSum
    }

    targetSum =  targetSum - root.Val
    left := hasPathSum(root.Left, targetSum)
    right := hasPathSum(root.Right, targetSum)

    return left || right
}
```

