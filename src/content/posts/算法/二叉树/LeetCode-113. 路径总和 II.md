---
title: LeetCode-113. 路径总和 II
published: 2026-03-18
description: ''
image: ''
tags: ["二叉树","递归","回溯"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**113. 路径总和 II**](https://leetcode.cn/problems/path-sum-ii/)

> 给你二叉树的根节点 `root` 和一个整数目标和 `targetSum` ，找出所有 **从根节点到叶子节点** 路径总和等于给定目标和的路径。
>
> **叶子节点** 是指没有子节点的节点。
>
> ----

> **示例 1：**
>
> ![img](https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg)
>
> ```
> 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
> 输出：[[5,4,11,2],[5,8,4,5]]
> ```
>
> **示例 2：**
>
> ![img](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)
>
> ```
> 输入：root = [1,2,3], targetSum = 5
> 输出：[]
> ```
>
> **示例 3：**
>
> ```
> 输入：root = [1,2], targetSum = 0
> 输出：[]
> ```
>
> ---



**解法**

> 原本只是想先做一下路径总和 I 和 路径总和 II，为路径总和 III铺垫一下的，没想到还涉及到了回溯，更不会做了☹️，不过最终还是理解了

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, targetSum int) [][]int {
    var res [][]int
    var path []int

    var dfs func(*TreeNode, int)
    dfs = func(node *TreeNode, sum int) {
        if node == nil {
            return
        }

        path = append(path, node.Val)
        sum -= node.Val

        if node.Left == nil && node.Right == nil && sum == 0 {
            tmp := make([]int, len(path))
            copy(tmp, path)
            res = append(res, tmp)
        } else {
            dfs(node.Left, sum)
            dfs(node.Right, sum)
        }

        path = path[:len(path)-1]
    }

    dfs(root, targetSum)
    return res
}
```

