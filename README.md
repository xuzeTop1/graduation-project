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

可选环境变量：

- `HOST`：后端监听地址（默认 `127.0.0.1`）
- `PORT`：后端监听端口（默认 `3000`）
- `ALLOWED_ORIGIN`：允许跨域的前端来源（默认 `http://127.0.0.1:8080`）

### 2) 启动前端静态页面

在项目根目录执行：

```bash
python3 -m http.server 8080 --directory frontend
```

浏览器访问：`http://127.0.0.1:8080`

前端会调用后端接口并展示返回 JSON 数据。

如需切换后端地址，可在 `frontend/index.html` 里先定义：

```html
<script>
  window.__API_BASE_URL__ = 'http://127.0.0.1:3000';
</script>
```

## 测试

```bash
npm run test:backend
```
