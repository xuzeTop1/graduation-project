const output = document.getElementById('output');
const API_BASE_URL = window.__API_BASE_URL__ || 'http://127.0.0.1:3000';

const render = async () => {
  if (!output) {
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/message`);

    if (!response.ok) {
      throw new Error(`请求失败(${response.status})`);
    }

    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = `请求失败: ${error.message}`;
  }
};

render();
