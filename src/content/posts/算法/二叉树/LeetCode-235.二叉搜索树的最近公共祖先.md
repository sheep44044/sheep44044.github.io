---
title: LeetCode-235.二叉搜索树的最近公共祖先
published: 2026-03-17
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**235. 二叉搜索树的最近公共祖先**](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)

> 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
>
> [百度百科](https://baike.baidu.com/item/最近公共祖先/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”
>
> 例如，给定如下二叉搜索树: root = [6,2,8,0,4,7,9,null,null,3,5]
>
> ![img](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2018/12/14/binarysearchtree_improved.png)
>
> ----

> **示例 1:**
>
> ```
> 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
> 输出: 6 
> 解释: 节点 2 和节点 8 的最近公共祖先是 6。
> ```
>
> **示例 2:**
>
> ```
> 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
> 输出: 2
> 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
> ```
>
> ---



**递归的解法**

思路：与 [**236. 二叉树的最近公共祖先**](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/) 不同，这里可以直接判断`root`和`p`、`q`的大小，前序遍历，直接向下俯冲，第一个在`p` 和 `q` 之间，就是最近公共祖先

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val   int
 *     Left  *TreeNode
 *     Right *TreeNode
 * }
 */

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root == nil {
        return root
    }
    
    if p.Val < root.Val && q.Val < root.Val {
        return lowestCommonAncestor(root.Left, p, q)
    }else if p.Val > root.Val && q.Val > root.Val {
        return lowestCommonAncestor(root.Right, p, q)
    }else {
        return root
    } 
}
```

