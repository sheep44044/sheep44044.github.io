---

published: 2025-09-20
draft: false
category: "技术"
tags: ["Golang"]
title: "Golang之接口"

---

# Golang之接口

接口是我在tour of go上遇到的第一个难点，因此我打算再开一篇来着重记录，不仅是当下对此的沉淀与思考，也是对未来的提醒与照应。为了方便自己的查看，便独立于之前的知识碎片。



## 接口（interface）

### 接口的定义

接口（Interface）本质上就是**定义了一组方法签名（Method Signatures）的集合**。它只关心**“做什么”**，而不关心**“怎么做”**。

它规定：**“任何类型，只要你实现了我的合同里规定的所有这些方法，那我就认为你实现了这个接口。”**

每个接口类型由任意个方法签名组成，接口的定义格式如下：

```go
type 接口类型名 interface{
    方法名1( 参数列表1 ) 返回值列表1
    方法名2( 参数列表2 ) 返回值列表2
    …
}
```



### 如何实现接口？（“隐式实现”）

Go 接口的实现是 **“隐式”** 的。这意味着你**不需要**像 Java 那样明确地写 `implements Speaker`。只需要让这个类型拥有接口里规定的所有方法，它就自动实现了该接口！

这是 Go 的哲学——“鸭子类型”（如果它走起来像鸭子，叫起来像鸭子，那它就是鸭子）。



## 接口值

接口也是值。它们可以像其它值一样传递。

接口值可以用作函数的参数或返回值。

接口值可以看作两部分**具体类型**和**该类型的值**。

**可以把接口值想象成一个特殊的“盒子”。**

- 这个盒子上贴着一个**标签**，写着里面装的东西的类型（`*main.Dog`）。
- 盒子里装着**实际的值**（一个 `Dog` 结构体的实例）。

```go
var s Speaker      // 接口变量 s，此时它是一个空的“盒子”，里面是 nil
s = Dog{Name: "Rex"} // 赋值后，s 这个“盒子”里：
                     // - 标签：main.Dog
                     // - 值：{Rex}

fmt.Printf("(%v, %T)\n", s, s) // 输出：({Rex}, main.Dog)
                               // 值部分 和 类型部分
```

当你调用 `s.Speak()` 时，Go 会打开这个“盒子”，根据标签找到类型 `Dog`，然后执行 `Dog` 的 `Speak` 方法。



## 底层值为 nil 的接口值

即便接口内的具体值为 nil，方法仍然会被 nil 接收者调用。保存了 nil 具体值的接口其自身并不为 nil。



## nil 接口值

nil 接口值既不保存值也不保存具体类型。

为 nil 接口调用方法会产生运行时错误，因为接口的元组内并未包含能够指明该调用哪个 **具体** 方法的类型。



## 空接口（interface{}/any）

空接口可保存任何类型的值（因为每个类型都至少实现了零个方法）

空接口被用来处理未知类型的值



**tips**：

**空接口**是一个接口**类型**。因为它没有规定任何方法，所以Go语言规定**所有类型都自动实现了空接口**。

 **nil接口值**指的是一个接口变量的**当前状态是“空”的**。

 **它们之间的关系是正交的：**你可以有一个**空接口类型的nil接口值**，也可以有一个**非空的自定义接口类型的nil接口值**。



## 类型断言

由于接口变量可以持有任意实现它的类型的值，有时我们需要知道它背后具体的实际值是什么。

在 Go 语言中，接口断言是一种检查接口变量是否具有特定具体类型的方法。接口断言的基本语法如下：

```go
value, ok := interfaceVariable.(Type)
```

其中：

- `interfaceVariable` 是一个接口类型的变量
- `Type` 是你想要断言的具体类型
- 如果 `interfaceVariable` 实际上是一个 `Type` 类型的值，那么 `value` 将会被赋值为该值，并且 `ok` 将会是 `true`。如果 `interfaceVariable` 不是 `Type` 类型，那么 `value` 将会是 `Type` 类型的零值，而 `ok` 将会是 `false`
- 对于空接口 `interface{}`，任何类型的值都可以被赋值给它，因此对接口断言的需求更加常见



## 类型选择

**类型选择** 是一种按顺序从几个类型断言中选择分支的结构。

类型选择与一般的 switch 语句相似，不过类型选择中的 case 为类型（而非值）， 它们针对给定接口值所存储的值的类型进行比较。

```go
switch v := i.(type) {
case T:
    // v 的类型为 T
case S:
    // v 的类型为 S
default:
    // 没有匹配，v 与 i 的类型相同
}
```

类型选择中的声明与类型断言 `i.(T)` 的语法相同，只是具体类型 `T` 被替换成了关键字 `type`。



### 多态实现

接口变量可以持有任意实现它的类型的值

**多态（Polymorphism）** 指的是一个接口的调用方式，可以在运行时根据其底层实际类型的不同而表现出不同的行为

**核心思想：** 不同结构体只要实现了相同的接口，它们就可以被当作同一种类型（接口类型）来处理，但在执行接口方法时，会执行各自具体的实现。



**经典例子：**

