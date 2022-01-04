# if-else if-else与switch的区别

> ### <font color=#337AB7 > 参考答案</font> 

### if-else-if-else：

1. 适合分支较少
2. 判断条件类型不单一
3. 支持取 boolean 类型的所有运算
4. 满足条件即停止对后续分支语句的执行

### switch：

1. 适合分支较多
2. 判断条件类型单一，JDK1.0-1.4 数据类型接受 byte short int char; JDK1.5 数据类型接受 byte short int char enum; JDK1.7 数据类型接受 byte short int char enum String
3. 没有 break 语句每个分支都会执行

