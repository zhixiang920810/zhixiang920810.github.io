# finally语句块一定执行吗？

> ### <font color=#337AB7 > 参考答案</font> 

### 答案是不一定。存在很多特殊情况导致 finally 语句块不执行。如：

1. 直接返回未执行到 try-finally 语句块

2. 抛出异常未执行到 try-finally 语句块

3. 系统退出未执行到 finally 语句块
等...

###### 代码如下
```java
public static String test() {
    String str = null;
    int i = 0;
    if (i == 0) {
        return str;//直接返回未执行到finally语句块
    }
    try {
        System.out.println("try...");
        return str;
    } finally {
        System.out.println("finally...");
    }
}
 
public static String test2() {
    String str = null;
    int i = 0;
    i = i / 0;//抛出异常未执行到finally语句块
    try {
        System.out.println("try...");
        return str;
    } finally {
        System.out.println("finally...");
    }
}
 
public static String test3() {
    String str = null;
    try {
        System.out.println("try...");
        System.exit(0);//系统退出未执行到finally语句块
        return str;
    } finally {
        System.out.println("finally...");
    }
}

```