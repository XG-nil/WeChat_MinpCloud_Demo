# WeChat_MinpCloud_Demo
**效果展示**
****
![minp.gif](https://upload-images.jianshu.io/upload_images/12555341-2249b50b4e6ae4d6.gif?imageMogr2/auto-orient/strip)

客服会话接收：
需在微信开发平台后台开通客服功能
![image.png](https://upload-images.jianshu.io/upload_images/12555341-cb067b44701efba0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**Demo下载**
****


**AppID替换**
****
替换成待开发的小程序的AppID
![image.png](https://upload-images.jianshu.io/upload_images/12555341-38353d5b3ca92aec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**云函数部署**
****
我这里部署了登陆和客服相关的云函数
![image.png](https://upload-images.jianshu.io/upload_images/12555341-9f0c47577300e6fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

记得加上云开发控制台的全局设置：
![image.png](https://upload-images.jianshu.io/upload_images/12555341-5c371a0e1a533c8a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**首页数据的json结构**
****
以category为例：
![image.png](https://upload-images.jianshu.io/upload_images/12555341-937ee514d0dc8ac4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12555341-54f3f750a78eea10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/12555341-c3452aab10658fda.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

数据库导出的json文件已放在demo的database_json目录下
![image.png](https://upload-images.jianshu.io/upload_images/12555341-7a996a5bb3168fd4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

banner和首页按钮的底图统一放在控制台的存储区：
![image.png](https://upload-images.jianshu.io/upload_images/12555341-188e4cbba228b815.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**产品展示——嵌入web-view**
****
调试时可以选择不校验域名，上线时需要用业务域名：
![image.png](https://upload-images.jianshu.io/upload_images/12555341-d5b69db28f147927.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/12555341-8bbd3527db939606.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**接入客服消息**
****
![image.png](https://upload-images.jianshu.io/upload_images/12555341-0a9e8c8709be025d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
改一下云函数入口文件
![image.png](https://upload-images.jianshu.io/upload_images/12555341-e6da8abd5cd2165a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

