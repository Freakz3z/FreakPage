var music = document.getElementById("sidebar-element-music");
var audio = document.getElementById("audio-container");

// 确保初始状态设置
audio.style.opacity = "1";
audio.style.pointerEvents = "auto";

music.addEventListener("click", function() {
  if (audio.style.opacity === "1") {
    audio.style.opacity = "0";
    audio.style.pointerEvents = "none";
  } else {
    audio.style.opacity = "1"; 
    audio.style.pointerEvents = "auto";
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');
  const volumeControl = document.getElementById('volume-control');
  const progressContainer = document.getElementById('progress-container');
  const progressBar = document.getElementById('progress-bar');
  const volumeButton = document.getElementById('volume-button');

  // 初始化播放按钮
  playButton.style.display = 'block';
  pauseButton.style.display = 'none';
  
  // 监听音频播放事件
  audio.addEventListener("play", function() {
    showMessage("正在播放：花火大会 - RADWIMPS");
  });

  // 监听音频暂停事件
  audio.addEventListener("pause", function() {
    showMessage("播放暂停");
  });

  // 监听音频结束事件
  audio.addEventListener("ended", function() {
    showMessage("播放结束");
    playButton.style.display = 'none'; // 隐藏播放按钮
    pauseButton.style.display = 'block'; // 显示暂停按钮
  });

  // 设置默认音量
  audio.volume = 0.4; // 设置默认音量为 0.4

  // 播放按钮点击事件
  playButton.addEventListener('click', () => {
      audio.play();
      playButton.style.display = 'none'; // 隐藏播放按钮
      pauseButton.style.display = 'block'; // 显示暂停按钮
  });

  // 暂停按钮点击事件
  pauseButton.addEventListener('click', () => {
      audio.pause();
      playButton.style.display = 'block'; // 显示播放按钮
      pauseButton.style.display = 'none'; // 隐藏暂停按钮
  });

  // 音量控制事件
  volumeControl.addEventListener('input', () => {
      audio.volume = volumeControl.value; // 更新音量
      // 切换音量图标
      if (audio.volume === "0") {
          volumeButton.querySelector('img').src = "pic/静音.svg"; // 切换为静音图标
      } else {
          volumeButton.querySelector('img').src = "pic/音量.svg"; // 切换为音量图标
      }
  });

  // 音量按钮点击事件
  volumeButton.addEventListener('click', () => {
      if (audio.volume > 0) {
          // 保存当前音量
          localStorage.setItem('lastVolume', audio.volume); // 保存当前音量
          audio.volume = 0; // 设置音量为0
          volumeControl.value = 0; // 更新音量控制条
          volumeButton.querySelector('img').src = "pic/静音.svg"; // 切换为静音图标
      } else {
          // 恢复音量
          const lastVolume = localStorage.getItem('lastVolume') || 0.4; // 获取上次音量
          audio.volume = lastVolume; // 恢复音量
          volumeControl.value = lastVolume; // 更新音量控制条
          volumeButton.querySelector('img').src = "pic/音量.svg"; // 切换为音量图标
      }
  });

  // 更新进度条
  audio.addEventListener('timeupdate', () => {
      const percentage = (audio.currentTime / audio.duration) * 100; // 计算进度百分比
      progressBar.style.width = percentage + '%'; // 更新进度条宽度
  });

  // 点击进度条以跳转
  progressContainer.addEventListener('click', (e) => {
      const rect = progressContainer.getBoundingClientRect(); // 获取进度条位置
      const offsetX = e.clientX - rect.left; // 获取点击位置
      const percentage = offsetX / progressContainer.offsetWidth; // 计算点击位置相对进度条的百分比
      audio.currentTime = percentage * audio.duration; // 设置音频当前时间
  });

  // 添加空格键事件监听器
  document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') { // 检查按下的键是否为空格键
          event.preventDefault(); // 防止空格键滚动页面
          if (audio.paused) {
              audio.play();
              playButton.style.display = 'none'; // 隐藏播放按钮
              pauseButton.style.display = 'block'; // 显示暂停按钮
          } else {
              audio.pause();
              playButton.style.display = 'block'; // 显示播放按钮
              pauseButton.style.display = 'none'; // 隐藏暂停按钮
          }
      }
  });
});
