---
title: LeetCode-239.滑动窗口最大值
published: 2026-03-04
description: ''
image: ''
tags: ["滑动窗口"]
category: '算法'
draft: false 
lang: ''
---



### 滑动窗口

[**239. 滑动窗口最大值**](https://leetcode.cn/problems/sliding-window-maximum/)

> 给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。
>
> 返回 *滑动窗口中的最大值* 。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
> 输出：[3,3,5,5,6,7]
> 解释：
> 滑动窗口的位置                最大值
> ---------------               -----
> [1  3  -1] -3  5  3  6  7       3
>  1 [3  -1  -3] 5  3  6  7       3
>  1  3 [-1  -3  5] 3  6  7       5
>  1  3  -1 [-3  5  3] 6  7       5
>  1  3  -1  -3 [5  3  6] 7       6
>  1  3  -1  -3  5 [3  6  7]      7
> ```
>
> **示例 2：**
>
> ```
> 输入：nums = [1], k = 1
> 输出：[1]
> ```
>
> ---



**1.自己的失败的解法**

> 只有42/52通过了测试用例，超出时间限制了🥲

```go
func maxSlidingWindow(nums []int, k int) []int {
    right := 0
    window := []int{}
    res := []int{}

    if len(nums) < k {
        return nums
    }

    for right < len(nums) {
        window = append(window, nums[right])
        maxVal := window[0]
        
        if len(window) == k {
            for _, val := range window {
                if val > maxVal {
                    maxVal = val
                }   
            }

            res = append(res, maxVal)
            window = window[1:] 
        }
        right++
    }
    return res
}
```



**2.滑动窗口 + 单调对列**

> 评论区找到的地狱故事挺好地解释了这个算法
>
> 这是一个降本增笑的故事：
>
> 1. 如果新员工比老员工强（或者一样强），把老员工裁掉。（元素进入窗口）
> 2. 如果老员工 35 岁了，也裁掉。（元素离开窗口）
>
> 裁员后，资历最老（最左边）的人就是最强的员工了。

思路：我们需要降低时间复杂度，之前的时间复杂度是 **O(N×k)**，为了把时间复杂度降到 **O(N)**，我们需要一种特殊的数据结构，它需要满足：队头永远是当前窗口的最大值

```go
func maxSlidingWindow(nums []int, k int) []int {
    if len(nums) == 0 || k == 0 {
        return []int{}
    }
    
    var deque []int 
    var res []int
    
    for right := 0; right < len(nums); right++ {
        
        for len(deque) > 0 && nums[deque[len(deque)-1]] < nums[right] {
            deque = deque[:len(deque)-1] 
        }
        
        deque = append(deque, right)
        
        if deque[0] < right - k + 1 {
            deque = deque[1:] 
        }
        
        if right >= k - 1 {
            res = append(res, nums[deque[0]])
        }
    }
    return res
}
```
