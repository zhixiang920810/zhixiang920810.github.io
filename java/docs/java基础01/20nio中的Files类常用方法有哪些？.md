# nio中的Files类常用方法有哪些？

> ### <font color=#337AB7 > 参考答案</font> 

- isExecutable：文件是否可以执行
- isSameFile：是否同一个文件或目录
- isReadable：是否可读
- isDirectory：是否为目录
- isHidden：是否隐藏
- isWritable：是否可写
- isRegularFile：是否为普通文件
- getPosixFilePermissions：获取POSIX文件权限，windows系统调用此方法会报错
- setPosixFilePermissions：设置POSIX文件权限
- getOwner：获取文件所属人
- setOwner：设置文件所属人
- createFile：创建文件
- newInputStream：打开新的输入流
- newOutputStream：打开新的输出流
- createDirectory：创建目录，当父目录不存在会报错
- createDirectories：创建目录，当父目录不存在会自动创建
- createTempFile：创建临时文件
- newBufferedReader：打开或创建一个带缓存的字符输入流
- probeContentType：探测文件的内容类型
- list：目录中的文件、文件夹列表
- find：查找文件
- size：文件字节数
- copy：文件复制
- lines：读出文件中的所有行
- move：移动文件位置
- exists：文件是否存在
- walk：遍历所有目录和文件
- write：向一个文件写入字节
- delete：删除文件
- getFileStore：返回文件存储区
- newByteChannel：打开或创建文件，返回一个字节通道来访问文件
- readAllLines：从一个文件读取所有行字符串
- setAttribute：设置文件属性的值
- getAttribute：获取文件属性的值
- newBufferedWriter：打开或创建一个带缓存的字符输出流
- readAllBytes：从一个文件中读取所有字节
- createTempDirectory：在特殊的目录中创建临时目录
- deleteIfExists：如果文件存在删除文件
- notExists：判断文件不存在
- getLastModifiedTime：获取文件最后修改时间属性
- setLastModifiedTime：更新文件最后修改时间属性
- newDirectoryStream：打开目录，返回可迭代该目录下的目录流
- walkFileTree：遍历文件树，可用来递归删除文件等操作
 

如测试获取文件所属人
```java
public static void testGetOwner() throws IOException {
    Path path_js = Paths.get("/Users/constxiong/Desktop/index.js");
    System.out.println(Files.getOwner(path_js));
}
 ```
***
> ### <font color=red>推荐：</font>
具体介绍和使用，可参照：

https://www.cnblogs.com/ixenos/p/5851976.html
https://www.jianshu.com/p/3cb5ca04e3c8
