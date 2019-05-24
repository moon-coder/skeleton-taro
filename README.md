# skeleton-taro
taro一体化开发框架

# 开发&调试

初始操作参考文档;
https://nervjs.github.io/taro/docs/GETTING-STARTED.html

## h5运行


```shell
#开发
npm run dev:h5

#发布打包
npm run build:h5
```


## rn运行;

### 运行

```shell
# 本项目
npm run dev:rn

# taro-native-shell  执行一次就可以了.  编译失败后执行一次即可.

npm run fix
# xcode 打开ios目录;

```
  taro-native-shell项目. 通过 xcode  打能ios目录

注意:config.h' file not found 问题解决.
 https://stormy.fun/2018/10/18/react-native%E6%8A%A5%E9%94%99-config-h-file-not-found/



note:  要确保name名称一致

修改本项目package.json name字段, 与taro-native-shell项目保持一致

或修改 https://nervjs.github.io/taro/docs/react-native.html#%E9%85%8D%E7%BD%AE-appjson

或修改 taro-native-shell ==>AppDelegate.m

https://nervjs.github.io/taro/docs/react-native.html#%E4%BD%BF%E7%94%A8-xcode-%E5%90%AF%E5%8A%A8


# 注意事项

为保证三端 尽量使用taro-ui组件;
