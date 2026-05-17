const assert = require('node:assert');
const { test } = require('node:test');
const { createServer } = require('./server');

test('GET /api/message returns demo payload', async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/message`);
    const body = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(body.project, 'frontend-backend-separation-demo');
    assert.strictEqual(body.message, '后端接口调用成功');
    assert.ok(body.timestamp);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});
