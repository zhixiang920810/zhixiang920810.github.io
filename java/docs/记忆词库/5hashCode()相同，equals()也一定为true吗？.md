# hashCode()相同，equals()也一定为true吗？

> ### <font color=#337AB7 > 参考答案</font> 

### 首先，答案肯定是不一定。同时反过来 equals() 为true，hashCode() 也不一定相同。

1. 类的 hashCode() 方法和 equals() 方法都可以重写，返回的值完全在于自己定义。
2. hashCode() 返回该对象的哈希码值；equals() 返回两个对象是否相等。
 

### 关于 hashCode() 和 equals() 是方法是有一些 常规协定：

1. 两个对象用 equals() 比较返回true，那么两个对象的hashCode()方法必须返回相同的结果。

2. 两个对象用 equals() 比较返回false，不要求hashCode()方法也一定返回不同的值，但是最好返回不同值，以提高哈希表性能。

3. 重写 equals() 方法，必须重写 hashCode() 方法，以保证 equals() 方法相等时两个对象 hashcode() 返回相同的值。

就像打人是你的能力，但打伤了就违法了。重写 equals 和 hashCode 方法返回是否为 true 是你的能力，但你不按照上述协议进行控制，在用到对象 hash 和 equals 逻辑判断相等时会出现意外情况，如 HashMap 的 key 是否相等。