```go
package main

import "fmt"

// 定义一个支付接口
type Payment interface {
    Pay(amount float64) string
}

// 实现两种不同的支付方式
type Alipay struct {
    Account string
}

func (a Alipay) Pay(amount float64) string {
    return fmt.Sprintf("使用支付宝 %s 支付了 %.2f 元", a.Account, amount)
}

type WechatPay struct {
    OpenID string
}

func (w WechatPay) Pay(amount float64) string {
    return fmt.Sprintf("使用微信 %s 支付了 %.2f 元", w.OpenID, amount)
}

// 一个通用的支付函数，它只关心传入的对象是否实现了 Payment 接口
func ProcessPayment(p Payment, amount float64) {
    result := p.Pay(amount)
    fmt.Println(result)
}

func main() {
    a := Alipay{Account: "zhangsan@alipay.com"}
    w := WechatPay{OpenID: "wx_abcdef123456"}

    // 多态的体现：ProcessPayment 函数不需要知道具体是哪种支付方式
    // 它只需要调用 Pay 方法，而具体执行哪个版本的 Pay，由运行时 p 的实际类型决定
    ProcessPayment(a, 100.5)
    ProcessPayment(w, 200.0)

    // 也可以将不同的实现放入同一个切片（接口类型切片）
    payments := []Payment{a, w}
    for _, payer := range payments {
        ProcessPayment(payer, 50.0)
    }
}
```



**输出：**

```go
使用支付宝 zhangsan@alipay.com 支付了 100.50 元
使用微信 wx_abcdef123456 支付了 200.00 元
使用支付宝 zhangsan@alipay.com 支付了 50.00 元
使用微信 wx_abcdef123456 支付了 50.00 元
```



### Go的"继承"

Go 语言设计者认为传统的类继承（尤其是多重继承）模型复杂且容易出错。因此，Go 彻底摒弃了 `class` 和 `extends` 的概念。

**Go 的“继承”是通过结构体的嵌套（Embedding）来实现的，这本质上是“组合”。**

```go
// “父类”（基类）
type Animal struct {
    name string
}

func (a *Animal) Speak() {
    fmt.Println("我是:", a.name)
}

// “子类”（派生类），通过嵌入 Animal 来“继承”它的字段和方法
type Dog struct {
    Animal        // 嵌入 Animal，实现了组合
    Breed  string // 子类自己的字段
}

// 子类可以重写父类的方法
func (d *Dog) Speak() {
    d.Animal.Speak() // 可以调用“父类”的方法
    fmt.Println("汪汪汪！")
}

func main() {
    d := Dog{
        Animal: Animal{name: "旺财"}, // 初始化嵌入的结构体
        Breed:  "柯基",
    }
    d.Speak()       // 调用子类重写后的方法
    d.Animal.Speak() // 仍然可以显式调用父类的方法
}
```



**这种组合的优势：**

1. **清晰简单**：没有复杂的继承链。
2. **解耦**：`Dog` 和 `Animal` 是两个独立的类型，`Dog` 只是使用了 `Animal` 的功能。
3. **灵活性**：`Dog` 可以轻松组合多个其他结构体（例如 `Pet`）的功能，模拟了“多重继承”，但又没有多重继承的歧义问题。



## 常见的接口

### 1.Stringer

[`fmt`](https://go-zh.org/pkg/fmt/) 包中定义的 [`Stringer`](https://go-zh.org/pkg/fmt/#Stringer) 是最普遍的接口之一。

```go
type Stringer interface {
    String() string
}
```



`Stringer` 是一个可以用字符串描述自己的类型。`fmt` 包（还有很多包）都通过此接口来打印值。



### 2.error

Go 程序使用 `error` 值来表示错误状态。

与 `fmt.Stringer` 类似，`error` 类型是一个内建接口：

```go
type error interface {
    Error() string
}
```

（与 `fmt.Stringer` 类似，`fmt` 包也会根据对 `error` 的实现来打印值。）

通常函数会返回一个 `error` 值，调用它的代码应当判断这个错误是否等于 `nil` 来进行错误处理。

```go
i, err := strconv.Atoi("42")
if err != nil {
    fmt.Printf("couldn't convert number: %v\n", err)
    return
}
fmt.Println("Converted integer:", i)
```



`error` 为 nil 时表示成功；非 nil 的 `error` 表示失败。



### 3.Readers

`io` 包指定了 `io.Reader` 接口，它表示数据流的读取端。

Go 标准库包含了该接口的[许多实现](https://cs.opensource.google/search?q=Read(\w%2B\s[]byte)&ss=go%2Fgo)，包括文件、网络连接、压缩和加密等等。

`io.Reader` 接口有一个 `Read` 方法：

```go
func (T) Read(b []byte) (n int, err error)
```



`Read` 用数据填充给定的字节切片并返回填充的字节数和错误值。在遇到数据流的结尾时，它会返回一个 `io.EOF` 错误。



### 4.Image

[`image`](https://go-zh.org/pkg/image/#Image) 包定义了 `Image` 接口：

```go
package image

type Image interface {
    ColorModel() color.Model
    Bounds() Rectangle
    At(x, y int) color.Color
}
```



**注意:** `Bounds` 方法的返回值 `Rectangle` 实际上是一个 [`image.Rectangle`](https://go-zh.org/pkg/image/#Rectangle)，它在 `image` 包中声明。
