---
title: LeetCode-684. 冗余连接
published: 2026-03-29
description: ''
image: ''
tags: ["图论","并查集"]
category: '算法'
draft: false 
lang: ''
---

### 图论

[**684. 冗余连接**](https://leetcode.cn/problems/redundant-connection/)

> 树可以看成是一个连通且 **无环** 的 **无向** 图。
>
> 给定一个图，该图从一棵 `n` 个节点 (节点值 `1～n`) 的树中添加一条边后获得。添加的边的两个不同顶点编号在 `1` 到 `n` 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 `n` 的二维数组 `edges` ，`edges[i] = [ai, bi]` 表示图中在 `ai` 和 `bi` 之间存在一条边。
>
> 请找出一条可以删去的边，删除后可使得剩余部分是一个有着 `n` 个节点的树。如果有多个答案，则返回数组 `edges` 中最后出现的那个。
>
> ----

> **示例 1：**
>
> <img src="https://pic.leetcode.cn/1626676174-hOEVUL-image.png" alt="img" style="zoom:50%;" />
>
> ```
> 输入: edges = [[1,2], [1,3], [2,3]]
> 输出: [2,3]
> ```
>
> **示例 2：**
>
> <img src="https://pic.leetcode.cn/1626676179-kGxcmu-image.png" alt="img" style="zoom:50%;" />
>
> ```
> 输入: edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]
> 输出: [1,4]
> ```
>
> ---



**并查集的方法**

> 做了两题感觉比较公式🫤？

```go
func findRedundantConnection(edges [][]int) []int {
    n := len(edges)

    parent := make([]int, n+1)
    for i := 1; i <= n; i++ {
        parent[i] = i
    }

    var find func(i int) int
    find = func(i int) int {
        if parent[i] != i {
            parent[i] = find(parent[i])
        }
        return parent[i]
    }

    for i := 0; i < n; i++ {
        a, b := edges[i][0], edges[i][1]
        rootA := find(a)
        rootB := find(b)
        if rootA == rootB {
            return edges[i]
        }else {
            parent[rootA] = rootB
        }
    }
    return nil
}
```

