# SVGAPlayer

## Version

### 1.2.3

首个 SVGAPlayer - React Native 官方支持版本

## 使用

```
import SVGAPlayer from 'svgaplayer';
```

```
...
render() {
    return (
        <SVGAPlayer style={{width: 200, height: 200}} source="http://yourserver/xxx.svga" />
    )
}
```

## 参数

* source: String - SVGA 动画文件的路径，可以是 URL，或是本地 NSBundle.mainBundle / assets 文件
* loops: Int - 默认值为 0，用于指定动画循环次数，0 = 无限循环
* clearsAfterStop: Boolean - 默认值为 true，动画播放完成后，是否清空画布
* currentState: String - 用于控制 SVGA 播放状态，可设定以下值 >>> 'start' = 从头开始播放; 'pause' = 从当前位置暂停播放; 'stop' = '停止播放'; 'clear' = '停止播放并清空画布';
* toFrame:Int - 控制当前动画停靠在某帧，如果 currentState 值为 'play'，则跳到该帧后继续播放动画
* toPercentage:Float - 控制当前动画停靠在某进度，如果 currentState 值为 'play'，则跳到该帧后继续播放动画
* onFinished:Function - 动画播放完成后，回调
* onFrame:Function(Int) - 动画播放至某帧时，回调
* onPercentage:Function(Float) - 动画播放至某进度时，回调

## 方法

* load(source: String) - 加载动画
* startAnimation() - 开始动画
* pauseAnimation() - 暂停动画
* stopAnimation() - 停止动画
* stepToFrame(toFrame: Int, andPlay: Boolean) - 跳到某帧，然后继续（暂停）播放动画
* stepToPercentage(toPercentage, andPlay) - 跳到某进度，然后继续（暂停）播放动画

## 安装

### npm

```
npm install svgaplayer --save
```

### iOS

#### Link 方式集成

在 ```npm install``` 后你可以使用 ```react-native link svgaplayer``` 集成

#### CocoaPods 方式集成

使用 CocoaPods 方式安装的前提是，React-Native 也使用 CocoaPods 进行集成。

在 Podfile 文件添加以下依赖

```
pod 'SVGAPlayer', :podspec => 'https://raw.githubusercontent.com/yyued/SVGAPlayer-iOS/1.1.2/SVGAPlayer-React.podspec'
```

```pod install``` 即可

### Android

使用 Gradle 方式进行集成

在顶级 ```build.gradle``` 文件添加仓库

```
allprojects {
    repositories {
        ...
        maven { url 'https://jitpack.io' }
    }
}
```

在目标 ```build.gradle``` 文件添加依赖

```
compile 'com.github.yyued.SVGAPlayer-Android:library:1.2.3-react'
compile 'com.github.yyued.SVGAPlayer-Android:react:1.2.3-react'
```

同步后，添加 ```RCTSVGAPlayerPackage``` 实例到 ```ReactInstanceManager.builder()``` 即可。
