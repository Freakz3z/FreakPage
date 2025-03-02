document.addEventListener('DOMContentLoaded', () => {
  // 获取具有 alt="word" 的图标元素
  var word = document.getElementById('sidebar-element-word');
  var more_container = document.getElementById("more-container");
  var mid_container = document.getElementById("mid-container");

  // 获取 more_container 中的所有文本元素
  const textElements = more_container.querySelectorAll('.more-text');

  // 点击图标的事件处理
  word.addEventListener("click", function() {
      if (mid_container.style.opacity === "0") {
          // 显示 mid_container，隐藏 more_container
          mid_container.style.opacity = "1";
          more_container.style.opacity = "0";
          more_container.style.pointerEvents = "none";

          textElements.forEach(text => {
            text.classList.remove('show'); // 移除显示类
          });
      } else {
          // 隐藏 mid_container，显示 more_container
          mid_container.style.opacity = "0";
          more_container.style.opacity = "1";
          more_container.style.pointerEvents = "auto";

          

          // 每次点击前，先清除之前的显示效果
          textElements.forEach(text => {
              text.classList.remove('show'); // 移除显示类
          });

          // 逐个显示文字
          textElements.forEach((text, index) => {
              setTimeout(() => {
                  text.classList.add('show'); // 添加类以显示文字
              }, index * 500); // 每个文字间隔 500 毫秒
          });
      }
  });
});
