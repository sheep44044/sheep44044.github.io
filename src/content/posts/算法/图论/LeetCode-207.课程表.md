---
title: LeetCode-207.课程表
published: 2026-03-28
description: ''
image: ''
tags: ["图论","BFS"]
category: '算法'
draft: false 
lang: ''
---

### 图论

[**207. 课程表**](https://leetcode.cn/problems/course-schedule/)

> 你这个学期必须选修 `numCourses` 门课程，记为 `0` 到 `numCourses - 1` 。
>
> 在选修某些课程之前需要一些先修课程。 先修课程按数组 `prerequisites` 给出，其中 `prerequisites[i] = [ai, bi]` ，表示如果要学习课程 `ai` 则 **必须** 先学习课程 `bi` 。
>
> - 例如，先修课程对 `[0, 1]` 表示：想要学习课程 `0` ，你需要先完成课程 `1` 。
>
> 请你判断是否可能完成所有课程的学习？如果可以，返回 `true` ；否则，返回 `false` 。
>
> ----

> **示例 1：**
>
> ```
> 输入：numCourses = 2, prerequisites = [[1,0]]
> 输出：true
> 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
> ```
>
> **示例 2：**
>
> ```
> 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
> 输出：false
> 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
> ```
>
> ---



**BFS的方法**

```go
func canFinish(numCourses int, prerequisites [][]int) bool {
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

    count := 0
    for len(queue) > 0 {
        cur := queue[0]
        queue = queue[1:]
        count++

        for _, v := range graph[cur] {
            indegree[v]--
            if indegree[v] == 0 {
                queue = append(queue, v)
            }
        }
    }

    return count == numCourses
}
```
