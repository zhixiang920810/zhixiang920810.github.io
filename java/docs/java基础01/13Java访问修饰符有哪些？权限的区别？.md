# Java访问修饰符有哪些？权限的区别？

> ### <font color=#337AB7 > 参考答案</font> 

### Java 语言中有四种权限访问控制符，能够控制类中成员变量和方法的可见性。

#### 1. public

    被 public 修饰的成员变量和方法可以在任何类中都能被访问到。
    被 public 修饰的类，在一个 java 源文件中只能有一个类被声明为 public ，而且一旦有一个类为 public ，那这个 java 源文件的文件名就必须要和这个被 public 所修饰的类的类名相同，
    否则编译不能通过。

#### 2.protected
    被 protected 修饰的成员会被位于同一 package 中的所有类访问到，也能被该类的所有子类继承下来。

#### 3. friendly
    默认，缺省的。在成员的前面不写访问修饰符的时候，默认就是友好的。
    同一package中的所有类都能访问。
    被 friendly 所修饰的成员只能被该类所在同一个 package 中的子类所继承下来。
    

private
    私有的。只能在当前类中被访问到。

| 关键字 | 当前类 | 同一package | 子孙类 | 其他package的类 |
| --- | --- | --- | --- | --- |
|public|√|√|√|√|
|protected|√|√|√|×|
|friendly|√|√|×|×|
|private|√|×|×|×|

 



