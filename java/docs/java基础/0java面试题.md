# java

## 一、java基础

### 1. JDK和JRE有什么区别
- JDK: Java Development Kit的简称，java 开发工包，提供了java的开发环境和运行环境。
- JRE: Java Runtime Environment的简称, java 运行环境，为java的运行提供了所需环境。
- 具体来说JDK实包含了JRE,同时还包含了编译java源码的编译器javac,还包含了很多java程序调试和分析的工具。简单来说:如果你需要运行java程序，只需安装JRE就可以了，如果你需要编写java程序,需要安装JDK。

### 2. ==和equals的区别是什么?
> ==解读

对于基本类型和引|用类型==的作用效果是不同的,如
下所示:
- 基本类型:比较的是值是否相同;
- 引用类型:比较的是引|用是否相同;

代码示例:
```java
String x = "string";
String y = "string";
string z = new String("string") ;
System.out.printIn(x==y); // true
System. out.println(x==z) ; // false
System. out.println(x.equa1s(y)); // true
System.out.println(x.equals(z)); // true
```

代码解读：因为x和y指向的是同一个引用，所以也是true,而new String()方法则重写开辟了内
存空间，所以==结果为false,而equals比较的一直是值，所以结果都为true。

> equals 解读

equals 本质上就是==,只不过String和Integer等重写了equals方法，把它变成了值比较。看下面的代码就明白了。

首先来看默认情况下equals 比较-一个有相同值的对象，代码如下:
```java
class Cat
    public Cat(String name) {
        this.name = name ;
    }

    private Str ing name;

    public String getName() {
        return name ;
    }
    public void setName(String name){
        this.name = name ;
    }
}
Cat C1 = new Cat("王磊");
Cat c2 = new Cat("王磊");
Sys tem . out. pr intln(C1. equals(c2)); //false
``` 

输出结果出乎我们的意料，竟然是false?这是怎么回事，看了equals源码就知道了，源码如下:
```java
public boolean equals(Object obj) { 
    return (this == obj);
}
``` 
原来equals本质上就是==。

那问题来了，两个相同值的String对象，为什么返回的是true?代码如下:
```java
String s1 = new String("老王" )
String s2 = new String("老王" )
System.out.println(s1. equals(s2)); //true
```
同样的，当我们进入String的equals方法，找到了答案，代码如下:
```java
public boolean equals(Object anObject) { 
    if (this == an0bject) {
        return true ;
    }
    if (an0bject instanceof String) {
        String anotherString = (String)an0bject;
        int n = value.length ;
        if (n == anotherString.value.length){
            char v1[] = value;
            char v2[] = anotherString;
            int i = 0;
            while(n-- != 0){
                if(v[i] != v2[i])
                    return false;
                i++;
        }
        return true ;
    }
    return false;
}
```
原来是String重写了Object 的equals方法,把引用比较改成了值比较。

> #### <font color=red>总结:</font> 
==对于基本类型来说是值比较,对于引用类型来说是比较的是引用;而equals默认情况下是引用比较，只是很多类重新了equals方法，比如String、 Integer 等把它变成了值比较,所以一般情况下equals比较的是值是否相等。
### 3. 两个对象的hashCode()相同，则equals()也一定为 true,对吗?

不对，两个对象的hashCode()相同，equals()不一定true。

代码示例:
```java
String str1 = "通话";
String str1 = "重地";
System.out.println(String.format("str1：%d | str2：%d", str1.hashCode(),str2.hashCode()));
System. out. pr intln(str1.equals(str2));
```
执行的结果:
```java
1. str1: 1179395| str2: 1179395
2. false
```
代码解读:很显然“通话”和“重地”的hashCode()相同，然而equals()则为false, 因为在散列表中,hashCode()相等即两个键值对的哈希值相等，然而哈希值相等，并不一定能得出键值对相等。

### 4. final在java中有什么作用?
- final 修饰的类叫最终类，该类不能被继承。
- final 修饰的方法不能被重写。
- final 修饰的变量叫常量,常量必须初始化，初始化之后值就不能被修改。

### 5. java中的Math.round(-1.5)等于多少?
等于-1，因为在数轴上取值时，中间值(0.5) 向右取整,所以正0.5是往上取整,负0.5是直接舍弃。

### 6.String属于基础的数据类型吗?
String 不属于基础类型，基础类型有8种: byte、boolean、char、 short、 int、 float、 long、double,而String属于对象。

### 7. java中操作字符串都有哪些类?它们之间有什么区别?
操作字符串的类有: String、 StringBuffer、StringBuilder。

String 和StringBuffer、StringBuilder 的**区别**在于String 声明的是不可变的对象，每次操作都会生成新的String对象，然后将指针指向新的String对象,而StringBuffere、StringBuilder可以在原有对象的基
础上进行操作,所以在经常改变字符串内容的情况下最好不要使用String。

StringBuffer是线程安全的，而StringBuilder是非线程安全的，但StringBuilder的性能却高于StringBuffer, 所以在单线程环境下推荐使用StringBuilder, 多线程环境下推荐使用StringBuffer。

### 8. String str="i"与String str=new String("i")一样吗？
不一样，因为内存的分配方式不-一样。String str="i”的方式，java 虚拟机会将其分配到常量池中;而String str=new String(“i")则会被分到堆内存中。

### 9.如何将字符串反转?
使用StringBuilder或者stringBuffer 的reverse()方法。

示例代码:
```java
// StringBuffer reverse
StringBuffer stringBuffer = new StringBuffer();
stringBuffer.append("abcdefg");
System.out.println(stringBuffer.reverse());//gfedcba
// StringBuilder reverse
StringBuilder stringBuilder = new StringBuilder();
stringBuilder.append("abcdefg");
System.out.println(stringBuilder.reverse());//gfedcba
```

### 10. String类的常用方法都有那些?
1. indexOf(): 返回指定字符的索引
1. charAt(): 返回指定索引处的字符。
1. replace(): 字符串替换。
1. trim(): 去除字符串两端空白。
1. split(): 分割字符串,返回一个分割后的字符串数组。
1. getBytes(): 返回字符串的byte类型数组。
1. length): 返回字符串长度。
1. toLowerCase():将字符串转成小写字母。
1. toUpperCase():将字符串转成大写字符。
1. substring):截取字符串。
1. equals(: 字符串比较。

### 11.抽象类必须要有抽象方法吗?
不需要，抽象类不一定非要有抽象方法。

示例代码:
```java
abstract class Cat {
    public static void sayHi() {
        System.out.print1n("hi~");
    }
}
```
上面代码,抽象类并没有抽象方法但完全可以正常运行。

### 12.普通类和抽象类有哪些区别?
- 普通类不能包含抽象方法,抽象类可以包含抽象方法。
- 抽象类不能直接实例化，普通类可以直接实例化。

### 13.抽象类能使用final修饰吗?
不能，定义抽象类就是让其他类继承的，如果定义为final 该类就不能被继承，这样彼此就会产生矛盾，所以final不能修饰抽象类,编辑器也会提示错误信息:

### 14.接口和抽象类有什么区别?
1. 实现:抽象类的子类使用extends来继承;接口必须使用implements来实现接口。
1. 构造函数:抽象类可以有构造函数;接口不能有构造函数。
1. main方法:抽象类可以有main方法,并且我们能运行它;接口不能有main方法。
1. 实现数量:类可以实现很多个接口;但是只能继承一个抽象类。
1. 访问修饰符:接口中的方法默认使用public修饰;抽象类中的方法可以是任意访问修饰符。

### 15. java中IO流分为几种?
1. 按功能来分:输入流(input)、 输出流(output)
1. 按类型来分:字节流和字符流。

字节流和字符流的区别是:字节流按8位传输以字节为单位输入输出数据，字符流按16位传输以字符为单位输入输出数据。
### 16. BIO、NIO、 AIO 有什么区别?
1. BIO: Block IO同步阻塞式 IO,就是我们平常使用的传统IO,它的特点是模式简单使用方便，并发处理能力低。
1. NIO: New 10同步非阻塞IO，是传统IO的升级,客户端和服务器端通过Channel (通道)通讯，实现了多路复用。
1. AIO: Asynchronous IO是NIO的升级,也叫NIO2，实现了异步非堵塞IO，异步IO的操作基于事件和回调机制。

### 17. Files的常用方法都有哪些?
1. Files. exists():检测文件路径是否存在。
1. Files.createFile(): 创建文件。
1. Files.createDirectory): 创建文件夹。
1. Files.delete(): 删除一 个文件或目录。
1. Files.copy): 复制文件。
1. Files.move(): 移动文件。
1. Files.size(): 查看文件个数。
1. Files.read): 读取文件。
1. Files.write(): 写入文件。

## 二、容器

### 18. java容器都有哪些?
常用容器的图录:
![常用容器的图录](../image/容器图.png "常用容器的图录")

### 19. Collection和Collections有什么区别?
1. java.util.Collection 是一个集合接口 (集合类的一个顶级接口)。它提供了对集合对象进行基本操作的通用接口方法。Collection接口在Java 类库中有很多具体的实现。Collection接口的意义是为各种具体的集合提供了最大化的统一操作方式，其直接继承接口有List与Set。
2. Collections则是集合类的一个工具类/帮助类,其中提供了一系列静态方法，用于对集合中元素进行排序、搜索以及线程安全等各种操作。

### 20. List、Set、 Map之间的区别是什么? 
| 比较         | List       | Set          | Map         |
| -----------  | ----------- | ----------- | ----------- |
| 继承接口      | Collection       |    Collection   |       |
| 常见实现类    | AbstractList（其常用子类有ArrayList、LinkedList、Vetor）        |   AbstractSet（其常用子类有AHashSet、LinkedHashSet、TreeSet）    |       |
| 常见方法      | add()、remove()、clear()、get()、contains()、size()       |    add()、remove()、clear()、contains()、size()    |   put()、get()、remove()、clear()、containsKey()、containsValue()  、keySet()、values()、size()    |
| 元素         | 可重复       |    不可重复(用equals()判断)   |   不可重复    |
| 顺序          | 有序       |    无序(实际上由HashCode决定)   |       |
| 线程安全      | Vetor线程安全       |       |   Hashtable线程安全    |

### 21. HashMap和Hashtable有什么区别?
1. hashMap去掉了HashTable的contains方法,但是加上了containsValue () 和containsKey ()方法。
1. hashTable同步的， 而HashMap是非同步的, 效率上比hashTable要高。
1. hashMap允许空键值，而hashTable不允许。

### 22.如何决定使用HashMap还是TreeMap?
对于在Map中插入、删除和定位元素这类操作,HashMap是最好的选择。然而，假如你需要对一个有序的key集合进行遍历，TreeMap是 更好的选择。基于你的collection的大小，也许向HashMap中添加元素会更快，将map换为TreeMap进行有序key的遍历。
### 23.说一下HashMap的实现原理?
HashMap概述: HashMap是 基于哈希表的Map接口的非同步实现。此实现提供所有可选的映射操作，并允许使用nul值和nul键。此类不保证映射的顺序,特别是它不保证该顺序恒久不变。

HashMap的数据结构:在java编程语言中， 最基本的结构就是两种，一个是数组, 另外-一个是模拟指针(引用)，所有的数据结构都可以用这两个基本结构来构造的，HashMap也不例外。HashMap实际 上是一个“链表散列”的数结构，即数组和链表的结合当我们往Hashmap中put元素时，首先根据key的hashcode重新计算hash值,根绝hash值得到这个元素在数组中的位置(下标)，如果该数组在该位置上已经存放了其他元素那么在这个位置上的元素将以链表的形式存放,新加入的放在链头,最先加入的放入链尾，如果数组中该位置没有元素,就直接将该元素放到数组的该位置上。

需要注意Jdk 1.8中对HashMap的实现做了优化，当链表中的节点数据超过八个之后，该链表会转为红黑树来提高查询效率，从原来的O(n)到0(logn)

### 24.说一下HashSet的实现原理?
1. HashSet底层由HashMap实现
1. HashSet的值存放于HashMap的key上
1. HashMap的value统一为PRESENT

### 25. ArrayList和LinkedList的区别是什么?
最明显的区别是ArrayList底层的数据结构是数组,支持随机访问，而LinkedList 的底层数据结构是双向循环链表，不支持随机访问。使用下标访问一个元素，ArrayList 的时间复杂度是O(1)，而LinkedList是O(n)。

### 26.如何实现数组和List 之间的转换?
1. List转换成为数组:调用ArrayList的toArray方法。
1. 数组转换成为List: 调用Arrays的asList方法。

### 27. ArrayList和Vector的区别是什么?
1. Vector是同步的，而ArrayList不是。 然而，如果你寻求在迭代的时候对列表进行改变,你应该使用CopyOnWriteArrayList。
1. ArrayList比Vector快， 它因为有同步，不会过载
1. ArrayList更加通用，因为我们可以使用Collections工具类轻易地获取同步列表和只读列表。

### 28. Array和ArrayList有何区别?
1. Array可以容纳基本类型和对象，而ArrayList只能容纳对象。
1. Array是指定大小的，而ArrayList大小是固定的。
1. Array没有提供ArrayList那么多功能，比如addAll、removeAll和iterator等 。

### 29.在Queue中pol()和remove()有什么区
poll() 和remove()都是从队列中取出一个元素，但是poll()在获取元素失败的时候会返回空,但是remove()失败的时候会抛出异常。

### 30.哪些集合类是线程安全的?
1. vector: 就比arraylist多了个同步化机制(线程安全)，因为效率较低,现在已经不太建议使用。在web应用中，特别是前台页面，往往效率(页面响应速度)是优先考虑的。
1. statck: 堆栈类,先进后出。
1. hashtable: 就比hashmap多了个线程安全。
1. enumeration:枚举，相当于迭代器。

### 31.迭代器Iterator是什么?
迭代器是一种设计模式，它是一个对象， 它可以遍历并选择序列中的对象，而开发人员不需要了解该序列的底层结构。迭代器通常被称为“轻量级”对象,因创建它的代价小。

### 32. Iterator 怎么使用?有什么特点?
Java中的Iterator功能比较简单,并且只能单向移动。

1. 使用方法iterator()要求容器返回一-个Iterator。第一次调用Iterator的next()方法时，它返回序列的第一个元素。 注意: iterator()方法是java.lang.lterable接口，被Collection继承。
1. 使用next()获得序列中的下一个元素。
1. 使用hasNext)检查序列中是否还有元素。
1. 使用remove()将迭代器新返回的元素删除。

Iterator是Java迭代器最简单的实现，为List设计的Listlterator具有更多的功能，它可以从两个方向遍历List,也可以从List中插入和删除元素。

### 33. lterator 和Listlterator 有什么区别?
1. Iterator可用来遍历Set和List集合, 但是Listlterator只能用来遍历List。
1. Iterator对集合只能是前向遍历，Listlterator既可以前向也可以后向。
1. Listlterator实现了lterator接口， 并包含其他的功能，比如:增加元素，替换元素，获取前一个和后一个元素的索引，等等。


## 三、多线程
### 35.并行和并发有什么区别?
1. 并行是指两个或者多个事件在同一时刻发生;而并发是指两个或多个事件在同一时间间隔发生。
1. 并行是在不同实体上的多个事件，并发是在同一实体上的多个事件。
1. 在一台处理器上“同时”处理多个任务，在多台处理器_上同时处理多个任务。如hadoop分布式集群。

> 所以并发编程的目标是充分的利用处理器的每一个核，以达到最高的处理性能。

### 36.线程和进程的区别?
简而言之，进程是程序运行和资源分配的基本单位,一个程序至少有一个进程，一个进程至少有一个线程。进程在执行过程中拥有独立的内存单元，而多个线程共享内存资源，减少切换次数，从而效率更高。线程是进程的一个实体，是cpu调度和分派的基本单位，是比程序更小的能独立运行的基本单位。同一进程中的多个线程之间可以并发执行。

### 37.守护线程是什么?
守护线程(即daemon thread)，是个服务线程，准确地来说就是服务其他的线程。

