# final finally finalize()区别

> ### <font color=#337AB7 > 参考答案</font> 

1. final 表示最终的、不可改变的。用于修饰类、方法和变量。final 修饰的类不能被继承；final 方法也同样只能使用，不能重写，但能够重载；final 修饰的成员变量必须在声明时给定初值或者在构造方法内设置初始值，只能读取，不可修改；final 修饰的局部变量必须在声明时给定初值；final 修饰的变量是非基本类型，对象的引用地址不能变，但对象的属性值可以改变

2. finally 异常处理的一部分，它只能用在 try/catch 语句中，表示希望 finally 语句块中的代码最后一定被执行（存在一些情况导致 finally 语句块不会被执行，如 jvm 结束）

3. finalize() 是在 java.lang.Object 里定义的，Object 的 finalize() 方法什么都不做，对象被回收时 finalize() 方法会被调用。Java 技术允许使用 finalize() 方法在垃圾收集器将对象从内存中清除出去之前做必要清理工作，在垃圾收集器删除对象之前被调用的。一般情况下，此方法由JVM调用。特殊情况下，可重写 finalize() 方法，当对象被回收的时候释放一些资源，须调用 super.finalize() 。 
