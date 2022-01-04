# 什么是java序列化？什么情况下需要序列化？

> ### <font color=#337AB7 > 参考答案</font> 

### 序列化：将 Java 对象转换成字节流的过程。

### 反序列化：将字节流转换成 Java 对象的过程。

 

- 当 Java 对象需要在网络上传输 或者 持久化存储到文件中时，就需要对 Java 对象进行序列化处理。

- 序列化的实现：类实现 Serializable 接口，这个接口没有需要实现的方法。实现 Serializable 接口是为了告诉 jvm 这个类的对象可以被序列化。

 

> ##### <font color=red>注意事项：</font>

某个类可以被序列化，则其子类也可以被序列化
对象中的某个属性是对象类型，需要序列化也必须实现 Serializable 接口
声明为 static 和 transient 的成员变量，不能被序列化。static 成员变量是描述类级别的属性，transient 表示临时数据
反序列化读取序列化对象的顺序要保持一致
 

> ###### 具体使用
```java
package constxiong.interview;
 
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
 
/**
 * 测试序列化，反序列化
 * @author ConstXiong
 * @date 2019-06-17 09:31:22
 */
public class TestSerializable implements Serializable {
 
    private static final long serialVersionUID = 5887391604554532906L;
    
    private int id;
    
    private String name;
 
    public TestSerializable(int id, String name) {
        this.id = id;
        this.name = name;
    }
    
    @Override
    public String toString() {
        return "TestSerializable [id=" + id + ", name=" + name + "]";
    }
 
    @SuppressWarnings("resource")
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        //序列化
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("TestSerializable.obj"));
        oos.writeObject("测试序列化");
        oos.writeObject(618);
        TestSerializable test = new TestSerializable(1, "ConstXiong");
        oos.writeObject(test);
        
        //反序列化
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("TestSerializable.obj"));
        System.out.println((String)ois.readObject());
        System.out.println((Integer)ois.readObject());
        System.out.println((TestSerializable)ois.readObject());
    }
 
}
```
> ###### 打印结果：
```java
测试序列化
618
TestSerializable [id=1, name=ConstXiong]
```
