---
title: LeetCode-210.课程表 II
published: 2026-03-28
description: ''
image: ''
tags: ["图论","BFS"]
category: '算法'
draft: false 
lang: ''
---

### 图论

[**210. 课程表 II**](https://leetcode.cn/problems/course-schedule-ii/)

> 现在你总共有 `numCourses` 门课需要选，记为 `0` 到 `numCourses - 1`。给你一个数组 `prerequisites` ，其中 `prerequisites[i] = [ai, bi]` ，表示在选修课程 `ai` 前 **必须** 先选修 `bi` 。
>
> - 例如，想要学习课程 `0` ，你需要先完成课程 `1` ，我们用一个匹配来表示：`[0,1]` 。
>
> 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 **任意一种** 就可以了。如果不可能完成所有课程，返回 **一个空数组** 。
>
> ----

> **示例 1：**
>
> ```
> 输入：numCourses = 2, prerequisites = [[1,0]]
> 输出：[0,1]
> 解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
> ```
>
> **示例 2：**
>
> ```
> 输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
> 输出：[0,2,1,3]
> 解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
> 因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
> ```
>
> **示例 3：**
>
> ```
> 输入：numCourses = 1, prerequisites = []
> 输出：[0]
> ```
>
> ---



**BFS的方法**

思路:和 [**207. 课程表**](https://leetcode.cn/problems/course-schedule/) 类似，只是要求成功时输出`数组`而不是`true`。所以，把count换成res即可

```go
func findOrder(numCourses int, prerequisites [][]int) []int {
    graph := make([][]int, numCourses)
    indegree := make([]int, numCourses)

    for  _, v := range prerequisites {
        to, from := v[0], v[1]
        graph[from] = append(graph[from], to)
        indegree[to]++
    }

    queue := []int{}
    for i := 0; i < numCourses; i++ {
        if indegree[i] == 0 {
            queue = append(queue, i)
        }
    }

    res := []int{}
    for len(queue) > 0 {
        cur := queue[0]
        queue = queue[1:]
        res = append(res, cur)

        for _, v := range graph[cur] {
            indegree[v]--
            if indegree[v] == 0 {
                queue = append(queue, v)
            }
        }
    }

    if len(res) != numCourses {
        return []int{}
    }

    return res
}
```

