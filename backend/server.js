const http = require('http');

const rawPort = Number(process.env.PORT);
const PORT =
  Number.isInteger(rawPort) && rawPort > 0 && rawPort <= 65535
    ? rawPort
    : 3000;
const HOST = process.env.HOST || '127.0.0.1';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://127.0.0.1:8080';

const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
};

const requestListener = (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method === 'GET' && req.url === '/api/message') {
    sendJson(res, 200, {
      project: 'frontend-backend-separation-demo',
      message: '后端接口调用成功',
      timestamp: new Date().toISOString(),
    });
    return;
  }

  sendJson(res, 404, { error: 'Not Found' });
};

const createServer = () => http.createServer(requestListener);

if (require.main === module) {
  const server = createServer();
  server.listen(PORT, HOST, () => {
    console.log(`Backend server running on http://${HOST}:${PORT}`);
  });
}

module.exports = {
  createServer,
  requestListener,
};
