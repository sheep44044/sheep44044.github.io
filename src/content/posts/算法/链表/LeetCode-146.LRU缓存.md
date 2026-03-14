---
title: LeetCode-146.LRU缓存
published: 2026-03-13
description: ''
image: ''
tags: ["链表"]
category: '算法'
draft: false 
lang: ''
---

### 链表

[**146. LRU 缓存**](https://leetcode.cn/problems/lru-cache/)

> 请你设计并实现一个满足 [LRU (最近最少使用) 缓存](https://baike.baidu.com/item/LRU) 约束的数据结构。
>
> 实现 `LRUCache` 类：
>
> - `LRUCache(int capacity)` 以 **正整数** 作为容量 `capacity` 初始化 LRU 缓存
> - `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回 `-1` 。
> - `void put(int key, int value)` 如果关键字 `key` 已经存在，则变更其数据值 `value` ；如果不存在，则向缓存中插入该组 `key-value` 。如果插入操作导致关键字数量超过 `capacity` ，则应该 **逐出** 最久未使用的关键字。
>
> 函数 `get` 和 `put` 必须以 `O(1)` 的平均时间复杂度运行。
>
> ----

> **示例：**
>
> ```
> 输入
> ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
> [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
> 输出
> [null, null, null, 1, null, -1, null, -1, 3, 4]
> 
> 解释
> LRUCache lRUCache = new LRUCache(2);
> lRUCache.put(1, 1); // 缓存是 {1=1}
> lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
> lRUCache.get(1);    // 返回 1
> lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
> lRUCache.get(2);    // 返回 -1 (未找到)
> lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
> lRUCache.get(1);    // 返回 -1 (未找到)
> lRUCache.get(3);    // 返回 3
> lRUCache.get(4);    // 返回 4
> ```
>
> ---



**解法**

思路：这里用map来存储数据，双向链实现先后性

这里的难点是很多的指针的操作，所以我们把它化为多个简单的操作(单纯从逻辑上理解是不难的)

- **`removeNode(node)`**: 把某个节点从链表里抠出来。

  让它前一个节点的 `next` 绕过它，指向它的后一个节点。

​	让它后一个节点的 `prev` 绕过它，指向它的前一个节点。

- **`addToHead(node)`**: 将节点插入到虚拟头节点之后（代表变成了最新使用的数据）。

- **`moveToHead(node)`**:  = 先 `removeNode` (把它从原位置抠出来) + 再 `addToHead` (放到最前面)。

- **`removeTail()`**: 找到最没用的那个节点（就是 `tail.prev`，虚拟尾节点的前一个），把它 `removeNode` 抠出来，并返回这个节点（为了后面能在哈希表里删掉它的 key）。

```go
type DLinkedNode struct {
   key, val int
   pre, next *DLinkedNode
}

type LRUCache struct {
    capacity int
    cache map[int]*DLinkedNode
    head *DLinkedNode
    tail *DLinkedNode
}

func Constructor(capacity int) LRUCache {
    l := LRUCache{
        capacity: capacity,
        cache: map[int]*DLinkedNode{},
        head: &DLinkedNode{},
        tail: &DLinkedNode{},
    }

    l.head.next = l.tail
    l.tail.pre = l.head

    return l
}


func (this *LRUCache) Get(key int) int {
    if node, ok := this.cache[key]; ok {
        this.removeNode(node)
        this.addToHead(node)

        return node.val
    }else {
        return -1
    }
}


func (this *LRUCache) Put(key int, value int) {
    if node, ok := this.cache[key]; ok {
        node.val = value
        this.removeNode(node)
        this.addToHead(node)
    }else {
        node := &DLinkedNode {
            key: key,
            val: value,
        }
        this.cache[key] = node
        this.addToHead(node)

        if len(this.cache) > this.capacity {
            node := this.removeTail()
            delete(this.cache, node.key)
        }
    }
}

func (this *LRUCache) removeNode(node *DLinkedNode) {
    node.pre.next = node.next
    node.next.pre = node.pre
}

func (this *LRUCache) addToHead(node *DLinkedNode) {
    node.pre = this.head
    node.next = this.head.next
    this.head.next.pre = node
    this.head.next = node
}

func (this *LRUCache) removeTail() *DLinkedNode {
    node := this.tail.pre
    node.pre.next = this.tail
    this.tail.pre = node.pre
    return node
}
```

