# static关键字的作用是什么？


> ### <font color=#337AB7 > 参考答案</font> 

1. static 可以修饰变量、方法、代码块和内部类
2. static 变量是这个类所有，由该类创建的所有对象共享同一个 static 属性
3. 可以通过创建的对象名.属性名 和 类名.属性名两种方式访问
4. static 变量在内存中只有一份
5. static 修饰的变量只能是类的成员变量
6. static 方法可以通过对象名.方法名和类名.方法名两种方式来访问
7. static 代码块在类被第一次加载时执行静态代码块，且只被执行一次，主要作用是实现 static 属性的初始化
8. static 内部类属于整个外部类，而不属于外部类的每个对象，只可以访问外部类的静态变量和方法
