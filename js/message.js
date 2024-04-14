// 消息盒子
var messageBox = document.querySelector(".message-box");

function showMessage(text) {
  messageBox.textContent = text;
  messageBox.style.display = "block";
  messageBox.classList.add("show");

  setTimeout(function() {
    hideMessage();
  }, 5000);
}

function hideMessage() {
  messageBox.classList.remove("show");
  setTimeout(function() {
    messageBox.style.display = "none";
  }, 500);
}

document.addEventListener("DOMContentLoaded", function(event) {
  var currentTime = new Date().getHours();
  var greetingText = "";

  if (currentTime >= 0 && currentTime <= 2) {
    greetingText = "夜深了";
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