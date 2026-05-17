# graduation-project

前后端分离项目 demo。

## 目录结构

```text
.
├── backend
│   ├── server.js        # 后端 API 服务
│   └── server.test.js   # 后端接口测试
├── frontend
│   ├── index.html       # 前端页面
│   └── main.js          # 前端调用后端接口逻辑
└── package.json
```

## 运行方式

### 1) 启动后端服务

```bash
npm run start:backend
```

默认监听地址：`http://127.0.0.1:3000`

接口示例：`GET /api/message`

### 2) 启动前端静态页面

在项目根目录执行：

```bash
python3 -m http.server 8080 --directory frontend
```

浏览器访问：`http://127.0.0.1:8080`

前端会调用后端接口并展示返回 JSON 数据。

## 测试

```bash
npm run test:backend
```
