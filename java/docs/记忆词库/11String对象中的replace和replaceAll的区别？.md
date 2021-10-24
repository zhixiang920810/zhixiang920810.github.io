# String对象中的replace和replaceAll的区别？

> ### <font color=#337AB7 > 参考答案</font> 

### replace方法：支持字符和字符串的替换。
```java
public String replace(char oldChar, char newChar)
 
public String replace(CharSequence target, CharSequence replacement)
``` 

### replaceAll方法：基于正则表达式的字符串替换。
```java
public String replaceAll(String regex, String replacement)
 ```

> ###### 测试代码：
```java
String str = "Hello Java. Java is a language.";
System.out.println(str.replace("Java.", "c++"));//打印 Hello c++ Java is a language.
System.out.println(str.replaceAll("Java.", "c++"));//打印 Hello c++ c++is a language.
```
> ###### 打印结果：
```java
Hello c++ Java is a language.
Hello c++ c++is a language.
```