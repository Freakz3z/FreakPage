// 消息盒子
var messageBox = document.querySelector(".message-box");
var timeoutId = null; // 用于存储定时器ID

function showMessage(text) {
    // 如果正在显示消息，更新文本
    if (messageBox.classList.contains("show")) {
        messageBox.textContent = text;
        return; // 直接返回，不再执行后续代码
    }
    
    messageBox.textContent = text;
    messageBox.style.display = "block"; // 显示元素
    requestAnimationFrame(() => {
        messageBox.classList.add("show"); // 添加show类
    });

    // 清除之前的定时器
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    // 设置定时器隐藏消息
    timeoutId = setTimeout(function() {
        hideMessage();
    }, 5000);
}

function hideMessage() {
    // 移除show类以触发过渡效果
    messageBox.classList.remove("show");
    setTimeout(function() {
        messageBox.style.display = "none"; // 隐藏元素
    }, 500); // 与CSS的transition时间一致
}


document.addEventListener("DOMContentLoaded", function(event) {
  var currentTime = new Date().getHours();
  var greetingText = "";

  if (currentTime >= 0 && currentTime <= 2) {
    greetingText = "夜深了，早点睡觉吧";
  } else if (currentTime > 2 && currentTime <= 5) {
    greetingText = "凌晨了";
  } else if (currentTime > 5 && currentTime <= 11) {
    greetingText = "早上好";
  } else if (currentTime > 11 && currentTime <= 13) {
    greetingText = "中午好";
  } else if (currentTime > 13 && currentTime <= 17) {
    greetingText = "下午好";
  } else {
    greetingText = "晚上好";
  }

  setTimeout(function() {
    showMessage(greetingText);
  }, 3000);
});