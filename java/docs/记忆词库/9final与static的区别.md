# final与static的区别

> ### <font color=#337AB7 > 参考答案</font> 

1. 都可以修饰类、方法、成员变量。
2. 都不能用于修饰构造方法。
3. static 可以修饰类的代码块，final 不可以。
4. static 不可以修饰方法内的局部变量，final 可以。
 

### static：

1. static 修饰表示静态或全局，被修饰的属性和方法属于类，可以用类名.静态属性 / 方法名 访问
2. static 修饰的代码块表示静态代码块，当 Java 虚拟机（JVM）加载类时，就会执行该代码块,只会被执行一次
3. static 修饰的属性，也就是类变量，是在类加载时被创建并进行初始化，只会被创建一次
4. static 修饰的变量可以重新赋值
5. static 方法中不能用 this 和 super 关键字
6. static 方法必须被实现，而不能是抽象的abstract
7. static 方法不能被重写
 

### final：

1. final 修饰表示常量、一旦创建不可改变
2. final 标记的成员变量必须在声明的同时赋值，或在该类的构造方法中赋值，不可以重新赋值
3. final 方法不能被子类重写
4. final 类不能被继承，没有子类，final 类中的方法默认是 final 的
 

> ###### final 和 static 修饰成员变量加载过程例子
``` java
import java.util.Random;
 
public class TestStaticFinal {
 
	public static void main(String[] args) {
		StaticFinal sf1 = new StaticFinal();
		StaticFinal sf2 = new StaticFinal();
		
		System.out.println(sf1.fValue == sf2.fValue);//打印false
		System.out.println(sf1.sValue == sf2.sValue);//打印true
	}
}
 
class StaticFinal {
	
	final int fValue = new Random().nextInt();
	static int sValue = new Random().nextInt();
	
}
```