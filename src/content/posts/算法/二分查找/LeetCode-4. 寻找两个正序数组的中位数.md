---
title: LeetCode-4. 寻找两个正序数组的中位数
published: 2026-04-11
description: ''
image: ''
tags: ["二分查找"]
category: '算法'
draft: false 
lang: ''
---

### 二分查找

[**4. 寻找两个正序数组的中位数**](https://leetcode.cn/problems/median-of-two-sorted-arrays/)

> 给定两个大小分别为 `m` 和 `n` 的正序（从小到大）数组 `nums1` 和 `nums2`。请你找出并返回这两个正序数组的 **中位数** 。
>
> 算法的时间复杂度应该为 `O(log (m+n))` 。
>
> ----

> **示例 1：**
>
> ```
> 输入：nums1 = [1,3], nums2 = [2]
> 输出：2.00000
> 解释：合并数组 = [1,2,3] ，中位数 2
> ```
>
> **示例 2：**
>
> ```
> 输入：nums1 = [1,2], nums2 = [3,4]
> 输出：2.50000
> 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
> ```
>
> ---



**思路**

这一题我认为最主要的难点就是在时间复杂度`O(log (m+n))`，要求二分查找的情况下，如何在 A 里画一条分割线，在 B 里画一条分割线使得：

1. **左边的元素总个数** 等于 **右边的元素总个数**（如果是奇数，让左边多一个）。
2. **左半边所有的数** 都要 小于 **右半边所有的数**。

因为 A 和 B 本身就是有序的，所以 A 左边的数本来就 小于 右边的数。我们只需要保证的是：

- `A 左边最大的数 <= B 右边最小的数`
- `B 左边最大的数 <= A 右边最小的数`



所以，我们可以像提线木偶般，在短的那个数组进行二分，为了保证左右元素总数各占一半，B 中的切分位置 就自动确定了，最后检查十字交叉条件即可(知道了思路，还是挺简单的)

```go
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    if  len(nums1) > len(nums2) {
        return findMedianSortedArrays(nums2, nums1)
    }

    m, n := len(nums1), len(nums2)
    left, right := 0, m
    totalLeft := (m + n + 1)/2

    for left <= right {
        i := left + (right - left)/2
        j := totalLeft - i

        nums1LeftMax := math.MinInt
        if i > 0 {
            nums1LeftMax = nums1[i-1]
        }

        nums1RightMin := math.MaxInt
        if i < m {
            nums1RightMin = nums1[i]
        }
        
        nums2LeftMax  := math.MinInt
        if j > 0 {
            nums2LeftMax = nums2[j-1]
        }

        nums2RightMin := math.MaxInt
        if j < n {
            nums2RightMin = nums2[j]
        }

        if nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin {
            if (n + m) % 2 == 1 {
                return float64(max(nums1LeftMax, nums2LeftMax))
            }else {
                return float64(max(nums1LeftMax, nums2LeftMax) + min(nums1RightMin,nums2RightMin)) / 2.0
            }
        }else if nums1LeftMax > nums2RightMin {
            right = i - 1
        }else {
            left = i + 1
        }
    }
    return 0.0
}
```

