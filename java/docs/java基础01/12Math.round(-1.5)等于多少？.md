# Math.round(-1.5) 等于多少？

> ### <font color=#337AB7 > 参考答案</font> 

### 运行结果： -1

### JDK 中的 java.lang.Math 类

1. ceil() ：向上取整，返回小数所在两整数间的较大值，返回类型是 double，如 -1.5 返回 -1.0

2. floor() ：向下取整，返回小数所在两整数间的较小值，返回类型是 double，如 -1.5 返回 -2.0

3. round() ：朝正无穷大方向返回参数最接近的整数，可以换算为 参数 + 0.5 向下取整，返回值是 int 或 long，如 -1.5 返回 -1
 

> ###### 测试代码：
```java
System.out.println("Math.round(1.4)=" + Math.round(1.4));
System.out.println("Math.round(-1.4)=" + Math.round(-1.4));
System.out.println("Math.round(1.5)=" + Math.round(1.5));
System.out.println("Math.round(-1.5)=" + Math.round(-1.5));
System.out.println("Math.round(1.6)=" + Math.round(1.6));
System.out.println("Math.round(-1.6)=" + Math.round(-1.6));
System.out.println();

System.out.println("Math.ceil(1.4)=" + Math.ceil(1.4));
System.out.println("Math.ceil(-1.4)=" + Math.ceil(-1.4));
System.out.println("Math.ceil(1.5)=" + Math.ceil(1.5));
System.out.println("Math.ceil(-1.5)=" + Math.ceil(-1.5));
System.out.println("Math.ceil(1.6)=" + Math.ceil(1.6));
System.out.println("Math.ceil(-1.6)=" + Math.ceil(-1.6));
System.out.println();

System.out.println("Math.floor(1.4)=" + Math.floor(1.4));
System.out.println("Math.floor(-1.4)=" + Math.floor(-1.4));
System.out.println("Math.floor(1.5)=" + Math.floor(1.5));
System.out.println("Math.floor(-1.5)=" + Math.floor(-1.5));
System.out.println("Math.floor(1.6)=" + Math.floor(1.6));
System.out.println("Math.floor(-1.6)=" + Math.floor(-1.6));
```
> ###### 打印结果：
```java
Math.round(1.4)=1
Math.round(-1.4)=-1
Math.round(1.5)=2
Math.round(-1.5)=-1
Math.round(1.6)=2
Math.round(-1.6)=-2

Math.ceil(1.4)=2.0
Math.ceil(-1.4)=-1.0
Math.ceil(1.5)=2.0
Math.ceil(-1.5)=-1.0
Math.ceil(1.6)=2.0
Math.ceil(-1.6)=-1.0

Math.floor(1.4)=1.0
Math.floor(-1.4)=-2.0
Math.floor(1.5)=1.0
Math.floor(-1.5)=-2.0
Math.floor(1.6)=1.0
Math.floor(-1.6)=-2.0
```