### 38.创建线程有哪几种方式?
1. 继承Thread类创建线程类
- 定义Thread类的子类， 并重写该类的run方法,该run方法的方法体就代表了线程要完成的任务。因此把run()方法称为执行体。
- 创建Thread子类的实例，即创建了线程对象。
- 调用线程对象的start()方法来启动该线程。
2. 通过Runnable接口创建线程类
- 定义runnable接口的实现类， 并重写该接口的run()方法，该run()方 法的方法体同样是该线程的线程执行体。
- 创建Runnable实现类的实例，并依此实例作为Thread的target来创建Thread对象，该Thread对象才是真正的线程对象。
- 调用线程对象的start()方法来启动该线程。
3. 通过Callable和Future创建线程
- 调用线程对象的start()方法来启动该线程。创建Callable接口的实现类，并实现cal()方法,该cal()方法将作为线程执行体，并且有返回值。
- 调用线程对象的start()方法来启动该线程。创建Callable实现类的实例，使用FutureTask类来包装Callable对象，该FutureTask对象封装 了该Callable对象的call()方法的返回值。
- 调用线程对象的start()方法来启动该线程。使用FutureTask对 象作为Thread对象的target创建并启动新线程。
- 调用线程对象的start()方法来启动该线程。用FutureTask对 象的get()方法来获得子线程执行结束后的返回值。

