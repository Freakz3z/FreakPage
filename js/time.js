// 时间部分
// 获取时间按钮和时间元素
const timeButton = document.getElementById("time-button");
const currentTime = document.getElementById("current-time");

// 定时更新时间
setInterval(() => {
  // 获取当前时间
  const currentDate = new Date();

  // 格式化时间为所需的字符串
  const hour = String(currentDate.getHours()).padStart(2, "0");
  const minute = String(currentDate.getMinutes()).padStart(2, "0");
  const second = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedTime = `${hour}:${minute}`;

  // 设置时间元素的 datetime 属性和文本内容
  if (currentTime) {
    currentTime.setAttribute("datetime", formattedTime);
    currentTime.textContent = formattedTime;
  }
}, 1000);

// 设置开放时间的起始日期
const startDate = new Date('2025-02-03T00:00:00');

function updateOpenTime() {
    const now = new Date();
    const elapsedTime = now - startDate;  // 计算经过的时间（毫秒）

    // 计算天、小时、分钟和秒
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    // 更新页面内容
    console.log(`主页已运行：${String(days).padStart(3, '0')}天${String(hours).padStart(2, '0')}时${String(minutes).padStart(2, '0')}分${String(seconds).padStart(2, '0')}秒`);
}

// 每六十秒更新一次
setInterval(updateOpenTime, 60000);
updateOpenTime();  // 初始化显示