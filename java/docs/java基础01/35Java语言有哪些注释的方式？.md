# Java语言有哪些注释的方式？

> ### <font color=#337AB7 > 参考答案</font> 

###### 1、单行注释
###### 2、多行注释，不允许嵌套
###### 3、文档注释，常用于类和方法的注释

>形式如下：
```java
package constxiong.interview;

/**
 * 文档注释
 * @author ConstXiong
 * @date 2019-10-17 12:32:31
 */
public class TestComments {
    
    /**
     * 文档注释
     * @param args 参数
     */
    public static void main(String[] args) {
        //单行注释
        //System.out.print(1);
        
        /* 多行注释
        System.out.print(2);
        System.out.print(3);
        */
    }

}
``` 

