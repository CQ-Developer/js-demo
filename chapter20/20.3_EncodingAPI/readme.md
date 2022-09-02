# 20.3 Encoding API

***Encoding API*** 主要用于实现字符串与定型数组之间的转换

规范新增了**4**个用于执行转换的全局类:

1. *TextEncoder*

2. *TextEncoderStream*

3. *TextDecoder*

4. *TextDecoderStream*

```txt
注意: 相比于批量(bulk)的编解码, 对流(stream)编解码的支持很有限
```