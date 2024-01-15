## wangEditor4 内存泄漏Demo

```
npm i
npm run serve
```

### 问题复现步骤

1. 打开页面 http://localhost:8080/#/
2. 点击 `wangEditor4 内存测试，存在泄漏` 按钮，然后点击 `Back` 按钮返回，反复上面操作数次，发现内存上升并且无法被回收

