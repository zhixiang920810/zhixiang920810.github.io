# 基本类型和包装类对象使用 == 和 equals进行比较的结果？

> ### <font color=#337AB7 > 参考答案</font> 

### 1. 值不同，使用 ＝＝ 和 equals() 比较都返回 false

### 2. 值相同
##### 使用 ＝＝ 比较：
1. 基本类型 － 基本类型、基本类型 － 包装对象返回 true
2. 包装对象 － 包装对象，非同一个对象（对象的内存地址不同）返回 false；对象的内存地址相同返回 true，如下值等于 100 的两个 Integer 对象（原因是 JVM 缓存部分基本类型常用的包装类对象，如 Integer -128 ~ 127 是被缓存的）
```java
 Integer i1 = 100;
 Integer i2 = 100;
 Integer i3 = 200;
 Integer i4 = 200;
 
         
 System.out.println(i1==i2); //打印true
 System.out.println(i3==i4); //打印false
 ```

##### 使用 equals() 比较

1. 包装对象－基本类型返回 true
2. 包装对象－包装对象返回 true

### 3. 不同类型的对象对比，返回 false

###### JDK1.8，实验代码
```java
byte b1 = 127;
Byte b2 = new Byte("127");
Byte b3 = new Byte("127");
System.out.println("Byte 基本类型和包装对象使用 == 比较 : " + (b1 == b2));
System.out.println("Byte 基本类型和包装对象使用 equals 比较 : " + b2.equals(b1));
System.out.println("Byte 包装对象和包装对象使用 == 比较 : " + (b2 == b3));
System.out.println("Byte 包装对象和包装对象使用 equals 比较 : " + b2.equals(b3));
System.out.println();

short s1 = 12;
Short s2 = new Short("12");
Short s3 = new Short("12");
System.out.println("Short 基本类型和包装对象使用 == 比较 : " + (s1 == s2));
System.out.println("Short 基本类型和包装对象使用 equals 比较 : " + s2.equals(s1));
System.out.println("Short 包装对象和包装对象使用 == 比较 : " + (s2 == s3));
System.out.println("Short 包装对象和包装对象使用 equals 比较 : " + s2.equals(s3));
System.out.println();

char c1 = 'A';
Character c2 = new Character('A');
Character c3 = new Character('A');
System.out.println("Character 基本类型和包装对象使用 == 比较 : " + (c1 == c2));
System.out.println("Character 基本类型和包装对象使用 equals 比较 : " + c2.equals(c1));
System.out.println("Character 包装对象和包装对象使用 == 比较 : " + (c2 == c3));
System.out.println("Character 包装对象和包装对象使用 equals 比较 : " + c2.equals(c3));
System.out.println();

int i1 = 10000;
Integer i2 = new Integer(10000);
Integer i3 = new Integer(10000);
System.out.println("Integer 基本类型和包装对象使用 == 比较 : " + (i1 == i2));
System.out.println("Integer 基本类型和包装对象使用 equals 比较 : " + i2.equals(i1));
System.out.println("Integer 包装对象和包装对象使用 == 比较 : " + (i2 == i3));
System.out.println("Integer 包装对象和包装对象使用 equals 比较 : " + i2.equals(i3));
System.out.println();

long l1 = 1000000000000000L;
Long l2 = new Long("1000000000000000");
Long l3 = new Long("1000000000000000");
System.out.println("Long 基本类型和包装对象使用 == 比较 : " + (l1 == l2));
System.out.println("Long 基本类型和包装对象使用 equals 比较 : " + l2.equals(l1));
System.out.println("Long 包装对象和包装对象使用 == 比较 : " + (l2 == l3));
System.out.println("Long 包装对象和包装对象使用 equals 比较 : " + l2.equals(l3));
System.out.println();

float f1 = 10000.111F;
Float f2 = new Float("10000.111");
Float f3 = new Float("10000.111");
System.out.println("Float 基本类型和包装对象使用 == 比较 : " + (f1 == f2));
System.out.println("Float 基本类型和包装对象使用 equals 比较 : " + f2.equals(f1));
System.out.println("Float 包装对象和包装对象使用 == 比较 : " + (f2 == f3));
System.out.println("Float 包装对象和包装对象使用 equals 比较 : " + f2.equals(f3));
System.out.println();

double d1 = 10000.111;
Double d2 = new Double("10000.111");
Double d3 = new Double("10000.111");
System.out.println("Double 基本类型和包装对象使用 == 比较 : " + (d1 == d2));
System.out.println("Double 基本类型和包装对象使用 equals 比较 : " + d2.equals(d1));
System.out.println("Double 包装对象和包装对象使用 == 比较 : " + (d2 == d3));
System.out.println("Double 包装对象和包装对象使用 equals 比较 : " + d2.equals(d3));
System.out.println();

boolean bl1 = true;
Boolean bl2 = new Boolean("true");
Boolean bl3 = new Boolean("true");
System.out.println("Boolean 基本类型和包装对象使用 == 比较 : " + (bl1 == bl2));
System.out.println("Boolean 基本类型和包装对象使用 equals 比较 : " + bl2.equals(bl1));
System.out.println("Boolean 包装对象和包装对象使用 == 比较 : " + (bl2 == bl3));
System.out.println("Boolean 包装对象和包装对象使用 equals 比较 : " + bl2.equals(bl3));
 ```
###### 运行结果
```java
Byte 基本类型和包装对象使用 == 比较 : true
Byte 基本类型和包装对象使用 equals 比较 : true
Byte 包装对象和包装对象使用 == 比较 : false
Byte 包装对象和包装对象使用 equals 比较 : true
 
Short 基本类型和包装对象使用 == 比较 : true
Short 基本类型和包装对象使用 equals 比较 : true
Short 包装对象和包装对象使用 == 比较 : false
Short 包装对象和包装对象使用 equals 比较 : true
 
Character 基本类型和包装对象使用 == 比较 : true
Character 基本类型和包装对象使用 equals 比较 : true
Character 包装对象和包装对象使用 == 比较 : false
Character 包装对象和包装对象使用 equals 比较 : true
 
Integer 基本类型和包装对象使用 == 比较 : true
Integer 基本类型和包装对象使用 equals 比较 : true
Integer 包装对象和包装对象使用 == 比较 : false
Integer 包装对象和包装对象使用 equals 比较 : true
 
Long 基本类型和包装对象使用 == 比较 : true
Long 基本类型和包装对象使用 equals 比较 : true
Long 包装对象和包装对象使用 == 比较 : false
Long 包装对象和包装对象使用 equals 比较 : true
 
Float 基本类型和包装对象使用 == 比较 : true
Float 基本类型和包装对象使用 equals 比较 : true
Float 包装对象和包装对象使用 == 比较 : false
Float 包装对象和包装对象使用 equals 比较 : true
 
Double 基本类型和包装对象使用 == 比较 : true
Double 基本类型和包装对象使用 equals 比较 : true
Double 包装对象和包装对象使用 == 比较 : false
Double 包装对象和包装对象使用 equals 比较 : true
 
Boolean 基本类型和包装对象使用 == 比较 : true
Boolean 基本类型和包装对象使用 equals 比较 : true
Boolean 包装对象和包装对象使用 == 比较 : false
Boolean 包装对象和包装对象使用 equals 比较 : true
```
