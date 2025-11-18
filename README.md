# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## 启动

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

## 动态功能描述

1. 确认要求，拉建项目expo+router+Paper，查看UI设计（width：344），采用通用uiElePx设计，将所有设备以uiWidthPx为基准（375更标准，具体以实际项目为主）

2. UI分上下两部分，先实现header静态UI，考虑背景用ImageBackground，但是性能、缓存、可操作性没有expoImage好；

3. 再实现list（FlashList）和item组件UI，中间考虑到是否用HeaderComponent实现上部分header，但滑动后收起效果难以实现；item图标用的Paper库Icon，便于实现切换效果，也可以切换为Svg（需要额外依赖）。

4. 确认交互效果，上滑动后header收起部分，但是头像（缩小）且和昵称下滑（实际上缩小会导致距离变化，所以个人更倾向上滑动时原来展示信息淡出，底部新的头像昵称淡入，效果：https://github-production-user-asset-6210df.s3.amazonaws.com/66866535/515459970-272a3fd9-4cd9-4101-9def-11c5ee4ba3c2.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251118T005826Z&X-Amz-Expires=300&X-Amz-Signature=fa951bc5e6eb21158c43edfa83735116259b511f446f677782fa58e7bd7448af&X-Amz-SignedHeaders=host）

5. 最终效果都存放在assets/preview中，安卓和ios都进行基本的调试(暗黑模式也进行了一定兼容)，时间有限，在追求速度的同时设计上可能考虑不够周全，在实际开发中可能需要和产品、UI沟通实际选用最佳的效果。
