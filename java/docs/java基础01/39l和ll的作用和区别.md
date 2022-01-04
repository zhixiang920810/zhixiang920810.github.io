# |和||的作用和区别

> ### <font color=#337AB7 > 参考答案</font> 
### |

- 逻辑或，| 两边的表达式都会进行运算
- 整数的或运算符
 

### ||

- 短路或，|| 左边的表达式结果为 true 时，|| 右边的表达式不参与计算

```java
package constxiong.interview;

/**
 * 测试 | ||
 * @author ConstXiong
 */
public class TestOr {

    public static void main(String[] args) {
        int x = 10;
        int y = 9;
        if (x == 10 | ++y > 9) {
        }
        System.out.println("x = " + x + ", y = " + y);
        
        int a = 10;
        int b = 9;
        if (a == 10 || ++b > 9) {//a == 10 为 true，所以 ++b 不会运算，b=9
        }
        System.out.println("a = " + a + ", b = " + b);
        
        /*
        00000000000000000000000000000001
        |
        00000000000000000000000000000010
        =
        00000000000000000000000000000011
        */
        System.out.println(1 | 2);//打印3
    }
    
}
```
>打印
```java
x = 10, y = 10
a = 10, b = 9
3
 ```
