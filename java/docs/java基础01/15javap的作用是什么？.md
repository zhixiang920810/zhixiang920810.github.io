# javap的作用是什么？

> ### <font color=#337AB7 > 参考答案</font> 

### javap 是 Java class文件分解器，可以反编译，也可以查看 java 编译器生成的字节码等。

###### javap 命令参数
```java
javap -help
用法: javap <options> <classes>
其中, 可能的选项包括:
  -help  --help  -?        输出此用法消息
  -version                 版本信息
  -v  -verbose             输出附加信息
  -l                       输出行号和本地变量表
  -public                  仅显示公共类和成员
  -protected               显示受保护的/公共类和成员
  -package                 显示程序包/受保护的/公共类
                           和成员 (默认)
  -p  -private             显示所有类和成员
  -c                       对代码进行反汇编
  -s                       输出内部类型签名
  -sysinfo                 显示正在处理的类的
                           系统信息 (路径, 大小, 日期, MD5 散列)
  -constants               显示静态最终常量
  -classpath <path>        指定查找用户类文件的位置
  -bootclasspath <path>    覆盖引导类文件的位置
 ```

###### 测试类：
```java
public class TestSynchronized {

    public void sync() {
        synchronized (this) {
            System.out.println("sync");
        }
    }
}
 ```

###### 使用命令进行反汇编    javap -c TestSynchronized
```java
警告: 二进制文件TestSynchronized包含constxiong.interview.TestSynchronized
Compiled from "TestSynchronized.java"
public class constxiong.interview.TestSynchronized {
  public constxiong.interview.TestSynchronized();
    Code:
       0: aload_0
       1: invokespecial #8                  // Method java/lang/Object."<init>":()V
       4: return
 
  public void sync();
    Code:
       0: aload_0
       1: dup
       2: astore_1
       3: monitorenter
       4: getstatic     #15                 // Field java/lang/System.out:Ljava/io/PrintStream;
       7: ldc           #21                 // String sync
       9: invokevirtual #22                 // Method java/io/PrintStream.println:(Ljava/lang/String;)V
      12: aload_1
      13: monitorexit
      14: goto          20
      17: aload_1
      18: monitorexit
      19: athrow
      20: return
    Exception table:
       from    to  target type
           4    14    17   any
          17    19    17   any
}
 
```
