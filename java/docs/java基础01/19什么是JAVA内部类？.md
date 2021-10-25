# 什么是JAVA内部类？

> ### <font color=#337AB7 > 参考答案</font> 

### 1、概念
存在于Java类的内部的Java类。

### 2、分类

- **成员内部类**

格式
```java
class OuterClass {
    class InnerClass {} //成员内部类
}
```
编译之后会生成两个class文件：OuterClass.class和OuterClass$InnerClass.class
 
- **方法内部类**

格式
```java
class OuterClass {
    public void doSomething(){
        class Inner{
        }
    }
}
```
编译之后会生成两个class文件：OuterClass.class和OuterClass$1InnerClass.class
只能在定义该内部类的方法内实例化
方法内部类对象不能使用该内部类所在方法的非final局部变量
当一个方法结束，其栈结构被删除，局部变量成为历史。但该方法结束后，在方法内创建的内部类对象可能仍然存在于堆中
 
- **匿名内部类**
**a) 继承式匿名内部类格式**
```java
public class Fish {
    /**
     * 游泳方法
     */
    public void swim() {
        System.out.println("我在游泳!");
    }

    public static void main(String[] args) {
        //创建鱼对象
        Fish fish = new Fish() {
            //重写swim方法
            public void swim() {
                System.out.println("我在游泳，突然发生海啸，我撤了!");
            }
        };
        
        fish.swim();
    }
}
```
编译后生成两个class文件：Fish.class和Fish$1.class


**b) 接口式匿名内部类格式**
```java
interface IFish {
    public void swim();
}

class TestIFish {
    
    public static void main(String[] args) {
        IFish fish = new IFish() {
            @Override
            public void swim() {
                System.out.println("我是一条小丑鱼，我在游泳");
            }
        };
        
        fish.swim();
    }
}
```
编译后生成3个class文件：IFish.class、TestIFish.class和TestIFish$1.class
接口式的匿名内部类是实现了一个接口的匿名类，感觉上实例化了一个接口。


**c) 参数式的匿名内部类**

格式
```java
public class TestCrucian {
    
    public static void main(String[] args) {
        Crucian c = new Crucian();
        c.swim(new IFish() {
            @Override
            public void swim() {
                System.out.println("鲫鱼在河水里游泳！");
            }
            
        });
    }
}

/**
 * 鲫鱼游泳
 * @author handsomX
 * 2018年8月13日上午9:41:01
 */
class Crucian {
    /**
     * 鲫鱼的游泳方法
     * @param fish
     */
    void swim(IFish fish) {
        fish.swim();
    }
}
```
 编译后生成3个class文件：Crucian.class、TestCrucian.class和TestCrucian$1.class
 

- **静态嵌套类**
静态嵌套类，并没有对实例的共享关系，仅仅是代码块在外部类内部
静态的含义是该内部类可以像其他静态成员一样，没有外部类对象时，也能够访问它
静态嵌套类仅能访问外部类的静态成员和方法
在静态方法中定义的内部类也是静态嵌套类，这时候不能在类前面加static关键字

格式
```java
class OuterFish {
    /**
     * 静态嵌套类
     * @author handsomX
     * 2018年8月13日上午10:57:52
     */
    static class InnerFish {
    }
}
class TestStaticFish {
    
    public static void main(String[] args) {
        //创建静态内部类对象
        OuterFish.InnerFish iFish = new OuterFish.InnerFish();
    }
}
 ```

### 3、内部类的作用

1. 内部类提供了某种进入其继承的类或实现的接口的窗口
2. 与外部类无关，独立继承其他类或实现接口
3. 内部类提供了Java的"多重继承"的解决方案，弥补了Java类是单继承的不足
 

### 4、特点

1. 内部类仍然是一个独立的类，在编译之后内部类会被编译成独立的.class文件，但是前面冠以外部类的类名和$符号
2. 内部类不能用普通的方式访问。内部类是外部类的一个成员，因此内部类可以自由地访问外部类的成员变量，无论是否是private的
3. 内部类声明成静态的，就不能随便的访问外部类的成员变量了，此时内部类只能访问外部类的静态成员变量
 

***
> ### <font color=red>推荐：</font>

百度百科-java内部类
https://blog.csdn.net/guyuealian/article/details/51981163

