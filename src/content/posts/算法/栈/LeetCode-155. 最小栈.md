---
title: LeetCode-155. 最小栈
published: 2026-04-15
description: ''
image: ''
tags: ["栈"]
category: '算法'
draft: false 
lang: ''
---

### 栈

[**155. 最小栈**](https://leetcode.cn/problems/min-stack/)

> 设计一个支持 `push` ，`pop` ，`top` 操作，并能在常数时间内检索到最小元素的栈。
>
> 实现 `MinStack` 类:
>
> - `MinStack()` 初始化堆栈对象。
> - `void push(int val)` 将元素val推入堆栈。
> - `void pop()` 删除堆栈顶部的元素。
> - `int top()` 获取堆栈顶部的元素。
> - `int getMin()` 获取堆栈中的最小元素。
>
> ----

> **示例 1:**
>
> ```
> 输入：
> ["MinStack","push","push","push","getMin","pop","top","getMin"]
> [[],[-2],[0],[-3],[],[],[],[]]
> 
> 输出：
> [null,null,null,null,-3,null,0,-2]
> 
> 解释：
> MinStack minStack = new MinStack();
> minStack.push(-2);
> minStack.push(0);
> minStack.push(-3);
> minStack.getMin();   --> 返回 -3.
> minStack.pop();
> minStack.top();      --> 返回 0.
> minStack.getMin();   --> 返回 -2.
> ```
>
> ---



**思路**

最小栈的问题就是如何在把最小值`pop`后知道倒数第二小的值。

 这里的方法是在存储一个`val`的同时存储一个目前为止的最小值，这样把最小值踢了后，还保留最小值存入前的最小值。其他的就没什么了

```go
type item struct {
    val int
    min int
}

type MinStack struct {
    stack []item
}

func Constructor() MinStack {
    return MinStack{
			stack: make([]item, 0),
		}
}

func (this *MinStack) Push(val int)  {
    minVal := val

    if len(this.stack) > 0 {
        curMin := this.stack[len(this.stack)-1].min
        if val > curMin {
            minVal = curMin
        } 
    }

    this.stack = append(this.stack, item{val: val, min: minVal})
}


func (this *MinStack) Pop()  {
    if len(this.stack) > 0 {
        this.stack = this.stack[:len(this.stack)-1]
    }
}


func (this *MinStack) Top() int {
    return this.stack[len(this.stack)-1].val
}


func (this *MinStack) GetMin() int {
    return this.stack[len(this.stack)-1].min
}


/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */
```

