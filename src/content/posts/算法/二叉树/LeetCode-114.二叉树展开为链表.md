---
title: LeetCode-114.二叉树展开为链表
published: 2026-03-16
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**114. 二叉树展开为链表**](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)

> 给你二叉树的根结点 `root` ，请你将它展开为一个单链表：
>
> - 展开后的单链表应该同样使用 `TreeNode` ，其中 `right` 子指针指向链表中下一个结点，而左子指针始终为 `null` 。
> - 展开后的单链表应该与二叉树 [**先序遍历**](https://baike.baidu.com/item/先序遍历/6442839?fr=aladdin) 顺序相同。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [1,2,5,3,4,null,6]
> 输出：[1,null,2,null,3,null,4,null,5,null,6]
> ```
>
> **示例 2：**
>
> ```
> 输入：root = []
> 输出：[]
> ```
>
> **示例 3：**
>
> ```
> 输入：root = [0]
> 输出：[0]
> ```
>
> ---



**自己的解法**

思路：前序遍历+切片存储

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func flatten(root *TreeNode)  {
    res := []*TreeNode{}

    var preorder func(*TreeNode)
    preorder = func(node *TreeNode) {
        if node == nil {
            return
        }
        
        res = append(res,node)
        preorder(node.Left)
        preorder(node.Right)
    }
    preorder(root)

    for i := 0; i < len(res)-1; i++ {
        res[i].Right = res[i+1]
        res[i].Left = nil
    }
}
```



**O(1)的方法**

思路：如果我们直接在正常的“前序遍历（中左右）”里去改指针，会遇到一个致命问题： 当你站在根节点（中），把 `node.Right` 指向了左孩子之后，**你原本的右孩子就彻底“失联”了**，后面的递归根本找不到右子树在哪。所以，我们需要反过来处理，使其逻辑相反

```go
func flatten(root *TreeNode)  {
    var pre *TreeNode

    var traverse func(*TreeNode)
    traverse = func(node *TreeNode) {
        if node == nil {
            return
        }

        traverse(node.Right)

        traverse(node.Left)

        node.Right = pre
        node.Left = nil
        pre = node
    }

    traverse(root)
}
```
