---
title: LeetCode-199.二叉树的右视图
published: 2026-03-15
description: ''
image: ''
tags: ["二叉树"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**199. 二叉树的右视图**](https://leetcode.cn/problems/binary-tree-right-side-view/)

> 给定一个二叉树的 **根节点** `root`，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
>
> ----

> **示例 1：**
>
> **输入：**root = [1,2,3,null,5,null,4]
>
> **输出：**[1,3,4]
>
> **解释：**
>
> <img src="https://assets.leetcode.com/uploads/2024/11/24/tmpd5jn43fs-1.png" alt="img" style="zoom:50%;" />
>
> **示例 2：**
>
> **输入：**root = [1,2,3,4,null,null,null,5]
>
> **输出：**[1,3,4,5]
>
> **解释：**
>
> <img src="https://assets.leetcode.com/uploads/2024/11/24/tmpkpe40xeh-1.png" alt="img" style="zoom:50%;" />
>
> **示例 3：**
>
> **输入：**root = [1,null,3]
>
> **输出：**[1,3]
>
> **示例 4：**
>
> **输入：**root = []
>
> **输出：**[]
>
> ---



**解法**

思路：[**102. 二叉树的层序遍历**](https://leetcode.cn/problems/binary-tree-level-order-traversal/)+修改几个参数 即可

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func rightSideView(root *TreeNode) []int {
    res := []int{}
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

            if node.Right != nil {
                queue = append(queue, node.Right)
            }

            if node.Left != nil {
                queue = append(queue, node.Left)
            }
        }
        res = append(res, level[0])
    }
    return res
}
```

