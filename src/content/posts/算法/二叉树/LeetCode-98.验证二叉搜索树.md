---
title: LeetCode-98.验证二叉搜索树
published: 2026-03-15
description: ''
image: ''
tags: ["二叉树","递归"]
category: '算法'
draft: false 
lang: ''
---

### 二叉树

[**98. 验证二叉搜索树**](https://leetcode.cn/problems/validate-binary-search-tree/)

> 给你一个二叉树的根节点 `root` ，判断其是否是一个有效的二叉搜索树。
>
> **有效** 二叉搜索树定义如下：
>
> - 节点的左子树只包含 **严格小于** 当前节点的数。
> - 节点的右子树只包含 **严格大于** 当前节点的数。
> - 所有左子树和右子树自身必须也是二叉搜索树。
>
> ----

> **示例 1：**
>
> <img src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [2,1,3]
> 输出：true
> ```
>
> **示例 2：**
>
> <img src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg" alt="img" style="zoom:50%;" />
>
> ```
> 输入：root = [5,1,4,null,null,3,6]
> 输出：false
> 解释：根节点的值是 5 ，但是右子节点的值是 4 。
> ```
>
> ---



**自己的解法**

思路：从题目中可以看到二叉搜索树定义，

1. 其中`isValidBST`的递归，能够保证所有左子树和右子树自身必须也是二叉搜索树。

2. 所以，我们只需要保证，本身的节点的大小能够比左边最大的大，比右边最小的小即可

我就是再来个递归获取最大和最小值

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isValidBST(root *TreeNode) bool {
    if root == nil {
        return true
    }

    left := isValidBST(root.Left)
    leftmax := findmax(root.Left)

    right := isValidBST(root.Right)
    rightmin := findmin(root.Right)

    if leftmax != nil && rightmin != nil {
        if leftmax.Val >= root.Val || root.Val >= rightmin.Val {
            return false
        }
    }else if leftmax == nil && rightmin != nil {
        if root.Val >= rightmin.Val {
            return false
        }
    }else if leftmax != nil && rightmin == nil {
        if root.Val <= leftmax.Val {
            return false
        }
    }

    return left && right
}

func findmax(root *TreeNode) *TreeNode {
    if root == nil {
        return nil
    } 

    if root.Right == nil {
        return root
    }

    return findmax(root.Right)
}

func findmin(root *TreeNode) *TreeNode {
    if root == nil {
        return nil
    } 

    if root.Left == nil {
        return root
    }

    return findmin(root.Left)
}
```



**设定上下边界法**

思路：给我的方法优化了一下

```go
func isValidBST(root *TreeNode) bool {
    return validate(root, math.MinInt, math.MaxInt)
}

func validate(node *TreeNode, min, max int) bool {
    if node == nil {
        return true
    }

    if node.Val <= min || node.Val >= max {
        return false
    }

    leftValid := validate(node.Left, min, node.Val)
    
    rightValid := validate(node.Right, node.Val, max)

    return leftValid && rightValid
}
```



**中序遍历法**

思路：二叉搜索树进行中序遍历，得到的结果一定是一个「严格递增」的有序序列

所以只需要进行中序遍历，再比较大小即可

```go
func isValidBST(root *TreeNode) bool {
    // 记录上一个遍历到的节点的值，初始设为极小值
    preVal := math.MinInt 
    
    var inorder func(*TreeNode) bool
    inorder = func(node *TreeNode) bool {
        if node == nil {
            return true
        }

        // 1. 左：一直往左走到底
        leftValid := inorder(node.Left)

        // 2. 中：处理当前节点
        // 如果当前节点的值 <= 上一个节点的值，说明不是严格递增的，破坏了规则
        if node.Val <= preVal {
            return false
        }
        preVal = node.Val // 更新“上一个节点的值”为当前节点

        // 3. 右：处理右子树
        rightValid := inorder(node.Right)

        return leftValid && rightValid
    }

    return inorder(root)
}
```