### 39.说一下runnable和callable有什么区别?
有点深的问题了，也看出一个Java程序员学习知识的广度。
1. Runnable接口中的run(方法的返回值是void,它做的事情只是纯粹地去执行run()方法中的代码而已;
1. Callable接口中的cal()方法是有返回值的，是一个泛型，和Future、 FutureTask配合 可以用来获取异步执行的结果。

### 40.线程有哪些状态?
线程通常都有五种状态，创建、就绪、运行、阻塞和死亡。
1. 创建状态。在生成线程对象，并没有调用该对象的start方法，这是线程处于创建状态。
1. 就绪状态。当调用了线程对象的start方法之后,该线程就进入了就绪状态，但是此时线程调度程序还没有把该线程设置为当前线程，此时处于就绪状态。在线程运行之后，从等待或者睡眠中回来之后，也会处于就绪状态。
1. 运行状态。线程调度程序将处于就绪状态的线程设置为当前线程，此时线程就进入了运行状态，开始运行run函数当中的代码。
1. 阻塞状态。线程正在运行的时候，被暂停,通常是为了等待某个时间的发生(比如说某项资源就绪)之后再继续运行。sleep,suspend, wait等 方法都可以导致线程阻塞。
1. 死亡状态。如果一个线程的run方法执行结束或者调用stop方法后，该线程就会死亡。对于已经死亡的线程，无法再使用start方法令其进入就绪

### 41. sleep()和wait()有什么区别?
1. sleep(): 方法是线程类(Thread) 的静态方法，让调用线程进入睡眠状态，让出执行机会给其他线程，等到休眠时间结束后，线程进入就绪状态和其他线程-起竞争cpu的执行时间。因为sleep()是static静态的方法，他不能改变对象的机锁，当一个synchronized块中调用了'sleep()方法，线程虽然进入休眠，但是对象的机锁没有被释放，其他线程依然无法访问这个对象。
1. wait(): wait()是Object类的方法， 当-一个线程执行到wait方法时，它就进入到一个和该对象相关的等待池，同时释放对象的机锁，使得其他线程能够访问，可以通过notify, notifyAll方 法来唤醒等待的线程
### 42. notify()和notifyAll()有什么区别?
1. 如果线程调用了对象的wait()方法， 那么线程便会处于该对象的等待池中，等待池中的线程不会去竞争该对象的锁。
1. 当有线程调用了对象的notifyAl()方法 (唤醒所有wait线程)或notify()方法(只随机唤醒一个wait线程)，被唤醒的的线程便 会进入该对象的锁池中，锁池中的线程会去竞争该对象锁。也就是说，调用了notify后只要一个线程会由等待池进入锁池，而notifyAll会 将该对象等待池内的所有线程移动到锁池中，等待锁竞争。
1. 优先级高的线程竞争到对象锁的概率大，假若某线程没有竞争到该对象锁，它还会留在锁池中，唯有线程再次调用wait()方法，它才会重新回到等待池中。而竞争到对象锁的线程则继续往下执行，直到执行完了synchronized代码块，它会释放掉该对象锁，这时锁池中的线程会继续竞争该对象锁。

### 43.线程的run()和start()有什么区别?
每个线程都是通过某个特定Thread对象所对应的方法run()来完成其操作的，方法run()称为线程体。通过调用Thread类的start()方法来启动一个线程。

start()方法来启动一个线程，真正实现了多线程运行。这时无需等待run方法体代码执行完毕，可以直接继续执行下面的代码;这时此线程是处于就绪状态，并没有运行。然后通过此Thread类调用方法run()来完成其运行状态，这里方法run()称为线程体，它包含了要执行的这个线程的内容，Run方法运行结束，此线程终止。 然后CPU再调度其它线程。

run()方法是在本线程里的，只是线程里的一个函数,而不是多线程的。如果直接调用run()，其实就相当于是调用了一个普通函数而已，直接待用run()方法必须等待run()方法执行完毕才能执行下面的代码，所以执行路径还是只有一条， 根本就没有线程的特征，所以在多线程执行时要使用start()方法而不是run()方法。

### 44.创建线程池有哪几种方式?
1. newFixedThreadPool(int nThreads)
```
创建一个固定长度的线程池，每当提交一个任务就创建一个线程，直到达到线程池的最大数量，这时线程规模将不再变化，当线程发生未预期的错误而结束时，线程池会补充一个新的线程。
```

1. newCachedThreadPool()
```
创建一个可缓存的线程池，如果线程池的规模超过了处理需求，将自动回收空闲线程，而当需求增加时，则可以自动添加新线程，线程池的规模不存在任何限制。
```
1. newSingleThreadExecutor()
```
这是一个单线程的Executor,它创建单个工作线程来执行任务，如果这个线程异常结束，会创建一个 新的来替代它;它的特点是能确保依照任务在队列中的顺序来串行执行。
```
1. newScheduledThreadPool(int corePoolSize)
```
创建了-个固定长度的线程池，而且以延迟或定时的方式来执行任务，类似于Timer。
```

### 45.线程池都有哪些状态?
线程池有5种状态: Running、 ShutDown、 Stop、Tidying、Terminated。

线程池各个状态切换框架图:
![线程](../image/线程1.png "线程")

### 46.线程池中submit()和execute()方法有什么区别?
1. 接收的参数不一样
1. submit有返回值，而execute没有
1. submit方便Exception处理

### 47.在java程序中怎么保证多线程的运行安全?
线程安全在三个方面体现:
1. 原子性:提供互斥访问，同一时刻只能有一个线程对数据进行操作，(atomic,synchronized) ;
1. 可见性:一个线程对主内存的修改可以及时地被其他线程看到，(synchronized,volatile) ;
1. 有序性:一个线程观察其他线程中的指令执行顺序，由于指令重排序，该观察结果一般杂乱无序，(happens- before原则)。

### 48.多线程锁的升级原理是什么?
在Java中，锁共有4种状态，级别从低到高依次为;无状态锁，偏向锁，轻量级锁和重量级锁状态，这几个状态会随着竞争情况逐渐升级。锁可以升级但不能降级。

锁升级的图示过程:
![线程](../image/线程2.png "线程")

### 49.什么是死锁?
死锁是指两个或两个以上的进程在执行过程中，由于竞争资源或者由于彼此通信而造成的一-种阻塞的现象，若无外力作用，它们都将无法推进下去。此时称，系统处于死锁状态或系统产生了死锁，这些永远在互相等待的进程称为死锁进程。是操作系统层面的一个错误，是进程死锁的简称，最早在1965年由Dijkstra在研究银行家算法时提出的，它是计算机操作系统乃至整个并发程序设计领域最难处理的问题之一。

### 50.怎么防止死锁?
死锁的四个必要条件:
1. 互斥条件:进程对所分配到的资源不允许其他进程进行访问，若其他进程访问该资源，只能等待，直至占有该资源的进程使用完成后释放该资源
1. 请求和保持条件:进程获得一 定的资源之后，又对其他资源发出请求，但是该资源可能被其他进程占有，此事请求阻塞，但又对自己获得的资源保持不放
1. 不可剥夺条件:是指进程已获得的资源，在未完成使用之前，不可被剥夺，只能在使用完后自己释放
1. 环路等待条件:是指进程发生死锁后，若干进程之间形成一种头尾相接的循环等待资源关系

这四个条件是死锁的必要条件，只要系统发生死锁,这些条件必然成立，而只要上述条件之一不满足,就不会发生死锁。

理解了死锁的原因，尤其是产生死锁的四个必要条件，就可以最大可能地避免、预防和解除死锁。

所以，在系统设计、进程调度等方面注意如何不让这四个必要条件成立，如何确定资源的合理分配算法，避免进程永久占据系统资源。

此外，也要防止进程在处于等待状态的情况下占用资源。因此，对资源的分配要给予合理的规划。

### 51. ThreadLocal是什么?有哪些使用场景?
线程局部变量是局限于线程内部的变量，属于线程自身所有，不在多个线程间共享。Java提供ThreadL ocal类来支持线程局部变量，是一种实现线程安全的方式。但是在管理环境下(如 web服务器)使用线程局部变量的时候要特别小心，在这种情况下，工作线程的生命周期比任何应用变量的生命周期都要长。任何线程局部变量一旦在工作完成后没有释放，Java应用就存在内存泄露的风险。

### 52.说一下synchronized底层实现原理?
synchronized可以保证方法或者代码块在运行时，同一时刻只有一个方法可以进入到临界区，同时它还可以保证共享变量的内存可见性。

Java中每一个对象都可以作为锁，这是synchronized实现同步的基础:
1. 普通同步方法，锁是当前实例对象
1. 静态同步方法，锁是当前类的class对象
1. 同步方法块，锁是括号里面的对象

### 53. synchronized和volatile 的区别是什么?
1. volatile本质是在告诉jvm当前变量在寄存器(工作内存)中的值是不确定的，需要从主存中读取; synchronized则是锁定当 前变量，只有当前线程可以访问该变量，其他线程被阻塞住。
1. volatile仅 能使用在变量级别; synchronized则可以使用在变量、方法、和类级别的。
1. volatile仅 能实现变量的修改可见性，不能保证原子性;而synchronized则可 以保证变量的修改可见性和原子性
1. volatile不 会造成线程的阻塞; synchronized可能会造成线程的阻塞。
1. volatile标记的变量不会被编译器优化;synchronized标记的变量可以被编译器优化。

### 54. synchronized和Lock有什么区别?
1. 首先synchronized是java内置关键字，在jvm层面，Lock是个java类;
1. synchronized无法判断是否获取锁的状态，Lock可以判断是否获取到锁;
1. synchronized会自动释放锁(a线程执行完同步代码会释放锁; b线程执行过程中发生异常会释放锁)，Lock需在finally中手工释放锁(unlock()方法释放锁)，否则容 易造成线程死锁;
1. 用synchronized关 键字的两个线程1和线程2,如果当前线程1获得锁，线程2线程等待。如果线程1阻塞，线程2则会-直等待下去，而L ock锁就不一定会等待下去，如果尝试获取不到锁，线程可以不用一直等待就结束了;
1. synchronized的锁可重入、不可中断、非公平，而Lock锁可重入、可判断、可公平(两者皆可) ;
1. Lock锁适合大量同步的代码的同步问题,synchronized锁适合代码少量的同步问题。

### 55. synchronized和ReentrantLock区别是什么?
synchronized是和if、else、 for、 while- 样的关键字，ReentrantLock是类，这是二者的本质区别。既然ReentrantL ock是类，那么它就提供 了比synchronized更多更灵活的特性，可以被继承、可以有方法、可以有各种各样的类变量，ReentrantL ock比synchronized的扩展性体现在几点上:
1. Reentrantl ock可以对获取锁的等待时间进行设置，这样就避免了死锁
1. ReentrantL ock可以获取各种锁的信息
1. ReentrantL ock可以灵活地实现多路通知

另外，二者的锁机制其实也是不一样的:ReentrantL ock底层调用的是Unsafe的park方法加锁，synchronized操作的应该是对象头中markword。

### 56.说一下atomic的原理?
Atomic包中的类基本的特性就是在多线程环境下,当有多个线程同时对单个(包括基本类型及引用类型)变量进行操作时，具有排他性，即当多个线程同.时对该变量的值进行更新时，仅有一个线程能成功,而未成功的线程可以向自旋锁一样，继续尝试，一直等到执行成功。

Atomic系列的类中的核心方法都会调用unsafe类中的几个本地方法。我们需要先知道一个东西就是Unsafe类，全名为: sun.misc.Unsafe, 这个类包含了大量的对C代码的操作，包括很多直接内存分配以及原子操作的调用，而它之所以标记为非安全的，是告诉你这个里面大量的方法调用都会存在安全隐患,需要小心使用，否则会导致严重的后果，例如在通过unsafe分配内存的时候，如果自己指定某些区域可能会导致一些类似C++一样的指针越界到其他进程的问题。

## 四、反射
### 57. 什么是反射?
反射主要是指程序可以访问、检测和修改它本身状态或行为的一种能力。

Java反射:在Java运行时环境中，对于任意一个类,能否知道这个类有哪些属性和方法?对于任意一个对象，能否调用它的任意一个方法。

Java反射机制主要提供了以下功能:
1. 在运行时判断任意一个对象所属的类。
1. 在运行时构造任意一个类的对象 。
1. 在运行时判断任意一个类所具有的成员变量和方法。
1. 在运行时调用任意一个对象的方法。

### 58. 什么是java序列化?什么情况下需要序列化?
&ensp;&ensp;&ensp;&ensp;简单说就是为了保存在内存中的各种对象的状态(也就是实例变量，不是方法)，并且可以把保存的对象状态再读出来。虽然你可以用你自己的各种各样的方法来保存object states,但是Java给你提供一种应该比你自己好的保存对象状态的机制，那就是序列化。

> 什么情况下需要序列化:
1. 当你想把的内存中的对象状态保存到一个文件中或者数据库中时候;
1. 当你想用套接字在网络.上传送对象的时候;
1. 当你想通过RMI传输对象的时候;

### 59.动态代理是什么?有哪些应用?
动态代理:当想要给实现了某个接口的类中的方法,加一些额外的处理。比如说加日志，加事务等。可以给这个类创建一个代理， 故名思议就是创建一个新的类，这个类不仅包含原来类方法的功能，而且还在原来的基础上添加了额外处理的新类。这个代理类并不是定义好的，是动态生成的。具有解耦意义，灵活，扩展性强。

> 动态代理的应用:
1. Spring的AOP
1. 加事务
1. 加权限
1. 加日志

### 60.怎么实现动态代理?
&ensp;&ensp;&ensp;&ensp;首先必须定义一个接口，还要有一个InvocationHandler(将实现接口的类的对象传递给它)处理类。再有一个工具类Proxy(习惯性将其称为代理类，因为调用他的newInstance()可以产生代理对象,其实他只是一个产生代理对象的工具类)。利用到InvocationHandler,拼接代理类源码，将其编译生成代理类的二进制码，利用加载器加载，并将其实例化产生代理对象，最后返回。


## 五、对象拷贝
### 61.为什么要使用克隆?
&ensp;&ensp;&ensp;&ensp;想对一个对象进行处理，又想保留原有的数据进行接下来的操作，就需要克隆了，Java语言中克隆针对的是类的实例。

### 62.如何实现对象克隆?
> 有两种方式:
1. 实现Cloneable接口并重写Object类中的clone()方法;
1. 实现Serializable接口 ，通过对象的序列化和反序列化实现克隆，可以实现真正的深度克隆，代码如下:
```java
import java.io.ByteArrayInputStream;
import java.i0.ByteArray0utputStream;
import java.io.bjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Ser ializable;
public class MyUtil {

    private MyUtil() {

        throw new AssertionError();
    }

    @SuppressWarnings ( "unchecked" )
        public static <T extends Serializa T clone(T obj) throws Exception{
        
        ByteArray0utputStream bout = new ByteArray0utputStream();

        Object0utputStream oos = new Object0utputStream(bout);

        oos.writeObject(obj);

        ByteArrayInputStream bin = new ByteArrayInputStream(bout.toByteArray());

        ObjectInputStream ois = new ObjectInputStream(bin);

        return (T) ois.read0bject();

        //1说明:调用ByteArrayInputStream或ByteArray0utputStream

        //这两个基于内存的流只要垃圾回收器清理对象就能够释放资源，这一点不同于对外部资源（如文件流）
    }
```
下面是测试代码:

```java
import java. io. Serializable;
/**
* 人类
* @author nnngu
*/
class Person implements Serializable{

    private static final long serialVersionUID = -9102017020286042305L;

    private String name;//姓名
    private int age;//年龄
    private Car car;//座驾

    public Person(String name，int age,Car car){
        this.name = name ;
        this.age = age
        this.car = car ;
    }


    public String getName() {
        return name ;
    }


    public void setName(String name) {
        this. name = name ;
    }


    public int getAge() {
        return age
    }

    public void setAge(int age) {
        this.age = age
    }


    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car
    }
    @Override
    public String toString() {
        return "Person [name=" + name + ", age=" + age + ",car=" + car + "]";
    }

}
```
```java
 
/**
* 小汽车类
* @author nnngu
*/
class Car implements Serializable{
private static final long serialVersionUID = -5732017020286042305L;

private String brand ;//品牌
private int maxSpeed//最高
public Car(String brand, int maxSpeed){
    this.brand = brand;
    this.maxSpeed = maxSpeed;
}


public String getBrand() {
    return brand;
}

public void setBrand(String brand)
    this.brand = brand;
}


public int getMaxSpeed() {
    return maxSpeed;
}


public void setMaxSpeed(int maxSpeed){
    this.maxSpeed = maxSpeed;
}

@Override
public String toString() {

    return "Car [brand=" + brand + ",maxSpeed=" + maxSpeed + "]";

}
```
```java
class CloneTest {
    public static void main(String[] args){
        try{
            Person p1 = new Person("郭靖",33,new Car("Benz",300));
            Person p2 = MyUtil.clone(p1);//深度克隆
            p2. getCar().setBrand("BYD");
            //修改克隆的Per son对象p2关联
            //原来的Person对象p1关联的汽
            //因为在克隆Person对象时其关1
            System.out.println(p1);
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}
```
> 注意:基于序列化和反序列化实现的克隆不仅仅是深度克隆，更重要的是通过泛型限定，可以检查出要克隆的对象是否支持序列化，这项检查是编译器完成的，不是在运行时抛出异常，这种是方案明显优于使用Object类clone方法克隆对象。让问题在编译的时候暴露出来总是好过把问题留到运行时。

### 63.深拷贝和浅拷贝区别是什么? 
1. 浅拷贝只是复制了对象的引用地址,两个对象指向同一个内存地址，所以修改其中任意的值，另一个值都会随之变化，这就是浅拷贝(例:assign());
1. 深拷贝是将对象及值复制过来，两个对象修改其中任意的值另一个值不会改变,这就是深拷贝(例: JSON.parse()和JSON.stringify(), 但是此方法无法复制函数类型)


## 六、java Web
### 64. jsp和servlet有什么区别?
1. jsp经编译后就变成了Servlet. (JSP的本质就是Servlet, JVM只能识别java的类，不能识别JSP的代码, Web容器将JSP的代码编译成JVM能够识别的java类)
1. jsp更擅长表现于页面显示，servlet更擅长于逻辑控制
1. servlet中没有内置对象，Jsp中的内置对象都是必须通过HttpServletRequest对象,HttpServletResponse对象以及HttpServlet对象得到。
1. Jsp是Servlet的一种简化，使用Jsp只需要完成程序员需要输出到客户端的内容，Jsp中的Java脚本如何镶嵌到一个类中，由Jsp容器完成。而Servlet则是个完整的Java类，这个类的Service方法用于生成对客户端的响应。

### 65. jsp有哪些内置对象?作用分别是什么?
JSP有9个内置对象:
1. request: 封装客户端的请求,其中包含来自GET或POST请求的参数;
1. response: 封装服务器对客户端的响应;
1. pageContext: 通过该对象可以获取其他对象;
1. session: 封装用户会话的对象;
1. pplication: 封装服务器运行环境的对象;
1. out:输出服务器响应的输出流对象;
1. config: Web应用的配置对象
1. page: JSP页面本身(相当于Java程序中的this)
1. exception:封装页面拋出异常的对象。

### 66.说一下jsp的4种作用域?
JSP中的四种作用域包括page、 request、 session和application， 具体来说:
1. page代表与一个页面相关的对象和属性。
1. request代表与Web客户机发出的一个请求相关的对象和属性。一个请求可能跨越多个页面，涉及多个Web组件;需要在页面显示的临时数据可以置于此作用域。
1. session代表 与某个用户与服务器建立的一次会话相关的对象和属性。跟某个用户相关的数据应该放在用户自己的session中。
1. application代表与整个Web应用程序相关的对象和属性，它实质上是跨越整个Web应用程序,包括多个页面、请求和会话的一个全局作用域。

### 67. session和cookie有什么区别?
1. 由于HTTP协议是无状态的协议，所以服务端需要记录用户的状态时，就需要用某种机制来识具体的用户，这个机制就是Session典型的场景比如购物车，当你点击下单按钮时，由于HTTP协议无状态，所以并不知道是哪个用户操作的，所以服务端要为特定的用户创建了特定的Session,用用于标识这个用户，并且跟踪用户，这样才知道购物车里面有几本书。这个Session是保存在服务端的，有一-个唯一 标识。在服务端保存Session的方法很多，内存、数据库、文件都有。集群的时候也要考虑Session的转移,在大型的网站，一-般会有专门的Session服务器集群，用来保存用户会话，这个时候Session 信息都是放在内存的，使用一些缓存服务比如Memcached之类的来放Session。
1. 思考一下服务端如何识别特定的客户?这个时候Cookie就登场了。每次HTTP请求的时候，客户端都会发送相应的Cookie信息到服务端。实际上大多数的应用都是用Cookie来实现Session跟踪的，第一次创建 Session的时候服务端会在HTTP协议中告诉客户端，需要在Cookie里话ID发送到服务器，我就知道你是谁了。 有人问，如果客户端的浏览器禁用了Cookie怎么办? -般这种情况下，会使用一种叫做URL重写的技术来进行会话跟踪，即每次HTTP交互,URL后面都会被附加上一个诸如sd-xxx这样的参数，服务端据此来识别用户。下，设想你某次登陆过一个网站， 下次登录的时候不想再次输入账号了，怎么办?这个信息可以写到Cookie里面，访问网站的时候，网站页面的脚本可以读取这个信息,就自动帮你把用户名给填了，能够方便一下用户。 这也是Cookie名称的由来，给用户的一点甜头。所以，总结一用来跟踪用户的状态,这个数据可以保存在集群、数据库、文件中; Cookie是客户端保存用户信息的一-种机制，用来记录用户的一些信息,也是实现Session的一种方式。

### 68.说一下session的工作原理?
其实session是一个存在服务器上的类似于一个散列表格的文件。里面存有我们需要的信息，在我们需要用的时候可以从里面取出来。类似于一个大 号的map吧，里面的键存储的是用户的essionid, 用户向服务器发送请求的时候会带上这个sessionid。这时就可以从中取出对应的值了。

### 69.如果客户端禁止cookie能实现session还能用吗?
Cookie与Session，一般认为是两个独立的东西，Session采用的是在服务器端保持状态的方案，而Cookie采用的是在客户端保持状态的方案。但为什么禁用Cookie就不能得到Session呢?因为Session是用SessionID来确定当前对话所对应的服务器Session,而Session ID是通过Cookie来传递的，禁用Cookie相当于失去了Session ID，也就得不到Session了。

假定用户关闭Cookie的情况下使用session，其实途径有以下几种:
1. 设置php.ini配置文件中的“session.use. _trans_ sid=1”，或者编译时打开打开了“-enable -transsid"选项，让PHP自 动跨页传递Session ID。
1. 手动通过URL传值、隐藏表单传递Session ID。
1. 用文件、数据库等形式保存SessionID, 在跨页过程中手动调用。

### 70. spring mvc和struts的区别是什么?
1. **拦截机制的不同**\
Struts2是类级别的拦截，每次请求就会创建一个作用域是原型模式prototype,然后通过setter,getter吧request数据注入到属性。Struts2中 ,Action对应一-个request, response上下文， 在接收参数时，可以通过属性接收，这说明属性参数是让多个方法共享的。Struts2中 Action的-一个方法可以对应一个url,而其类属性却被所有方法共享,这也就无法用注解或其他方式标识其所属方法了，只能设计为多例。SpringMVC是方法级别的拦截，-个方法对应一个Request上下文，所以方法直接基本上是独立的，独享request, response数据 。而每个方法同时又何一个ur对应，参数的传递是直接注入到方法中的，是方法所独有的。处理结果通过ModeMap返回给框架。在Spring整合时，SpringMVC的ControllerBean默认单例模式Singleton,所以默认对所有的请求，只会创建一-个Controller, 有应为没有共享的属性，所以是线程安全的,如果要改变默认的作用域，需要添加@Scope注解修改。
Struts2有自己的拦截Interceptor机制，SpringMVC这是用的是独立的Aop方式，这样导致Struts2的配置文件量还是比SpringMVC大。
1. **底层框架的不同**\
Struts2采用Filter(StrutsPrepareAndExecuteFilter) 实现,SpringMVC (DispatcherServlet) 则采用Servlet实现。Filter在容 器启动之后即初始化;服务停止以后坠毁，晚于Servlet。 Servlet在 是在调用时初始化,先于Filter调用，服务停止后销毁。
1. **性能方面**\
Struts2是类级别的拦截，每次请求对应实例一个新
的Action,需要加载所有的属性值注入，SpringMVC
实现了零配置,由于SpringMVC基于方法的拦截， 有
加载一次单例模式bean注入。所以，SpringMVC开
发效率和性能高于Struts2。
1. **配置方面**\
spring MVC和Spring是无缝的。从这个项目的管理
和安全.上也比Struts2高。

### 71.如何避免sq|注入?
1. PreparedStatement (简单又有效的方法)
1. 使用正则表达式过滤传入的参数
1. 字符串过滤
1. JSP中调用该函数检查是否包函非法字符
1. JSP页面判断代码

### 72.什么是xSs攻击，如何避免?
XSS攻击又称CSS,全称Cross Site Script (跨 站脚本攻击)，其原理是攻击者向有XSS漏洞的网站中输入恶意的HTML代码，当用户浏览该网站时，这段攻击类似于SQL注入攻击，SQL注入攻击中以SQL语句作为用户输入，从而达到查询/修改/删除数据的目的，而在xss攻击中， 通过插入恶意脚本，实现对用户游览器的控制，获取用户的一些信息。XSS是Web程序中常见的漏洞，xSS 属于被动式且用于客户端的攻击方式。

> XSS防范的总体思路是:对输入(和URL 参数)进行过
滤,对输出进行编码。
### 73.什么是CSRF攻击，如何避免?
CSRF(Cross-site request forgery)也被称为one-click attack或者session riding,中文全称是叫跨站请求伪造。一般来说， 攻击者通过伪造用户的浏览器的请求，向访问一个用户自己曾经认证访问过的网站发送出去，使目标网站接收并误以为是用户的真实操作而去执行命令。常用于盗取账号、转账、发送虚假消息等。攻击者利用网站对请求的验证漏洞而实现这样的攻击行为，网站能够确认请求来源于用户的浏览器，却不能验证请求是否源于用户的真实意愿下的操作行为。

> 如何避免:
1. 验证HTTP Referer字段
```
HTTP头中的Referer字段记录了该HTTP请求的来源地址。在通常情况下，访问一个安全受限页面的请求来自于同一个网站，
而如果黑客要对其实施CSRF攻击，他一般只能在他自己的网站构造请求。因此，可以通过验证Referer值来防御CSRF攻击。
```
1. 使用验证码
```
关键操作页面加上验证码，后台收到请求后通过判断验证码可以防御CSRF。但这种方法对用户不太友好。
```
1. 在请求地址中添加token并验证
```
CSRF攻击之所以能够成功，是因为黑客可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于cookie中，因此黑客可以在不知道这些验证信息
的情况下直接利用用户自己的cookie来通过安全验证。要抵御CSRF,关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于cookie之中。可以在HTTP请求中以参数的形式加入
一个随机产生的token,并在服务器端建立一个拦截器 来验证这个token,如果请求中没有token或者token内容不正确，则认为可能是CSRF攻击而拒绝该请求。这种方法要比检查Referer要安全一些
，token可以在用户登陆后产生并放于session之中，然后在每次请求时把token从session 中拿出，与请求中的token进行比对，但这种方法的难点在于如何把token以参数的形式加入请求。
对于GET请求，token将附在请求地址之后，这样URL就变成htt:/?irftoken-tokevalueoe而对于POST请求来说，要在form的最后加上**< input type= "hidden" name="csrftoken"value=" tokenvalue"/>**,这样 就把token以参数的形式加入请求了。
```
1. 在HTTP头中自定义属性并验证
```
这种方法也是使用token并进行验证，和上一种方法不同的是，这里并不是把token以参数的形式置于HTTP请求之中，而是把它放到HTTP头中自定义的属性里。
通过XMLHttpRequest这个类，可以一次性给所有该类请求加上csrftoken这个HTTP头属性，并把token值放入其中。这样解决了上种方法在请求中加入token
的不便，同时，通过XMLHttpRequest请求的地址不会被记录到浏览器的地址栏，也不用担心token会透过Referer泄露到其他网站中去。
```



## 七、异常
### 74. throw和throws的区别?
throws是用来声明一个方法可能抛出的所有异常信息,throws是将异常声明但是不处理,而是将异常往上传，谁调用我就交给准处理。而throw则是指抛出的一个具体的异常类型。

### 75. fnal. fnll fnaize 有什么区别?
1. final可以修饰类、变量、方法,修饰类表示该类不能被继承、修饰方法表示该方法不能被重写、值修饰变量表示该变量是一个常量不能被重新赋
1. fnally般作用在try-catch代码块中, 在处理异常的时候，通常我们将一定要执行的代码方法finally代码块中,示不管是否出现异常， 该代码块都会执行，一般用来存放一些关闭资源的代码。
1. finalize是一个方法，属于Object类的一一个方法，而obet类是所有类的父类,该方法-般由垃圾回收器来调用，当我们调用System的gc()方法的时候，由垃圾回收器调用finalize(),回收垃圾。

### 76. try-catch-finally中哪个部分可以省略?
答: catch 可以省略
> **原因:**

更为严格的说法其实是: try只适合处理运行时异常，try+catch适合处理运行时异常+普通异常。也就是说,如果你只用try去处理普通异常却不加以catch处理，编译是通不过的，因为编译器硬性规定，普通异常如果选择捕获，则必须用catch显示声明以便一步处理。而运行时常在编译时没有如此规定,所以catch可以省略， 你加catch编译器也觉得无可厚非。

理论上，编译器看任何代码都不顺眼，都觉得可能有潜在的问题，所以你即使又使对所有代码加上try,代码在运行期时也只不过是在正常运行的基础上加一层皮。但是你一旦对一段代码加try,就等于显示地承诺编译器，对这段代码可能拋出的异常进行捕获而非向上抛出处理。如果是普通异常，编译器要求必须用Catch捕获以便进一步处理; 如果运行时异常， 捕获然后丢弃并且+finally扫尾处理， 或者加上catch捕获以便进一步处理。

至于加finally,则是在不管有没捕获异常，都要进行的“扫尾”处理。

### 77. tr-catch-finally中,如果catch中return了，finally 还会执行吗?
答:会执行,在return前执行。

代码示例1:
```java
/*
 *java面试题一如果catch里面有return语句，finally里面代码还会执行吗?
 */
public class FinallyDemo2{
    public static void main(String[] args){
        system.out.println(getInt());
    }
    public static int getInt() {
        int a = 10;

        try {
            System.out.println(a / 0);
            a=20;
        }catch(ArithmeticException e){
            a = 30;
            return a;
            /*
            *return a在程序执行到这一步的时候，这里不是return a 而是return 30；这个返回路劲就形成了
            *但是呢，它发现后面还有finally，所以继续执行finally的内容，a=40
            *再次回到以前的路径,继续走return 30,形成返回路劲之后，这里的a就不是a变量了，而是常量30
            */   
        } finally {
            a = 40;
        }
            //return a;
    }
}
```
执行结果: 30

代码示例2:
```java
package com.java_02;
/*
 *java面试题--如果catcha里面有return语句，finally里面的代码还会执行吗？
 */  
public class FinallyDemo2{
    public static void main(String[] args){
        system.out.println(getInt());
    }
    public static int getInt() {
        int a = 10;

        try {
            System.out.println(a / 0);
            a=20;
        }catch(ArithmeticException e){
            a = 30;
            return a;
            /*
            *return a在程序执行到这一步的时候，这里不是return a 而是return 30；这个返回路劲就形成了
            *但是呢，它发现后面还有finally，所以继续执行finally的内容，a=40
            *再次回到以前的路径,继续走return 30,形成返回路劲之后，这里的a就不是a变量了，而是常量30
            */   
        } finally {
            a = 40;
            return a;//如果这样，就又重新形成了一条返回路径，由于只能通过1个return返回，所以这里直接返回40
        }
            //return a;
    }
}
```
执行结果: 40
### 78.常见的异常类有哪些?
1. NllPointerExepin:当应用程序试图访问空对象时，则抛出该异常。
1. SQLException: 提供关于数据，库访问错误或其他错误信息的异常。
1. IndexOutOfBoundsException: 指示某排序索引(例如对数组、字符串或向量的排序)超出范围时抛出。
1. NumbrFomatxeption: 当应用程序试图将字符串转换成-种数值类型但该字符串不能转换为适当格式日，抛出该异常。
1. FileNotFoundException:当试图打开指定路径名表示的文件失败时，抛出此异常。
1. lOException:当发生某种I/O异常时,抛出此异常。此类是失败或中断的I/O操作生成的异常的通用类。
1. ClassCastExeption: 当试图将对象强制转换为不是实例的子类时，抛出该异常。
1. Arytorerxeption:试图将错误类型的对象存储到一个对象数组时时抛出的异常。
1. llAgumentExcetion:抛出的异常表明向方法传递了一个不合法或不正确的参数。
1. ArithmeticException:当出现异常的运算条件时，抛出此异常。例如，一个整数"除以零”时，抛出此类的一个实例。
1. NegtivrsiseException: 如果应用程序试图创建大小为负的数组,则抛出该异常。
1. NoSuchMethodExceptin: 无法找到某- 特定方法时，抛出该异常。
1. SecuriExcepin:由安全管理器抛出的异常，指示存在安全侵犯。
1. UnsupportedOpertionExeptien::当不支持请求的操作时，抛出该异常。
1. RuntimeException:是那些可能在Java虚拟机正常运行期间抛出的出的异常的超类。

## 八、网络
### 79. http响应码301和302代表的是什么?有什么区别?
答: 301, 302都是HTTP状态的编码，都代表着某个URL发生了转移。
> 区别:

1. 301 redirect:301代表永久性转移(PermanentlyMoved)。
1. 302 redirect: 302代表暂时性转移(TemporarilyMoved )。

### 80. forward和redirect的区别?
Forward和Redirect代表了两种请求转发方式:直接转发和间接转发。

1. 直接转发方式(Forward)， 客户端和浏览器只发出一次请求，Servlet、 HTML、 JSP或其它信息资源，由第二个信息资源响应该请求，在请求对象request中， 保存的对象对于每个信息资源是共享。

1. 间接转发方式(Redirect) 实际是两次HTTP请求,服务器端在响应第一次请求的时候，让浏览器再向另外一个URL发出请求,从而达到转发的目的。

举个通俗的例子:
直接转发就相当于:“A找B借钱, B说没有，B去找C借，借到借不到都会把消息传递给A”;间接转发就相当于:“A找B借钱, B说没有，让A去找C借”。

### 81.简述tcp和udp的区别?
1. TCP面向连接(如打电话要先拨号建立连接) ;UDP是无连接的，即发送数据之前不需要建立连接。
1. CP提供可靠的服务。也就是说,通过TCP连接传送的数据，吾侪错，不丢失，不重复，且按序到达；UDP尽最大努力交付，即不保证可靠交付。
1. cp通过校验和，重传控制，序号标识，滑动窗口、确认应答实现可靠传输。如丢包时的重发控制，还可以对次序乱掉的分包进行顺序控制UDP具有较好的实时性，工作效率比TCP高，适用于对高速传输和实时性有较高的通信或广播通
1. 每一条TCP连接只能是点到点的;UDP支持一对一, 一对多，多对一和多对多的交互通信。
1. TCP对系统资源要求较多, UDP对系统资源要求较少。

### 82. tcp为什么要三次握手，两次不行吗?为什么?
为了实现可靠数据传输，TCP协议的通信双方，必须维护一个序列号，以标识发送 出去的数据包中，哪些是已经被对方收到的。三次握手的过程即是通信双方相互告知序列号起始值，并确认对方已经收到了序列号起始值的必经步骤。

如果只是两次握手，至多只有连接 发起方的起始序列号能被确认，另一方选择的序列号则得不到确认。

### 83.说一下tcp粘包是怎么产生的?
1. 发送方产生粘包：\
采用TCP协议传输数据的客户端与服务器经常是保持一个长连接的状态(一次连接发一次数据不存在粘包) ,双方在连接不断开的情况下，可以一直传输数据;但当发送的数据包过于的小时，那么TCP协议默认的会启用Nagle算法，将这些较小的数据包进行合并发送(缓冲区数据发送是一个堆压的过程) ;这个合并过程就是在发送缓冲区中进行的，也就是说数据发送出来它已经是粘包的状态了。
![常用容器的图录](../image/数据包1.png "常用容器的图录")

②.接收方产生粘包
接收方采用TCP协议接收数据时的过程是这样的:数据到底接收方，从网络模型的下方传递至传输层，传输层的TCP协议处理是将其放置接收缓冲区,然后由应用层来主动获取(C语言用recv、read等函数) ;这时会出现一个问题，就是我们在程序中调用的读取数据函数不能及时的把缓冲区中的数据拿出来,而7一个数据又到来并有一部分放入的缓冲区末尾，等我们读取数据时就是一个粘包。(放数据的速度 >应用层拿数据速度)
![常用容器的图录](../image/数据包1.png "常用容器的图录")

### 84. OSI的七层模型都有哪些?
- 应用层:网络服务与最终用户的一个接口。
- 会话层:建立、管理、终止会话。
- 传输层:定义传输数据的协议端口号，以及流控和差错校验。
- 网络层:进行逻辑地址寻址，实现不同网络之间的路径选择。
- 数据链路层:建立逻辑连接、进行硬件地址寻址、差错校验等功能。
- 物理层:建立、维护、断开物理连接。

### 85. get和post请求有哪些区别?
1. LET在浏览器回退时是无害的,而POST会再次提交请求。
1. GET产生的URL地址可以被Bookmark, 而POST不可以。
1. GET请求会被浏览器主动cache，而POST不会 ,除非手动设置。
1. GET请求只能进行url编码,而POST支持多种编码方式。
1. GET请求菜蔬会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
1. GET请求在URL中传送的参数是有长度限制的,而POST没有。（get的长度限制是由于浏览器限制地址的长度）
1. 参数的数据类型，GET只接受ASCI字符，而POST没有限制。
1. GET比POST更不安全，因为参数直接暴露在URL上,所以不能用来传递敏感信息。(post在请求里面也能看到完整信息)
1. GET参数通过URL传递， POST放在Request的body中。

### 86.如何实现跨域?
1. 方式一:图片ping或script标签跨域\
图片ping常 用于跟踪用户点击页面或动态广告曝光次数。

script标签可以得到从其他来源数据，这也是JSONP依赖的根据。

2. 方式二: JSONP跨域\
JSONP (JSON with Padding)是数据格式JSON的一种“使用模式”，可以让网页从别的网域要数据。根据XmlHttpRequest对象受到同源策略的影响，而利用
- 只能使用Get请求
- 不能注册success、error等 事件监听函数，不能很容易的确定JSONP请求是否失败
- JSONP是从其他域中加载代码执行，容易受到跨站请求伪造的攻击，其安全性无法确保。

3. 方式三: CORS\
Cross-Origin Resource Sharing (CORS)跨域资源共享是一份浏览器技术的规范，提供了Web服务从不同域传来沙盒脚本的方法，以避开浏览器的同源策略，确保安全的跨域数据传输。现代浏览器使用CORS在API容器如XMLHttpRequest来减少HTTP请求的风险来源。与JSONP不同，CORS 除了GET要求方法以外也支持其他的HTTP要求。服务器以般需要增加如下响应头的一种或几种:
```java
Access-Control-Allow-Headers: * 
Access-Control-Allow-Headers: POST,GET,OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER,Content-Type 
Access-Control-Allow-Headers: 86400
```

跨域请求默认不会携带Cookie信息，如果 需要携带，请配置下述参数:
```java
"Access-Control-Allow-Credentials": true
//Ajax设置
"withCredentials":true
```

4. 方式四: window.name+iframe\
window.name通过在iframe (一般动态创建i)中加载跨域HTML文件来起作用。然后，<font color=blue>HTML文件将传递给请求者的字符串内容赋值给window.name</font>。然后，请求者可以检索window.name值作为响应。
- iframe标签的跨域能力;
- indow.name属性值在文档刷新后依旧存在的能力(且最大允许2M左右)。

每个iframe都有包裹它的window,而这个window是top window的子窗口。contentWindow属 性返回>元素的Window对象。你可以使用这个Window对象来访问iframe的文档及其内部DOM。
```js
<!-- 
    下述用端口
    10000表示: domainA
    10001表示: domainB
-->
<!-- localhost:10000 -->
<script> 
var iframe = document.createElement('iframe');
iframe.style.display='none';//隐藏

var state = 0; //防止页面无限刷新
iframe.onload = function(){
    if(state == 1){
        console.log(JSON.parse(iframe.contentWindow.name);
        //清除创建的iframe
        iframe.contentWindow.document.write('');
        iframe.contentWindow.close();
        document.body.removeChild(iframe);
    }else if(state == 0){
        state = 1;
        // 加载完成，指向当前域，防止错误(proxy.html为空白页面)
        // Blocked a frame with orign "http://localhost:10000" from accessing a cross-origin frame.
        iframe.contentWindow.location = 'http://localhost:10000/proxy.html';
    }
    iframe.src = 'http://localhost:10000/proxy.html';
    document.body.appendChild(iframe);
</script>
<!-- localhost:10001 -->
<!DOCTYPE html>
...
<script>
    window.name = JSON. stringify({a:1,b:2});
</script>
</html>
```
5. 方式五: window.postMessage()

HTML5新特性，可以用来向其他所有的window对象发送消息。需要注意的是我们必须要保证所有的脚本执行完才发送MessageEvent,如果在函数执行的过程中调用了它,就会让后面的函数超时无法执行。

下述代码实现了跨域存储localStorage
```js
<!-- 
下述用端口
10000表示: domainA
10001表示: domainB
-->
<!-- localhost:10001 -->
<iframe src="http://localhost:10001/msg.html" name = "myPostMessage" style="display:none;">
</iframe>
<script>
function main(){
    LSsetItem('test','Test:' + new Date());
    LSgetItem('test', function(value){
        console.log('value:' + value);
    });
    LSremoveItem('test');
}

var callbacks = {}; 
window.addEventListener('message',function(event){
    if(event.source == frmes['myPostMessage']){
        console.log(event);
        var data = /^localStorage#(\d+)(null)?#[\S\s]*)/.exec(event.data);
        if(data){
            if(callbacks[data[1]){
                callbacks[data[1]](data[2]=='null' ? null : data[3]);
            }
            delete callbacks[data[1]];
        }

    }
},false);

var domain = '*';
//增加
function LSsetItem(key， value){
    var obj = {
        setItem: key,
        value: value
    };
    frames['myPostMessage'].postMessage(JSON.stringify(obj),domain);
}
//获取
function LSgetItem(key, callback) {
    var identifier = new Date().getTime();
    var obj = {
        identifier: identifier,
        getItem: key
    }
    callbacks[identifier] = callback;
    frames['myPostMessage'].postMessage(JSON.stringify(obj),domain);
//删除
function LSremoveItem(key) {
    var obj ={
        removeItem: key
    };
    frames['myPostMessage'].postMessage(JSON.stringify(obj),domain);
}

</script>
<script>
window.addEventListener('message',function(event){
    console.log('Receiver debugging',event);
    if(event.origin == 'http://localhost:10000'){
        var dta = JSON.parse(event.data);
        if('setItem' in data){
            localStorage.setItem(data.setItem,data.value);
        }else if('getItem' in data){
            var gotItem =   localStorage.getItem(data.setItem);
            event.source.postMessage('#localStorage#' + data.identifier + 
             (gotItem === null ? 'null#' : '#' + gotItem);
            )
        }else if('removeItem' in data){
            localStorage.setItem(data.removeItem);
        }
       

    }
},false);
</script>
```
注意Safari-下，会报错:

```JS
<script>
Blocked a frame with origin "http://localhost:10001" from
accessing a frame with origin "http://localhost:10000".
Protocols, domains, and ports must match.
</script>
```

避免该错误，可以在Safari浏览器中勾选开发菜单==>停用跨域限制。或者只能使用服务器端转存的方式实现，因为Safar浏览器默认只支持CORS跨域请求。

6. 方式六:修改document .domain跨子域

前提条件:这两个域名必须属于同-一个基础域名!而且所用的协议，端口都要一致, 否则无法利用document.domain进行跨域，所以只能跨子域在根域范围内，允许把domain属性的值设置为它的上一级域。 例如，在"aaa.xx.com”域内,domain设置为"xxx.com"但不能设置为“xxx.org"或者”com”。
```
1. 现在存在两个域名aaa.xxx.com 和bbb.xxx.com。
2. 由于document.name不一致，无法在aaa下操作bbb的js。
3. 可以在aaa和bbb下通过js将document.name ='xxx.com';
4.设置一致，来达到互相访问的作用。
```

7. 方式七: WebSocket

WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很棒的实现。相关文章,请查看:WebSocket、WebSocket-SockJS需要注意: WebSocket对象不支持DOM 2级事件侦听器，必须使用DOM 0级语法分别定义各个事件。

8. 方式八:代理

同源策略是针对浏览器端进行的限制，可以通过服务器端来解决该问题

DomainA客户端(浏览器) ==> DomainA服务器==> DomainB服务器==> DomainA客户端(浏览器）


### 87.说一下JSONP实现原理?
jsonp即jsontpadding,动态创建script标签,利用script标签的src属 性可以获取任何域下的js脚本,通过这个特性(也可以说漏洞)，服务器端不在返货json格式，而是返回-段调用某个函数的s代码，在src中进行了调用，这样实现了跨域。

## 九、设计模式
### 88.说一下你熟悉的设计模式?
参考:
[https://blog.csdn.net/li1325169021/article/category/8655228](https://blog.csdn.net/li1325169021/category_8655228.html)

### 89.简单工厂和抽象工厂有什么区别?
这个模式本身很简单而且使用在业务较简单的情况下。一般用于小项目或者具体产品很少扩展的情况(这样工厂类才不用经常更改)。

> 它由三种角色组成:

1. 厂类角色:这是本模式的核心，含有一定的商业逻辑和判断逻辑，根据逻辑不同，产生具体的工厂产品。如例子中的Driver类。
1. 象产品角色:它一般是具体产品继承的父类或者实现的接口。由接口或者抽象类来实现。如例中的Car接口。
1. 具体产品角色:工厂类所创建的对象就是此角色的实例。在java中由一个具体类实现，如例子中的Benz、Bmw类。

来用类图来清晰的表示下的它们之间的关系:
![简单工厂](../image/设计模式1.png "简单工厂")

抽象工厂模式:

先来认识下什么是产品族:位于不同产品等级结构中，功能相关联的产品组成的家族。
![抽象工厂模式](../image/设计模式2.png "抽象工厂模式")

图中的BmwCar和BenzCar就是两个产品树(产品层次结构) ;而如图所示的BenzSportsCar和BmwSportsCar就是一个产 品族。他们都可以放到跑车家族中，因此功能有所关联。同理BmwBussinessCar和BenzBusinessCar也是一个产品族。

可以这么说，它和工厂方法模式的区别就在于需要创建对象的复杂程度上。而且抽象工厂模式是三个里面最为抽象、最具一般性的。抽象工厂模式的用意为:给客户端提供一个接口，可以创建多个产品族中的产品对象。

而且使用抽象工厂模式还要满足一下条件:
1. 系统中有多个产品族，而系统一-次只可能消费其中一族产品
1. 同属于同一个产品族的产品以其使用。来看看抽象工厂模式的各个角色(和工厂方法的如出一辙) :
1. 抽象工厂角色:这是工厂方法模式的核心，它与应用程序无关。是具体工厂角色必须实现的接口或者必须继承的父类。在java中它由抽象类或者接口来实现。
1. 具体工厂角色:它含有和具体业务逻辑有关的代码。由应用程序调用以创建对应的具体产品的对象。在java中它由具体的类来实现。
1. 抽象产品角色:它是具体产品继承的父类或者是实现的接口。在java中一般有抽象类或者接口来实现。
1. 具体产品角色:具体工厂角色所创建的对象就是此角色的实例。在java中 由具体的类来实现。

## 十、spring/springmvc
### 90.为什么要使用spring?
1.简介
- 目的:解决企业应用开发的复杂性
- 功能:使用基本的JavaBean代替EJB，并提供了更多的企业应用功能，
- 范围:任何Java应用

简单来说，Spring是一 个轻 量级的控制反转(IoC)和面向切面(AOP)的容器框架。
2. 轻量

从大小与开销两方面而言Spring都是轻量的。完整的Spring框架可以在一个大小只有1MB多的JAR文件里发布。并且Spring所需的处理开销也是微不足道的。此外，Spring是非侵入式的:典型地，Spring应用中的对象不依赖于Spring的特定类。

3. 控制反转
Spring通过一种称作控制反转 (IoC) 的技术促进了松耦合。当应用了IoC,一个对象依赖的其它对象会通过被动的方式传递进来，而不是这个对象自己创建或者查找依赖对象。你可以认为IoC与JNDI相反一不是对象从容器中查找依赖，而是容器在对象初始化时不等对象请求就主动将依赖传递给它。

4. 面向切面
Spring提供了面向切面编程的丰富支持，允许通过分离应用的业务逻辑与系统级服务(例如审计(auditing)和事务(transaction) 管理)进行内聚性的开发。应用对象只实现它们应该做的一-完成业务逻辑一一仅此而已。它们并不负责(甚至是意识)其它的系统级关注点，例如日志或事务支持。

5. 容器
Spring包含并管理应用对象的配置和生命周期，在这个意义上它是一种容器，你可以配置你的每个bean如何被创建一基 于一个可配置原型(prototype)，你的bean可以创建一 个单独的实例或者每次需要时都生成一个新的实例一一以及它们是如何相互关联的。然而，Spring不应该被混同于传统的重量级的EJB容器，它们经常是庞大与笨重的，难以使用。

6. 框架
Spring可以将简单的组件配置、组合成为复杂的应用。在Spring中，应用对象被声明式地组合，典型地是在一个XML文件里。Spring也提供了很多基础功能(事务管理、持久化框架集成等等)，将应用逻辑的开发留给了你。

所有Spring的这些特征使你能够编写更干净、更可管理、并且更易于测试的代码。它们也为Spring中的各种模块提供了基础支持。

### 91.解释一下什么是 aop?
AOP (Aspect-Oriented Programming,面向方面编程)，可以说是OOP (Object-OrientedPrograming，面向对象编程)的补充和完善。0OP引入封装、继承和多态性等概念来建立一种对象层次结构，用以模拟公共行为的一-个集合。当我们需要为分散的对象引入公共行为的时候，00P则显得无能为力。也就是说，00P允许你定义从上到下的关系,但并不适合定义从左到右的关系。例如日志功能。日志代码往往水平地散布在所有对象层次中，而与它所散布到的对象的核心功能毫无关系。对于其他类型的代码，如安全性、异常处理和透明的持续性也是如此。这种散布在各处的无关的代码被称为横切(cross-cutting)代码，在OOP设计中，它导致了大量代码的重复，而不利于各个模块的重用。

而AOP技术则恰恰相反，它利用-种称为“横切”的技术，剖解开封装的对象内部，并将那些影响了多个类的公共行为封装到一一个可重用模块，并将其名为“Aspect”，即方面。所谓“方面”，简单地说，就是将那些与业务无关，却为业务模块所共同调用的逻辑或责任封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可操作性和可维护性。AOP代表的是一个横向的关系，如果说“对象”是一个空心的圆柱体，其中封装的是对象的属性和行为;那么面向方面编程的方法，就仿佛一把利刃，将这些空心圆柱体剖开，以获得其内部的消息。而剖开的切面，也就是所谓的“方面”了。然后它又以巧夺天功的妙手将这些剖开的切面复原，不留痕迹。

使用“横切”技术，AOP把软件系统分为两个部分:核心关注点和横切关注点。业务处理的主要流程是核心关注点，与之关系不大的部分是横切关注点。横切关注点的一个特点是，他们经常发生在核心关注点的多处，而各处都基本相似。比如权限认证、日志、事务处理。Aop的作用在于分离系统中的各种关注点，将核心关注点和横切关注点分离开来。正如Avanade公司的高级方案构架师Adam Magee所说，AOP的核心思想就是“将应用程序中的商业逻辑同对其提供支持的通用服务进行分离。”

### 92.解释一下什么是ioc?
I0C是Inversion of Control的缩写，多数书籍翻译成“控制反转” 。

1996年，Michael Mattson在一篇有 关探讨面向对象框架的文章中，首先提出了IOC这个概念。对于面向对象设计及编程的基本思想，前面我们已经讲了很多了，不再赘述，简单来说就是把复杂系统分解成相互合作的对象，这些对象类通过封装以后，内部实现对外部是透明的，从而降低了解决问题的复杂度，而且可以灵活地被重用和扩展。IOC理论提出的观点大体是这样的:借助于“第三方实现具有依赖关系的对象之间的解耦。如下图:

![spring1](../image/spring1.png "spring1")


大家看到了吧，由于引进了中间位置的“第三方”，也就是IOC容器，使得A、B、C、D这4个对象没有了耦合关系，齿轮之间的传动全部依靠“第三方”了，全部.对象的控制权全部.上缴给“第三方”IOC容器，所以,I0C容器成了整个系统的关键核心，它起到了一种类似“粘合剂”的作用，把系统中的所有对象粘合在一-起.发挥作用，如果没有这个“粘合剂”，对象与对象之间会彼此失去联系，这就是有人把I0C容器比喻成“粘合剂”的由来。

我们再来做个试验:把上图中间的IOC容器拿掉，然后再来看看这套系统:

![spring2](../image/spring2.png "spring2")

我们现在看到的画面，就是我们要实现整个系统所需要完成的全部内容。这时候，A、B、 C、D这4个对象之间已经没有了耦合关系，彼此毫无联系，这样的话，当你在实现A的时候，根本无须再去考虑B、C和D了，对象之间的依赖关系已经降低到了最低程度。所以，如果真能实现I0C容器，对于系统开发而言，这将是一件多么美好的事情，参与开发的每一成员只要实现自己的类就可以了，跟别人没有任何关系!

我们再来看看，控制反转(I0C)到底为什么要起这么个名字?我们来对比一下:

软件系统在没有引入I0C容器之前，如图1所示，对象A依赖于对象B，那么对象A在初始化或者运行到某一点的时候，自己必须主动去创建对象B或者使用已经创建的对象B。无论是创建还是使用对象B，控制权都在自己手上。

软件系统在引入IOC容器之后，这种情形就完全改变了，如图3所示，由于IOC容器的加入，对象A与对象B之间失去了直接联系，所以，当对象A运行到需要对象B的时候，I0C容器会主动创建一个对象B注入到对象A需要的地方。

通过前后的对比，我们不难看出来:对象A获得依赖对象B的过程，由主动行为变为了被动行为，控制权颠倒过来了，这就是“控制反转”这个名称的由来。

### 93. spring有哪些主要模块?
Spring框架至今已集成了20多个模块。这些模块主要被分如下图所示的核心容器、数据访问/集成、Web、AOP (面向切面编程)、工具、 消息和测试模块。
![spring3](../image/spring3.png "spring3")

### 94. spring常用的注入方式有哪些?
Spring通过DI (依赖注入)实现I0C (控制反转),常用的注入方式主要有三种:
1. 构造方法注入
1. setter注 入
1. 基于注解的注入

### 95. spring中的bean是线程安全的吗?
Spring容器中的Bean是否线程安全，容器本身并没有提供Bean的线程安全策略，因此可以说spring容器中的Bean本身不具备线程安全的特性，但是具体还是要结合具体scope的Bean去研究。

### 96. spring支持几种bean的作用域?
当通过spring容器创建一个Bean实例时， 不仅可以完成Bean实例的实例化，还可以为Bean指定特定的作用域。Spring支持 如下5种作用域:
1. singleton: 单例模式，在整个Spring IoC容器中，使用singleton定 义的Bean将只有一个实例
1. prototype: 原型模式，每次通过容器的getBean方法获取prototype定义的Bean时，都将产生一个新的Bean实例
1. equest:对于每次HTTP请求，使用request定义的Bean都将产生一一个新实例，即每次HTTP请求将会产生不同的Bean实例。只有在Web应用中使用Spring时，该作用域才有效
1. session: 对于每次HTTP Session，使用session定义的Bean豆浆产生一个新实例。同样只有在Web应用中使用Spring时，该作用域才有效
1. globalsession: 每个全局的HTTP Session，使用session定义的Bean都将产生一个新实例。典型情况下，仅在使用portlet context的时候有效。同样只有在Web应用中使用Spring时，该作用域才有效

其中比较常用的是singleton和prototype两种作用域。对于singleton作用域的Bean,每次请求该Bean都将获得相同的实例。容器负责跟踪Bean实例的状态，负责维护Bean实例的生命周期行为;如果一个Bean被设置成prototype作用域，程序每次请求该id的Bean，Spring都会新建一个Bean实例， 然后返回给程序。在这种情况下，Spring容 器仅仅使用new关键字创建Bean实例，一旦创建成功，容器不在跟踪实例，也不会维护Bean实例的状态。

如果不指定Bean的作用域，Spring默认使用singleton作用域。Java在 创建Java实例时，需要进行内存申请;销毁实例时，需要完成垃圾回收，这些工作都会导致系统开销的增加。因此，prototype作用域Bean的创建、销毁代价比较大。而singleton作用域的Bean实例一旦创建成功，可以重复使用。因此，除非必要，否则尽量避免将Bean被设置成prototype作用域。

### 97. spring自动装配bean有哪些方式?
Spring容器负责创建应用程序中的bean同时通过ID来协调这些对象之间的关系。作为开发人员，我们需要告诉Spring要创建哪些bean并且如何将其装配到一起。

spring中bean装配有两种方式:
1. 隐式的bean发现机制和自动装配
1. 在java代码或者XML中进行显示配置

当然这些方式也可以配合使用。

### 98. spring事务实现方式有哪些?
1. 编程式事务管理对基于POJO的应用来说是唯一选择。我们需要在代码中调用beginTransaction()、commit()、 rollback()等事务管理相关的方法，这就是编程式事务管理。
1. 基于TransactionProxyFactoryBean的声明式事务管理
1. 基于@Transactional的声明式事务管理
1. 基于Aspectj AOP配置事务

### 99.说一下spring的事务隔离?
事务隔离级别指的是一个事务对数据的修改与另一个并行的事务的隔离程度，当多个事务同时访问相同数据时，如果没有采取必要的隔离机制，就可能发生以下问题:
1. 脏读:一个事务读到另一个事务未提交的更新数据。
1. 幻读:例如第一个事务对一个表中的数据进行了修改，比如这种修改涉及到表中的“全部数据行”。同时，第二个事务也修改这个表中的数据，这种修改是向表中插入“一行新数据”。那么，以后就会发生操作第-一个事务的用户发现表中还存在没有修改的数据行，就好象发生了幻觉一样。
1. 不可重复读:比方说在同一个事务中先后执行两条一模一样的select语句，期间在此次事务中没有执行过任何DDL语句，但先后得到的结果不一致，这就是不可重复读。

### 100.说一下 spring mvc运行流程?
Spring MVC运行流程图:

![spring4](../image/spring4.png "spring4")

Spring运行流程描述:
1. 用户向服务器发送请求，请求被Spring 前端控制Servelt DispatcherServlet捕获;
2. DispatcherServlet对请求URL进行解析，得到请求资源标识符(URI) 。然后根据该URI,调用HandlerMapping获得该Handler配置的所有相关的对象(包括Handler对 象以及Handler对象对应的拦截器)，最后以
HandlerExecutionChain对象的形式返回;
3. DispatcherServlet 根据获得的Handler,选择一个合适的HandlerAdapter; (附注: 如果成功获得HandlerAdapter后，此时将开始执行拦截器的preHandl...)方法)
4. 提取Request中的模型数据，填充Handler入参，开始执行Handler (Controller)。 在填充Handler的入参过程中，根据你的配置，Spring将帮你做一些额外的工作:

> 1、HttpMessageConveter: 将请求消息 (如Json、xml等数据)转换成一个对象，将对象转换为指定的响应信息\
2、数据转换:对请求消息进行数据转换。如String转换成Integer、Double等\
3、数据根式化:对请求消息进行数据格式化。如将字符串转换成格式化数字或格式化日期等\
4、数据验证:验证数据的有效性(长度、格式等)，验证结果存储到BindingResult或Error中

1. Handler执行完成后，向DispatcherServlet返回一个ModelAndView对象;
2. 根据返回的ModelAndView,选择一个适合 的ViewResolver (必须是已经注册到Spring容器中的ViewResolver)返回给DispatcherServlet ;
3. ViewResolver结合Model和View,来渲染视图;
4. 将渲染结果返回给客户端。

### 101. spring mvc有哪些组件?
Spring MVC的核心组件:
1. DispatcherServlet: 中央控制器，把请求给转发到具体的控制类
1. Controller: 具体处理请求的控制器
1. HandlerMapping:映射处理器，负责映射中央处理器转发给controller时的映射策略
1. ModelAndView: 服务层返回的数据和视图层的封装类
1. ViewResolver: 视图解析器，解析具体的视图
1. Interceptors: 拦截器，负责拦截我们定义的请求然后做处理工作

### 102. @RequestMapping的作用是什么?
RequestMapping是一个用来处理 请求地址映射的注解，可用于类或方法上。用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。

RequestMapping注解有六个属性，下面我们把她分成三类进行说明。

value，method:
1. value:指定请求的实际地址，指定的地址可以是URI Template模式(后 面将会说明) ;
1. method:指定请求的method类型，GET、POST、PUT、DELETE等:consumes，produces
1. consumes: 指定处理请求的提交内容类型(Content-Type)， 例如application/json,text/html;
1. produces: 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回;
params, headers
1. params:指定request中 必须包含某些参数值是，才让该方法处理。
1. headers: 指定request中必须包含某些指定的header值，才能让该方法处理请求。

### 103. @Autowired的作用是什么?
[《@Autowired用法详解》:](https://blog.csdn.net/u013257679/article/details/52295106)


## 十一、springBoot/SpringCloud
### 104.什么是spring boot?
在Spring框架这个大家族中，产生了很多衍生框架,比如Spring、SpringMvc框架 等，Spring的核心内容在于控制反转(IOC)和依赖注入(DI),所谓控制反转并非是一种技术， 而是一种思想, 在操作方面是指在spring配置文件中创建，依赖注入即为由spring容器为应用程序的某个对象提供资源，比如引用对象、常量数据等。

SpringBoot是一个框架，一种全新的编程规范，他的产生简化了框架的使用，所谓简化是指简化了Spring众多框架中所需的大量且繁琐的配置文件,所以SpringBoot是一-个服务 于框架的框架，服务范围是简化配置文件。

### 105.为什么要用spring boot?
Spring Boot使编码变简单
1. Spring Boot使配置变简单
1. Spring Boot使部署变简单
1. Spring Boot使监控变简单
1. Spr ing的不足

### 106. spring boot核心配置文件是什么?
Spring Boot提供了两种常用的配置文件:
1. properties文件
1. yml文件

### 107. spring boot配置文件有哪几种类型?它们有什么区别?
Spring Boot提供了两种常用的配置文件，分别是properties文件和yml文件。相对于properties文件而言，yml文件更年轻,也有很多的坑。可谓成也萧何败萧何，yml通过空格来确定层级关系，使配置文件结构跟清晰，但也会因为微不足道的空格而破坏了层级关系。

### 108. spring boot有哪些方式可以实现热部署?
SpringBoot热部署实现有两种方式:
1. 使用spring loaded

在项目中添加如下代码:
```
在pom.xml文件添加依赖包：
<build>
      <plugins>
          <plugin>
                    <!--springBoot编译插件 -->
                 <groupId>org.springframework.boot</groupId>
                 <artifactId>spring-boot-maven-plugin </artifactId>
                 <dependencies>  
               <!--spring热部署 -->  
               <!--该依赖在此处下载不下来，可以放置在build标签外部下载完成后再粘贴进plugin中 -->  
               <dependency>  
                   <groupId>org.springframework</groupId>  
                   <artifactId>springloaded</artifactId>  
                   <version>1.2.4.RELEASE</version>
               </dependency>  
            </dependencies>  
        </plugin>
      </plugins>
</build>
```
添加完毕后需要使用mvn指令运行:

首先找到IDEA中的Edit configurations ,然后进行如下操作: (点击左 上角的”+”,然后选择maven将出现右侧面板，在红色划线部位输入如图所示指令,你可以为该指令命名(此处命名为MvnSpringBootRun))

![热部署设置](../image/springboot1.png "热部署设置")

点击保存将会在IDEA项目运行部位出现，点击绿色箭头运行即可

![热部署设置](../image/springboot2.png "热部署设置")

2. 使用spring-boot-devtools在项目的pom文件中添加依赖:
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring- boot- devtools</artifactId>
</dependency>
```

然后:使用shift+ctrl+alt+”/“(IDEA中的快捷键 )选择"Registry”然后勾选compilerautomake.allow.when.app.running

### 109. jpa和hibernate有什么区别?
1. JPA Java Persistence API，是Java EE 5的标准ORM接口，也是ejb3规范的一部分。
1. Hibernate，当今很流行的ORM框架，是JPA的一个实现，但是其功能是JPA的超集。
1. JPA和hibernate的之间的关系，可以简单理解为JPA是标准接口，Hibernate是实现。那么Hibernate是如何实现与JPA的这种关系的呢。Hibernate主要是通过三个组件来实现的，及hibernate-annotation、hibernate-entitymanager和hibernate-core。
1. ibernate-annotation是 Hibernate支持annotation方式配置的基础，它包括了标准的JPA annotation以及Hibernate自身特殊功能的annotation。
1. hibernate-core是 Hibernate的核心实现，提供了Hibernate所有的核心功能。
1. hibernate-entitymanager实现了标准的JPA,可以把它看成hibernate- core和JPA之间的适配器，它并不直接提供ORM的功能，而是对hibernate-core进行封装，使得Hibernate符合JPA的规范。

### 110.什么是spring cloud?
从字面理解，Spring Cloud就是致力于分布式系统、云服务的框架。

Spring Cloud是整个Spring家族中新的成员,是最近云服务火爆的必然产物。

Spring Cloud为开发人员提供了快速构建分布式系统中一些常见模式的工具,例如:
1. 配置管理
1. 服务注册与发现
1. 断路器
1. 智能路由
1. 服务间调用
1. 负载均衡
1. 微代理
1. 控制总线
1. 一次性令牌
1. 全鋦锁
1. 领导选举
1. 分布式会话
1. 集群状态
1. 分布式消息

使用Spring Cloud开发人员可以开箱即用的实现这些模式的服务和应用程序。这些服务可以任何环境下运行，包括分布式环境，也包括开发人员自己的笔记本电脑以及各种托管平台。

### 111. spring cloud断路器的作用是什么?
在Spring Cloud中使用了Hystrix来实现断路器的功能，断路器可以防止一个应用程序多次试图执行-一个操作，即很可能失败,允许它继续而不等待故障恢复或者浪费CPU周期，而它确定该故障是持久的。断路器模式也使应用程序能够检测故障是否已经解决,如果问题似乎已经得到纠正，应用程序可以尝试调用操作。

断路器增加了稳定性和灵活性，以一个系统，提供稳定性，而系统从故障中恢复,并尽量减少此故障的对性能的影响。它可以帮助快速地拒绝对一-个操作,即很可能失败，而不是等待操作超时(或者不返回) 的请求，以保持系的响应时间。如果断路器提高每次改变状态的时间的事件，该信息可以被用来监测由断路器保护系统的部件的健康状况，或以提醒管理员当断路器跳闸，以在打开状态。

### 112. spring cloud的核心组件有哪些?
1. 服务发现一-Netflix Eureka

一个RESTful服务， 用来定位运行在AWS地区(Region)中的中间层服务。由两个组件组成:Eureka服务器和Eureka客户端。Eureka服务器用作服务注册服务器。Eureka客 户端是一个java客户端，用来简化与服务器的交互、作为轮询负载均衡器，并提供服务的故障切换支持。Netflix在其生产环境中使用的是另外的客户端，它提供基于流量、资源利用率以及出错状态的加权负载均衡。

2. 客服端负载均衡一Netflix Ribbon 

Ribbon,主要提供客户侧的软件负载均衡算法。Ribbon客户端组件提供一系列完善的配置选项，比如连接超时、重试、重试算法等。Ribbon内置可插拔、可定制的负载均衡组件。

3. 断路器——Netflix Hystrix

断路器可以防止一个应用程序多次试图执行一个操作，即很可能失败,允许它继续而不等待故障恢复或者浪费CPU周期，而它确定该故障是持久的。断路器模式也使应用程序能够检测故障是否已经解决。女果问题似乎已经得到纠正，应用程序可以尝试调用操作。

4. 服务网关——Netflix Zuul
类似nginx，反向代理的功能，不过netflix自己增加了一些配合其他组件的特性。

5. 分布式配置——Spring Cloud Config
这个还是静态的，得配合Spring Cloud Bus实现动态的配置更新。

## 十二、Hibernate
### 113.为什么要使用hibernate?
1. 对JDBC访问数据库的代码做了封装，大大简化了数据访问层繁琐的重复性代码。
1. Hibernate是一个基于JDBC的主流持久化框架,是一个优秀的ORM实现。他很大程度的简化DAO层的编码工作
1. hibernate使用Java反射机制，而不是字节码增强程序来实现透明性。
1. hibernate的性能非常好，因为它是个轻量级框架。映射的灵活性很出色。它支持各种关系数据库，从一对一到多对多的各种复杂关系。

### 114.什么是ORM框架?
对象-关系映射(Object-Relational Mapping,简称ORM)，面向对象的开发方法是当今企业级应用开发环境中的主流开发方法，关系数据库是企业级应用环境中永久存放数据的主流数据存储系统。对象和关系数据是业务实体的两种表现形式，业务实体在内存中表现为对象，在数据库中表现为关系数据。内存中的对象之间存在关联和继承关系，而在数据库中，关系数据无法直接表达多对多关联和继承关系。因此，对象-关系映射(ORM)系统一般以中间件的形式存在，主要实现程序对象到关系数据库数据的映射。

### 115. hibernate中如何在控制台查看打印的sq|语句?
参考:
[blog.csdn.net/Randy Wang/article/details/7946030](blog.csdn.net/Randy Wang/article/details/7946030)

### 116. hibernate有几种查询方式?
1. hql查询
1. sq|查询
1. 条件查询

```java
hql查询，sql查询， 条件查询
HQL: Hibernate Query Language. 面向对象的写法：
Query query = session. createQuery("from Customer where name=?");
query.setParameter(0，"苍老师");
Query.list();

QBC: Query By Criteria. (条件查询)
Criteria criteria = session. createCriteria(Customer.class);
criteria.add(Restrictions.eq( "name","花姐"));
List<Customer> list = criteria.list();

 SQL:
 SQLQuery query = session. createSQLQuery("select * from customer");
 List<0bject[]> list = query.list();

 SQLQuery query = session. createSQLQuery("select * from customer");
 query.addEntity(Customer.class);
 List<Customer> list = query.list();

 Hql:具体分类
1、属性查询 2、参数查询、命名参数查询 3、关联查询 4、分页查询  5、统计函数
 HQL和SQL的区别
 HQL是面向对象查询操作的，SQL是结构化查询语言 是面向数据库表结构
```

### 117. hibernate实体类可以被定义为final 吗?
可以将Hibernate的实体类定义为final类,但这种做法并不好。因为Hibernate会使 用代理模式在延迟关联的情况下提高性能，如果你把实体类定义成final类之后，因为Java不允许对final类进行扩展，所以Hibernate就无法再使用代理了，如此一来就限制了使用可以提升性能的手段。不过，如果你的持久化类实现了一个接口而且在该接口中声明了所有定义于实体类中的所有public的方法轮到话,你就能够避免出现前面所说的不利后果。

### 118.在hibernate中使用Integer和int做映射有什么区别?
在Hibernate中，如果将OID定义为Integer类型，那么Hibernate就可以根据其值是否为null而判断一个对象是否是临时的，如果将OID定义为了int类型，还需要在hbm映射文件中设置其unsaved-value属性为0。

### 119. hibernate是如何工作的?
hibernate工作原理:
1. 通过Configuration config = new Configuration().configure();//读取并解析hibernate.cfg.xml配置文件
2. 由hibernate.cfg.xml中的<mapping resource="com/xx/User.hbm.xml*/> 读取并解析映射信息
3. 通过SessionFactory sf = config.buildSessionFactory;//创建SessionFactory
4. Session session = sf.openSession);//打开Sesssion
5. Transaction tx = session.beginTransaction();//创建并启动事务Transation
6. persistent operate 操作数据，持久化操作
7. tx.commit();//提交事务
8. 关闭Sesstion
9. 关闭SesstionFactory

### 120. get()和load()的区别?
1. load() 没有使用对象的其他属性的时候，没有SQL延迟加载
1. get()没有使用对象的其他属性的时候，也生成了SQL立即加载

### 121.说一下hibernate的缓存机制?
Hibernate中的缓存分为一级缓存和二级缓存。

一级缓存就是Session 级别的缓存，在事务范围内有效是,内置的不能被卸载。二级缓存是SesionFactory级别的缓存，从应用启动到应用结束有效。是可选的，默认没有二级缓存，需要手动开启。保存数据库后，缓存在内存中保存一份, 如果更新了数据库就要同步更新。

什么样的数据适合存放到第二级缓存中?

1. 很少被修改的数据 帖子的最后回复时间
1. 经常被查询的数据 电商的地点
1. 不是很重要的数据，允许出现偶尔并发的数据
1. 不会被并发访问的数据
1. 常量数据

扩展: hibernate的二 级缓存默认是不支持分布式缓存的。使用memcahe,redis等中央缓存来代替二级缓。

### 122. hibernate对象有哪些状态?
hibernate里对象有三种状态:
1. Transient (瞬时) :对象刚new出来，还没设id，设了其他值。
2. Persistent (持久) :调用了save()、saveOrUpdate()，就变成Persistent,有id。
3. etached (脱管) :当session close()完之后,变成Detached。

> 对象状态一完整版

![hibernate](../image/hibernate1.png "hibernate")


## 十三、Mybais
### 125. mybatis中#{}和${}的区别是什么?
1. #{}是预编译处理，${} 是字符串替换;
2. Mybatis在处理#{}时，会将sq1中的#{}替换为?号,调用PreparedStatement方法来赋值;
3. Mybatis在处理${}时， 就是把${}替换成变量的值；
4. 使用#{}可以有效的防止SQL注入，提高系统安全性。

### 126. mybatis有几种分页方式?
1. 数组分页
2. sql分页
3. 拦截器分页
4. RowBounds分页

### 128. mybatis逻辑分页和物理分页的区别是什么?
1. 物理分页速度上并不一定快于逻辑分页，逻辑分页速度上也并不一定快于物理分页。
2. 物理分页总是优于逻辑分页:没有必要将属于数据库的压力加储到应用端来，就算速度上存在优势,然而其它性能上的优点足以弥补这个缺点。

### 129. mybatis是否支持延迟加载?延迟加载的原理是什么? 
Mybatis仅支持association关联对象和collection关联集合对象的延迟加载，association指的就是一对一，collection指的就是一对多查询。在Mybatis配置文件中，可以配置是否启用延迟加载
lazyLoadingEnabled=true|false。

它的原理是，使用CGLIB创建目标对象的代理对象,当调用目标方法时，进入拦截器方法，比如调用a.getB().getName()，拦截器invoke()方 法发现a.getB()是null值，那么就会单独发送事先保存好的查询关联B对象的sql,把B查询上来,然后调用a.setB(b)，于是a的对象b属性就有值了，接着完成a.getB().getName()方 法的调用。这就是延迟加载的基本原理。

当然了，不光是Mybatis,几乎所有的包括Hibernate,支持延迟加载的原理都是一样的。

### 130.说一下 mybatis 的一-级缓存和二级缓存?
一级缓存: 基于PerpetualCache的HashMap本地缓存，其存储作用域为Session,当Session flush或close之后，该Session中的所有Cache就将清空,默认打开一级缓存。二级缓存与一级缓存其机制相同，默认也是采用
PerpetualCache，HashMap 存储，不同在于其存储作用域为Mapper(Namespace),并且可自定义存储源，如Ehcache。默认不打开二级缓存，要开启二级缓存，使用二级缓存属性类需要实现Serializable序列化接口(可用来保存对象的状态)，可在它的映射文件中配置;

对于缓存数据更新机制，当某一个作用域(一级缓存Session/二级缓存Namespaces)的进行了C/U/D操作后，默认该作用域下所有select中的缓存将被clear。

### 131. mybatis和hibernate的区别有哪些?
Mybatis有三种基本的执行器(Executor):
```
SimpleExecutor: 每执行-次update或select,用完立刻关闭Statement对象。
ReuseExecutor: 执行update或select，以sql作为key查找Statement对象，存在就使用，不存在就创建，用完后，不关闭Statement对象，不关闭Statement对象，而是放置于Map内，供下一次使用。简言之，就是重复使用Statement对象。
BatchExecutor: 执行update (没有select, JDBC批处理不支持select),将所有的sql都添加到批处理中(addBatch()) ，等待统一执行(executeBatch()),它缓存了多个Statement对象，每个Statement对象都是addBatch()完毕后，等待逐一执行executeBatch()批处理。
与JDBC批处理相同。
```

### 133. mybatis分页插件的实现原理是什么?
分页插件的基本原理是使用Mybatis提供的插件接口，实现自定义插件,在插件的拦截方法内拦截待执行的sql,然后重写sql,根据dialect方言 ，添加对应的物理分页语句和物理分页参数。

### 134. mybatis如何编写-一个自定义插件?
Mybatis自定义插件针对Mybatis四大对象(Executor、StatementHandler、ParameterHandler、ResultSetHandler) 进行拦截，具体拦截方式为:
1. Executor: 拦截执行器的方法(log记录)
2. StatementHandler :拦截Sq|语法 构建的处理
3. ParameterHandler :拦截参数的处理
4. ResultSetHandler :拦截结果集的处理
前两种应用较为广泛。

Mybatis自定义插件必须实现Interceptor接口:

```java
public interface Interceptor {
    object intercept(Invocation invocation) throws Throwable;
    0bject plugin(0bject target);
    void setProperties(Properties proprties);
}
```

intercept方法:拦截器具体处理逻辑方法

plugin方法:根据签名signatureMap生成动态代理对像

setProperties方法:设置Properties属性

自定义插件demo:
```java
// ExamplePlugin.java
@Intercepts({@Signature(
type= Executor.class,
method = "update",
args = {MappedStatement.class,object class})})
public class ExamplePlugin implements Interceptor{
    public 0bject intercept(Invocation invocation) throws Throwable {
        0bject target = invocation. getTarget();//被代理对象
        Method method = invocation. getMethod();//代理方法
        Object[] args = invocation. getArgs();//方法
        // do something ...方法拦截前执行代码块
        Object result = invocation. proceed();
        // do something ...方法拦截后执行代码块
        return result;
    }
    public object plugin(Object target){
        return Plugin.wrap(target,this);
    }

    public void setProperties(Properties  properties){

    }
}
```
一个@Intercepts可以配置多个@Signature,@Signature中的参数定义如下:
1. type:表示拦截的类,这里是Executor的实现类
1. method:表示拦截的方法，这里是拦截Executor的
1. update方法
1. args:表示方法参数原

## 十四、RabbitMQ
### 135. rabbitmq的使用场景有哪些?
1. 跨系统的异步通信，所有需要异步交互的地方都可以使用消息队列。就像我们除了打电话(同步) 以外,还需要发短信，发电子邮件(异步)的通讯方式。
2. 多个应用之间的耦合，由于消息是平台无关和语言无关的，而且语义上也不再是函数调用，因此更适合作为多个应用之间的松耦合的接口。基于消息队列的耦合，不需要发送方和接收方同时在线。在企业应用集成(EAI) 中，文件传输，共享数据库，消息队列，远程过程调用都可以作为集成的方法。
3. 应用内的同步变异步，比如订单处理，就可以由前端应用将订单信息放到队列，后端应用从队列里依次获得消息处理，高峰时的大量订单可以积压在队列里慢慢处理掉。由于同步通常意味着阻塞，而大量线程的阻塞会降低计算机的性能。
4. 消息驱动的架构(EDA)， 系统分解为消息队列,和消息制造者和消息消费者，一个处理流程可以根据需要拆成多个阶段(Stage) ，阶段之间用队列连接起来，前一-个阶段处理的结果放入队列，后-个阶段从队列中获取消息继续处理。
5. 应用需要更灵活的耦合方式，如发布订阅，比如可以指定路由规则。
6. 跨局域网，甚至跨城市的通讯(CDN行业)，比如北京机房与广州机房的应用程序的通信。

### 136. rabbitmq有哪些重要的角色?
RabbitMQ中重要的角色有:生产者、消费者和代理:
1. 生产者: 消息的创建者，负责创建和推送数据到消息服务器；
1. 消费者:消息的接收方，用于处理数据和确认消息;
1. 代理:就是RabbitMQ 本身，用于扮演"快递”的角色，本身不生产消息，知识扮演“快递”的角色。

### 137. rabbitmq有哪些重要的组件?
1. ConnectionFactory (连接管理器) :应用程序与Rabbit之间建立连接的管理器，程序代码中使用。
2. Channel (信道) :消息推送使用的通道。
3. Exchange (交换器) :用于接受、分配消息。
4. Queue (队列) :用于存储生产者的消息。
5. RoutingKey (路由键) :用于把生成者的数据分配到交换器上。
6. BindingKey (绑定键) :用于把交换器的消息绑定到队列上。

### 138. rabbitmq中vhost的作用是什么?
vhost可以理解为虚拟broker，即mini-RabbitMQserver。其内部均含有独立的queue、exchange 和binding等，但最最重要的是，其拥有独立的权限系统，可以做到vhost范围的用户控制。当然，从RabbitMQ的全局角度, vhost 可以作为不同权限隔离的手段(一个典型的例子就是不同的应用可以跑在不同的vhost中)。

### 139. rabbitmq的消息是怎么发送的?
首先客户端必须连接到RabbitMQ服务器才能发布和消费消息，客户端和rabbit server之间会创建一个tcp连接，一旦tcp打开并通过了认证(认证就是你发送给rabbit服务器的用户名和密码)，你的客户端和RabbitMQ就创建了一条 amqp信道(channel)，信道是创建在“真实”tcp.上的虚拟连接, amqp命令都是通过信道发送出去的，每个信道都会有一个唯一的id,不论是发布消息,订阅队列都是通过这个信道完成的。

### 140. rabbitmq怎么保证消息的稳定性?
1. 提供了事务的功能。
2. 通过将channel 设置为confirm (确认)模式。

### 141. rabbitmq怎么避免消息丢失?
1. 消息持久化
1. ACK确认机制
1. 设置集群镜像模式
1. 消息补偿机制

### 142.要保证消息持久化成功的条件有哪些?
1. 声明队列必须设置持久化durable 设置为true
1. 消息推送投递模式必须设置持久化，deliveryMode 设置为2（持久）。
1. 消息已经到达持久化交换器。
1. 消息已经到达持久化队列。

以上四个条件都满足才能保证消息持久化成功。

### 143. rabbitmq持久化有什么缺点?
持久化的缺地就是降低了服务器的吞吐量,因为使用的是磁盘而非内存存储，从而降低了吞吐量。可尽量使用ssd硬盘来缓解吞吐量的问题。

### 144. rabbitmq有几种广播类型?
三种广播模式:
1. fanout:所有bind到此exchange的queue都可以接收消息（纯广播，绑定到RabbitMQ的接受者都能收到消息）；
1. direct:通过routingKey和exchange决定的那个唯一的queue可以接收消息；
1. topic:所有符合rout ingKey(此时可以是一一个表过
### 145. rabbitmq怎么实现延迟消息队列?
1. 通过消息过期后进入死信交换器，再由交换器转发到延迟消费队列，实现延迟功能；
2. 使用RabbitMQ-delayed-message-exchange插件实现延迟功能。

### 146. rabbitmq集群有什么用?
集群主要有以下两个用途:

1. 高可用:某个服务器出现问题，整个RabbitMQ 还可以继续使用；
1. 高容量:集群可以承载更多的消息量。

### 147. rabbitmq节点的类型有哪些?
1. 磁盘节点:消息会存储到磁盘。
1. 内存节点:消息都存储在内存中，重启服务器消息丢失，性能高于磁盘类型；

### 148. rabbitmq集群搭建需要注意哪些问题?
1. 各节点之间使用”--link”连接，此属性不能忽略。
1. 各节点使用的erlang cookie值必须相同，此值相当于“秘钥”的功能，用于各节点的认证。
1. 整个集群中必须包含一个磁盘节点。

### 149. rabbitmq每个节点是其他节点的完整拷贝吗?为什么?
不是，原因有以下两个:

1. 存储空间的考虑:如果每个节点都拥有所有队列的完
1. 性能的考虑:如果每条消息都需要完整拷贝到每一一个

### 150. rabbitmq集群中唯一一个磁盘节 点崩溃了会发生什么情况?
如果唯一磁盘的磁盘节 点崩溃了，不能进行以下操作:
1. 不能创建队列
1. 不能创建交换器
1. 不能创建绑定
1. 不能添加用户
1. 不能更改权限
1. 不能添加和删除集群节点

唯一磁盘节点崩溃了，集群是可以保持运行的,但你不能更改任何东西。

### 151.rabbitmq对集群节点停止顺序有要求吗?
RabbitMQ对集群的停止的顺序是有要求的，应该先关闭内存节点，最后再关闭磁盘节点。如果顺序恰好相反的话，可能会造成消息的丢失。

## 十五、Kafka
### 152. kafka可以脱离zookeeper单独使用吗?为什么?
kafka不能脱离zookeeper单独使用，因为kafka使用zookeeper管理和协调kafka的节点服务器。

### 153.kafka有几种数据保留的策略?
kafka有两种数据保存策略:按照过期时间保留和按照存储的消息大小保留。

### 154.kafka同时设置了7天和10G清除数据,到第五天的时候消息达到了10G,这个时候kafka将如何处理?
这个时候kafka会执行数据清除工作，时间和大小不论那个满足条件，都会清空数据。

### 155.什么情况会导致kafka运行变慢?
1. cpu性能瓶颈
2. 磁盘读写瓶颈
3. 网络瓶颈

### 156.使用kafka集群需要注意什么?
1. 集群的数量不是越多越好，最好不要超过7个，因为节点越多，消息赋值需要的事件就越长，整个群组的吞吐量就越低。
2. 集群数量最好是单数，因为超过一半故障集群就不能用了，设置为单数容错率更高。

## 十六、Zookeeper
### 157. zookeeper是什么?
zookeeper是一个分布式的，开放源码的分布式应用程序协调服务，是google chubby的开源实现，是hadoop和hbase的重要组件。它是-个为分布式应用提供一致性服务的软件，提供的功能包括:配置维护、域名服务、分布式同步、组服务等。

### 158. zookeeper都有哪些功能?
1. 集群管理:监控节点存活状态、运行请求等。
2. 主节点选举:主节点挂掉了之后可以从备用的节点开
3. 分布式锁: zookeeper 提供两种锁:独占锁、共享
4. 命名服务:在分布式系统中，通过使用命名服务，客
### 159. zookeeper有几种部署模式?
zookeeper有三种部署模式:
1.单机部署:一台集群上运行;
2.集群部署:多台集群运行;
3.伪集群部署:一台集群启动多个zookeeper 实例运行。

### 160. zookeeper怎么保证主从节点的状态同步?
zookeeper的核心是原子广播，这个机制保证了各个server之间的同步。实现这个机制的协议叫做zab协议。zab 协议有两种模式，分别是恢复模式(选主)和广播模式(同步)。当服务启动或者在领导者崩溃后，zab就进入了恢复模式，当领导者被选举出来，且大多数server完成了和leader的状态同步以后，恢复模式就结束了。状态同步保证了leader和server具有相同的系统状态。

### 161.集群中为什么要有主节点?
在分布式环境中，有些业务逻辑只需要集群中的某一台机器进行执行，其他的机器可以共享这个结果，这样可以大大减少重复计算，提高性能，所以就需要主节点。

### 162.集群中有3台服务器，其中一-个节点宕机，这个时候zookeeper还可以使用吗?
可以继续使用，单数服务器只要没超过一半的服务器宕机就可以继续使用。

### 163.说一下zookeeper的通知机制?
客户端端会对某个znode建立一个watcher事件,当该znode发生变化时，这些客户端会收到zookeeper的通知，然后客户端可以根据znode变化来做出业务上的改变。


## 十七、Mysql
### 164.数据库的三范式是什么?
1. 第一范式:强调的是列的原子性，即数据库表的每一列都是不可分割的原子数据项。
2. 第二范式:要求实体的属性完全依赖于主关键字。所谓完全依赖是指不能存在，仅依赖主关键字一部分的属性。
3. 第三范式:任何非主属性不依赖于其它非主属性。

### 165.一张自增表里面总共有7条数据，删除了最后2条数据，重启mysql数据库，又插入了一条数据，此时id是几?
1. 表类型如果是InnoDB, 那id就是6。
2. 表类型如果是MyISAM，那id就是8。

一张表 里面有ID自增主键，当insert了 17条记录之后，删除了第15,16,17条记录，再把mysq|重启，再insert一条记录，这条记录的ID是18还是15？

> 一般情况下，我们创建的表的类型是InnoDB,如果新增一条记录(不重启mysq|的情况下) ，这条记录的id是18; 但是如果重启(文中提到的) MySQL的话，这条记录的ID是15。因为InnoDB表只把自增主键的最大ID记录到内存中，所以重启数据库或者对表OPTIMIZE操作，都会使最大ID丢失。但是，如果我们使用表的类型是MySAM,那么这条记录的ID就是18。因为MyISAM表 会把自增主键的最大ID记录到数据文件里面,重启MYSQL后，自增主键的最大
ID也不会丢失。
>> 注:如果在这17条记录里面删除的是中间的几个记录(比如删除的是10,11,12三条记录)， 重启MySQL数据库后，insert-条记录后，ID都是18。因为内存或者数据库文件存储都是自增主键最大ID

### 166.如何获取当前数据库版本?
使用select version()获取当前MySQL数据库版本。

### 167.说一下ACID是什么?
1. Atomicity (原子性) : 一个事务(transaction) 中的所有操作，或者全部完成，或者全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被恢复(Rollback) 到事务开始前的状态，就像这个事务从来没有执行过一样。即，事务不可分割、7可约简。Consistency(一致性) :在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设约束、触发器、级联回滚等。
1. Csolation (隔离性) :数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。 事务隔离分为不同级别，包括读未提交(Read uncommitted)、读提交(read committed)、可重复读(repeatable read)和串行化(Serializable)。
1. Durability (持久性) :事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。

### 168. char和varchar的区别是什么?
1. char(n) :固定长度类型，比如订阅char(10),当你输入”abc"三个字符的时候，它们占的空间还是10个字节，其他7个是空字节。
1. chat优点:效率高;缺点:占用空间;适用场景:存储密码的md5值，固定长度的，使用char非常合适。
1. varchar(n):可变长度,存储的值是每个值占用的字节再加上一个用来记录其长度的字节的长度。
1. 所以,从空间上考虑varcahr比较合适;从效率上考虑char比较合适，二者使用需要权衡。

### 169. float和double的区别是什么?
1. float 最多可以存储8位的十进制数，并在内存中占4字节。
2. double 最可可以存储16位的十进制数，并在内中占8字节。

### 170. mysql的内连接、左连接、右连接有什么区别?
内连接关键字: inner join;左连接: left join;右连接: right join。

内连接是把匹配的关联数据显示出来;左连接是左边的表全部显示出来,右边的表显示出符合条件的数据;右连接正好相反。

### 171. mysq|索引是怎么实现的?
索引是满足某种特定查找算法的数据结构，而这些数据结构会以某种方式指向数据，从而实现高效查找数据。

具体来说MySQL中的索引，不同的数据引擎实现有所不同，但目前主流的数据库引擎的索引都是B+树实现的，B+ 树的搜索效率,可以到达二分法的性能，找到数据区域之后就找到了完整的数据结构了,所有索引的性能也是更好的。

### 172.怎么验证mysql的索引是否满足需求?
使用explain查看SQL是如何执行查询语句的，从而分析你的索引是否满足需求。

explain语法: explain select * from table where type=1。

### 173.说一下数据库 的事务隔离?
MySQL的事务隔离是在MySQL.ini配置文件里添加的，在文件的最后添加: transaction-isolation =REPEATABLE-READ

可用的配置值: READ-UNCOMMITTED、 READ-COMMITTED、REPEATABLE-READ、SERIALIZABLE。

1. READ-UNCOMMITTED: 未提交读，最低隔离及别、事务未提交前， 就可被其他事务读取(会出现幻读、脏读、不可重复读),
1. READ-COMMITTED: 提交读,一个事务提交后才能被其他事务读取到(会造成幻读、 不可重复读)
1. REPEATABLE-READ:可重复读,默认级别，保证多次读取同一个数据时，其值都和事务开始时候的内容是一致， 禁止读取到别的事务未提交的数据(会造成幻读)。
1. SERIALIZABLE:序列化，代价最高最可靠的隔离级别，该隔离级别能防止脏读、不可重复读、幻读。脏读:表示一个事务能够读取另-个事务中还未提交的数据。比如，某个事务尝试插入记录A,此时该事务还未提交，然后另一个事务尝试读取到了记录不可重复读:是指在一个事务内， 多次读同一数据幻读:指同一个事务内多次查询返回的结果集不一样。比如同一个事务A第一次查询时候有 n条记录,但是第二次同等条件下F查询却有n+1条记录,这就好像产生了幻觉。发生幻读的原因也是另外一个事务新增或者删除或者修改了第-个事务结果集里面的数据，同一个记录的数据内容被修改了，所有数据行的记录就变多或者变少了。

### 174.说一下mysql常用的引擎?
InnoDB引擎: InnoDB 引擎提供了对数据库acid事务的支持，并且还提供了行级锁和外键的约束，它设计的目标就是处理大数据容量的数据库系统。MySQL运行的时候，InnoDB 会在内存中建立缓冲池，用于缓冲数据和索引。但是该引擎是不支持全文搜索，同时启动也比较的慢，它是不会保存表的行数的，所以当进行select count(*) from table指令的时候，需要进行扫描全表。由于锁的粒度小，写操作是不会锁定全表的,所以在并发度较高的场景下使用会提升效率的。

MyIASM引擎: MySQL 的默认引擎,但不提供事务的支持，也不支持行级锁和外键。因此当执行插入和更新语句时，即执行写操作的时候需要锁定这个表,所以会导致效率会降低。不过和InnoDB不同的是，MyIASM引擎是保存了表的行数，于是当进行select count(*) from table语句时，可以直接的读取已经保存的值而不需要进行扫描全表。所以，如果表的读操作远远多于写操作时，并且不需要事务的支持的，可以将MyIASM作为数据库引擎的首选。

### 175.说-下mysq|的行锁和表锁?
MyISAM只支持表锁，InnoDB 支持表锁和行锁，默认为行锁。
1. 表级锁:开销小，加锁快，不会出现死锁。锁定粒度打，发生锁冲突的概率最高，并发量最低。
1. 行级锁:开销大，加锁慢，会出现死锁。锁力度小，发生锁冲突的概率小，并发度最高。

### 176.说一下乐观锁和悲观锁?
1. 乐观锁:每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在提交更新的时候会判断一下在此期间别人有没有去更新这个数据。

1. 悲观锁:每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻止，直到这个锁被释放。

数据库的乐观锁需要自己实现，在表里面添加一个version字段，每次修改成功值加1,这样每次修改的时候先对比一下， 自己拥有的version和数据库现在的version是否-致，如果不一致就不修改， 这样就实现了乐观锁。

### 177. mysql问题排查都有哪些手段?
1. 使用show processlist 命令查看当前所有连接信息。
2. 使用explain 命令查询SQL语句执行计划。
3. 开启慢查询日志，查看慢查询的SQL

### 178.如何做mysql的性能优化?
1. 为搜索字段创建索引。
2. 避免使用select *，列出需要查询的字段。
3. 垂直分割分表
4. 选择正确的存储引擎。

## 十八、Redis
### 179. redis是什么?都有哪些使用场景?
Redis是一一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库,并提供多种语言的API。

Redis使用场景:
1. 数据高并发的读写
1. 海量数据的读写
1. 对扩展性要求高的数据

### 180. redis 有哪些功能?
1. 数据缓存功能
1. 分布式锁的功能
1. 支持数据持久化
1. 支持事务
1. 支持消息队列
### 181. redis和memecache有什么区别?
1. memcached所有的值均是简单的字符串，redis作为其替代者，支持更为丰富的数据类型；
1. redis的速度比memcached快很多；
1. redis可以持久化其数据；

### 182. redis为什么是单线程的?
1. 因为cpu不是Redis的瓶颈，Redis 的瓶颈最有可能是机器内存或者网络带宽。既然单线程容易实现，而且cpu又不会成为瓶颈，那就顺理成章地采用单线程的方案了。
1. 关于Redis的性能，官方网站也有，普通笔记本轻松处理每秒几十万的请求。而且单线程并不代表就慢nginx和nodejs也都是高性能单线程的代表。

### 183.什么是缓存穿透?怎么解决?
缓存穿透:指查询一个-定不存在的数据，由于缓存是不命中时需要从数据库查询，查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到数据库去查询，造成缓存穿透。

解决方案:最简单粗暴的方法如果一个查询返回的数据为空(不管是数据不存在，还是系统故障)， 手们就把这个空结果进行缓存，但它的过期时间会很短，最长不超过五分钟。

### 184. redis支持的数据类型有哪些?
string、 list. hash、 set、 zset。

### 185. redis支持的java客户端都有哪些?
Redisson、Jedis、 lttuce等等，官方推荐使用Redisson。

### 186. jedis和redisson有哪些区别?
Jedis是Redis的Java实现的客户端，其API提供了比较全面的Redis命令的支持。

Redisson实现了分布式和可扩展的Java数据结构，和Jedis相比，功能较为简单,不支持字符串操作，不支持排序、事务、管道、分区等Redis特性。Redisson的宗旨是促进使用者对Redis的关注分离,从而让使用者能够将精力更集中地放在处理业务逻辑上。

### 187.怎么保证缓存和数据库数据的一致性?
1. 合理设置缓存的过期时间。
1. 新增、更改、删除数据库操作时同步更新Redis,可以使用事物机制来保证数据的一致

### 188. redis 持久化有几种方式?
Redis的持久化有两种方式，或者说有两种策略:
1. RDB (Redis Database) : 指定的时间间隔能对你的数据进行快照存储。
1. AOF (Append OnlyFile) :每一个收到的写命令都通过write函数追加到文件中。

### 189. redis怎么实现分布式锁?
Redis分布式锁其实就是在系统里面占-一个“坑”，其他程序也要占“坑”的时候，占用成功了就可以继续执行，失败了就只能放弃或稍后重试。

占坑一般使用setnx(set if not exists)指令,只允许被一个程序占有，使用完调用del释放锁。

### 190. redis分布式锁有什么缺陷?
Redis 分布式锁不能解决超时的问题，分布式锁有一个超时时间，程序的执行如果超出了锁的超时时间就会出现问题。

### 191. redis如何做内存优化?
尽可能使用散列表(hashes), 散列表 (是说散列表里面存储的数少)使用的内存非常小，所以你应该尽可能的将你的数据模型抽象到一个散列表里面。

比如你的web系统中有一个用户对象，不要为这个用户的名称，姓氏，邮箱,密码设置单独的key,.而是应该把这个用户的所有信息存储到一张散列表里面。

### 192. redis淘汰策略有哪些?
1. volatile-lru: 从已设置过期时间的数据集(server. db[i]. expires)中挑选最近最少使用的数据淘汰。
1. volatile-ttl: 从已设置过期时间的数据集(server. db[i]. expires)中挑选将要过期的数据淘汰。
1. volatile-random: 从已设置过期时间的数据集(server. db[]. expires)中任意选择数据淘汰。
1. alkeys-lru: 从数据集(server. db[i]. dict) 中挑选最近最少使用的数据淘汰。
1. llkeys-random:从数据集(server. db[i].dict) 中任意选择数据淘汰。
1. no-enviction (驱逐) :禁止驱逐数据。

### 193. redis常见的性能问题有哪些?该如何解决?
1. 主服务器写内存快照，会阻塞主线程的工作，当快照比较大时对性能影响是非常大的，会间断性暂停服务，所以主服务器最好不要写内存快照。
1. Redis 主从复制的性能问题，为了主从复制的速度和连接的稳定性,主从库最好在同一个局域网内。

## 十九、JVM
### 194.说一下jvm的主要组成部分?及其作用?
1. 运行时数据区(Runtime Data Area)
1. 执行引擎(Execution Engine)
1. 本地库接口(Native Interface)

组件的作用:首先通过类加载器(ClassLoader)会把Java代码转换成字节码，运行时数据区(Runtime Data Area)再把字节码加载到内存中,而字节码文件只是JVM的一套指令集规范,并不能直接交个底层操作系统去执行，因此需要特定的命令解析器执行引擎(Execution Engine)，将字节码翻译成底层系统指令，再交由CPU去执行，而这个过程中需要调用其他语言的本地库接口(NativeInterface) 来实现整个程序的功能。

### 195.说一下jvm运行时数据区?
不同虚拟机的运行时数据区可能略微有所不同，但都会遵从Java虛拟机规范，Java 虛拟机规范规定的区域分为以下5个部分:
1. 程序计数器(Program Counter Register) :当前线程所执行的字节码的行号指示器，字节码解析器的工作是通过改变这个计数器的值，来选取下一条需要执行的字节码指令,分支、循环、跳转、异常处理、线程恢复等基础功能，都需要依赖这个计数器来完成
1. Java虚拟机栈(Java Virtual Machine Stacks) :用于存储局部变量表、操作数栈、动态链接、方法出口等信息本地方法栈(Native Method Stack) :与虚拟机栈的作用是一样的， 只不过虚拟机栈是服务Java方法的，而本地方法栈是为虚拟机调用Native方法服务的
1. Java堆(Java Heap) : Java虚拟机中内存最大的一块，是被所有线程共享的，几乎所有的对象实例都在这里分配内存
1. 方法区(MethedArea):用于存储已被虛拟机加载的类信息、常量、静态变量、即时编译后的代码等数据

### 196.说一下堆栈的区别?
功能方面:堆是用来存放对象的，栈是用来执行程序的

共享性:堆是线程共享的，栈是线程私有的

空间大小:堆大小远远大于栈

### 197.队列和栈是什么?有什么区别?
1. 队列和栈都是被用来预存储数据的。
1. 队列允许先进先出检索元素，但也有例外的情况，Deque接口允许从两端检索元素。
1. 栈和队列很相似，但它运行对元素进行后进先出进行检索。

### 198.什么是双亲委派模型?
在介绍双亲委派模型之前先说下类加载器。对于任意一个类，都需要由加载它的类加载器和这个类本身一同确立在JVM中的唯一一性,每一个类加载器，都有一个独立的类 名称空间。类加载器就是根据指定全限定名称将class文件加载到JVM内存，然后再转化为class对象。

类加载器分类:
1. 启动类加载器(Bootstrap Classl oader)，是虚拟机自身的一部分，用来加载Java_ HOME/ib/目录中的，或者被-Xbootclasspath参数所指定的路径中并且被虚拟机识别的类库
1. 其他类加载器:
1. 扩展类加载器(Extension ClassLoader) :负责加载liblext目录或Java. ext. dirs系统变量指定的路径中的所有类库
1. 应用程序类加载器(Application ClassLoader)。负责加载用户类路径(classpath). 上的指定类库, 我们可以直接使用这个类加载器。一般情况， 如果我们没有自定义类加载器默认就是用这个加载器。

双亲委派模型:如果一个类 加载器收到了类加载的请求，它首先不会自己去加载这个类，而是把这个请求委派给父类加载器去完成，每一层的类 加载器都是如此，这样所有的加载请求都会被传送到顶层的启动类加载器中，只有当父加载无法完成加载请求(它的搜索范围中没找到所需的类)时，子加载器才会尝试去加载类。

### 199.说-下类加载的执行过程?
类装载分为以下5个步骤:

1. 加载:根据查找路径找到相应的class 文件然后导入
2. 查检：查加载的class文件的正确性
3. 准备：给米中的静太峦昌分配内存空间
4. 解析:虚拟机将中的符号引用替换成直接引用号引用替换的成直接饮用的过程。符号饮用就理解为一个标识，而在直接饮用直接指向内存中的地址；
5. 初始化:对静态变量和静态代码块执行初始化工作。

### 200.怎么判断对象是否可以被回收?
一般有两种方法来判断:
1. 引用计数器:为每个对象创建一个引用计数, 有对象引用时计数器+1，引用被释放时计数-1当计数器为0时就可以被回收。它有一-个缺点不能解决循环引用的问题。
1. 可达性分析:从GC Roots开始向下搜索,搜索所走过的路径称为引用链。当-一个对象到 GCRoots没有任何引用链相连时,则证明此对象是可以被回收的。

###  201.java中都有哪些引用类型?
1. 强引用:发生gc的时候不会被回收
1. 软引用:有用但不是必须的对象，在发生内存溢出之前会被回收
1. 弱引用:有用但不是必须的对象，在下一次GC时会被回收
1. 虚引用(幽灵引用/幻影引用) :无法通过虚引用获得对象，用PhantomReference实现虚引用，虚引用的用途是在gc时返回一个通知

### 202.说一下jvm有哪些垃圾回收算法?
1. 标记-清除算法:标记无用对象， 然后进行清除回收。缺点:效率不高,无法清除垃圾碎片
1. 标记整理算法:标记无用对象,让所有存活的对象都向一端移动，然后直接清除掉端边界以外的内存
1. 复制算法:按照容量划分二个大小相等的内存区域，当一块用完的时候将活着的对象复制到另一块上，然后再把已使用的内存空间一次清理掉。**缺点:内存使用率不高，只有原来的一半**
1. 分代算法:根据对象存活周期的不同将内存划分为几块，一般是新生代和老年代，新生代基本采用复制算法，老年代采用标记整理算法

### 203.说一 下jvm有哪些垃圾回收器?
1. Serial: 最早的单线程串行垃圾回收器
1. Serial Old: Serial 垃圾回收器的老年版本，后样也是单线程的，可以作为CMS垃圾回收器的备选预案
1. ParNew:是Serial的多线程版本
1. Parallel 和ParNew收集器类似是多线程的，1Parallel 是吞吐量优先的收集器，可以牺牲等待时间换取系统的吞吐量
1. Parallel Old是Parallel老生代版本，Parallel使用的是复制的内存回收算法，Parallel Old使用的是标记-整理的内存回收算法
1. CMS:一种以获得最短停顿时间为目标的收集器，非常适用B/S系统
1. G1:一种兼顾吞吐量和停顿时间的GC实现,是JDK9以后的默认GC选项

### 204.详细介绍一下 CMS垃圾回收器?
CMS是英文Concurrent Mark Sweep的简称，是以牺牲吞吐量为代价来获得最短回收停顿时间的垃圾回收器。对于要求服务器响应速度的应用上,这种垃圾回收器非常适合。在启动JVM的参数加上“-XX:+UseConcMarkSweepGC"来指定使用CMS垃圾回收器

CMS使用的是标记清除的算法实现的，所以在gc的时候回产生大量的内存碎片,当剩余内存不能满足程序运行要求时，系统将会出现Concurrent ModeFailure, 临时CMS会采用Serial Old回收器进行垃圾清除，此时的性能将会被降低

### 205新生代垃圾回收器和老生代垃圾回收器都有哪些?有什么区别?
新生代回收器：Serial、ParNew、Parallel Scavenge
老年代回收器: Serial 0ld、 Parallel Old、 CMS
整堆回收器: G1

新生代垃圾回收器一般采用的是复 制算法，复制算法的优点是效率高，缺点是内存利用率低;老年代回收器一般采用的是标记-整理的算法进行垃圾回收

### 206.简述分代垃圾回收器是怎么工作的?
分代回收器有两个分区:老生代和新生代,新生代默认的空间占比总空间的1/3,老生代的默认占比是2/3

新生代使用的是复制算法，新生代里有3个分区:Eden、To Survivor、 From Survivor, 它们的默认占比是8:1:1,它的执行流程如下:
1. 把Eden + From Survivor存活的对象放入To
Survivor 区
1. 清空Eden和From Survivor分区
1. From Survivor和To Survivor分区交换，FromSurvivor 变To Survivor, To Survivor变From Survivor

每次在From Survivor到To Survivor移动时都存活的对象，年龄就+1，当年龄到达15 (默认配置是15)时，升级为老生代。大对象也会直接进入老生代。老生代当空间占用到达某个值之后就会触发全局垃圾收回，一般使用标记整理的执行算法。以上这些循环往复就构成了整个分代垃圾回收的整体执行流程

### 207.说一下jvm调优的工具?
JDK自带了很多监控工具，都位于JDK的bin目录下，其中最常用的是jconsole和jvisualvm这两款视,图监控工具
1. jconsole:用于对JVM中的内存、线程和类等进行监控;
1. jvisualvm: JDK 自带的全能分析工具，可以分析:内存快照、线程快照、程序死锁、监控内存的变化、gc变化等

### 208.常用的jvm调优的参数都有哪些?
1. -Xms2g:初始化推大小为2g
1. -Xmx2g.性是大内左为2g
1. -xx.NewRatio=4： 设置年轻的和老年代的内存比例为 1：4
1. -XX:SurvivorRatio=8：设置新生代Eden和Survivor比例为8:2
1. -XX:UserParNewGC:指定使用ParNew +  Serial 0ld 垃圾回收器组合
1. -XX:UserParallelOLDGC:指定使用ParNew +  ParNew 0ld 垃圾回收器组合
1. -XX: +UseConcMarkSweepGC:指定使用CMS + Serial 0ld 垃圾回收器组合
1. -XX:+PrintGC:开启打印gc信息
1. -XX:+PrintGCDetails:打印gc详细信息







