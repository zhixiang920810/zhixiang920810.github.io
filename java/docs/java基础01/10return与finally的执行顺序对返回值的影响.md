# return与finally的执行顺序对返回值的影响

> ### <font color=#337AB7 > 参考答案</font> 

### 对于 try 和 finally 至少一个语句块包含 return 语句的情况：

1. finally 语句块会执行
2. finally 没有 return，finally 对 return 变量的重新赋值修改无效
3. try 和 finally 都包含 return，return 值会以 finally 语句块 return 值为准
>###### 如下面的例子
```java
public static void main(String[] args) {
    System.out.println(getString());
}
	
public static String getString() {
    String str = "A";
    try {
        str = "B";
        return str;
    } finally {
        System.out.println("finally change return string to C");
        str = "C";
    }
}
```
>###### 打印
```java
finally change return string to C
B
 ```

>###### finally 语句块中新增 return 语句
```java
public static void main(String[] args) {
    System.out.println(getString());
}

public static String getString() {
    String str = "A";
    try {
        str = "B";
        return str;
    } finally {
        System.out.println("finally change return string to C");
        str = "C";
        return str;
    }
}
```
>###### 打印结果
```java
finally change return string to C
C
```
