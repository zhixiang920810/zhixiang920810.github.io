# ==和equals的区别是什么?

> ### <font color=#337AB7> 参考答案</font> 

1. == 是关系运算符，equals() 是方法，结果都返回布尔值
2. Object 的 == 和 equals() 比较的都是地址，作用相同


### == 作用

1. 基本类型，比较值是否相等

2. 引用类型，比较内存地址值是否相等

3. 不能比较没有父子关系的两个对象

### equals()方法的作用：

1. JDK 中的类一般已经重写了 equals()，比较的是内容

2. 自定义类如果没有重写 equals()，将调用父类（默认 Object 类）的 equals() 方法，Object 的 equals() 比较使用了 this == obj

3. 可以按照需求逻辑，重写对象的 equals() 方法（重写 equals 方法，一般须重写 hashCode 方法）

