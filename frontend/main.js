const output = document.getElementById('output');

const render = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/message');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || '请求失败');
    }

    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = `请求失败: ${error.message}`;
  }
};

render();
