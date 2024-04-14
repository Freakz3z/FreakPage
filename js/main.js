// 加载动画
var loader = document.getElementById("loader");
window.addEventListener("load", function() {
  setTimeout(function() {
    loader.style.display = "none";
  }, 2000);
});

// 禁用右键
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  });

// IP
var city = '';

fetch('https://www.mxnzp.com/api/ip/self?app_id=jfmnsns7irehsmjx&app_secret=hoLhLGu7MMQRDbBHbq09QAdUCGOCgKk2')
  .then(response => response.json())
  .then(data => {
    city = data.data.city;
  })
  .catch(error => console.log(error));

// 天气
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const weatherButton = document.querySelector('.weather');
    let isCurrentWeather = true;

    function getWeatherData() {
      const address = city;
      let apiUrl = '';

      if (isCurrentWeather) {
        apiUrl = `https://www.mxnzp.com/api/weather/current/${address}?app_id=jfmnsns7irehsmjx&app_secret=hoLhLGu7MMQRDbBHbq09QAdUCGOCgKk2`;
      } else {
        apiUrl = `https://www.mxnzp.com/api/weather/forecast/${address}?app_id=jfmnsns7irehsmjx&app_secret=hoLhLGu7MMQRDbBHbq09QAdUCGOCgKk2`;
      }

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          let weatherText = '';

          if (data.code === 1) {
            if (isCurrentWeather) {
              const temp = data.data.temp;
              const weather = data.data.weather;
              weatherText = `Wait For Sunrise\n${address}  天气${weather}  温度${temp}`;
            } else {
              const forecasts = data.data.forecasts;

              if (forecasts && forecasts.length > 0) {
                const todayForecast = forecasts[0];
                const date = todayForecast.date;
                const dayOfWeek = todayForecast.dayOfWeek;
                const dayWeather = todayForecast.dayWeather;
                const nightWeather = todayForecast.nightWeather;
                const dayTemp = todayForecast.dayTemp;
                const nightTemp = todayForecast.nightTemp;

                weatherText = `Wait For Sunset\n${dayWeather}~${nightWeather}  ${dayTemp}~${nightTemp}`;
              } else {
                weatherText = '没有可用的天气预报数据';
              }
            }
          } else {
            weatherText = '请点击刷新天气';
          }

          if (weatherButton) {
            weatherButton.innerText = weatherText;
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
    setTimeout(() => {
      getWeatherData();
    }, 500);
    if (weatherButton) {
      weatherButton.addEventListener('click', () => {
        isCurrentWeather = !isCurrentWeather;
        getWeatherData();
        showMessage("天气已经更新");
      });
    }
  }, 1000);
});

// 一言
$(document).ready(function() {
    fetch('https://v1.hitokoto.cn?max_length=30')
          .then(response => response.json())
          .then(data => {
              $('.one-word_text').html(data.hitokoto)
              $('.one-word_from').html('——「' + data.from + '」')
          })
          .catch(console.error)
    });

//更新一言
$('.one-word').on('click', function() {
  // 禁用按钮
  $('.one-word').prop('disabled', true);
    showMessage("一言已经更新");
  setTimeout(() => {
    fetch('https://v1.hitokoto.cn?max_length=30')
      .then(response => response.json())
      .then(data => {
        $('.one-word_text').html(data.hitokoto);
        $('.one-word_from').html('——「' + data.from + '」');
      })
      .catch(console.error)
      .finally(() => {
        // 启用按钮
        $('.one-word').prop('disabled', false);
      });
  }, 1000);
});

// more
var more = document.getElementById("more");
var more_container = document.getElementById("more-container");
var mid_container = document.getElementById("mid-container");

more.addEventListener("click", function() {
  if (mid_container.style.opacity === "0") {
    mid_container.style.opacity = "1";
    more_container.style.opacity = "0";
    more_container.style.pointerEvents = "none";
  } else {
    mid_container.style.opacity = "0";
    more_container.style.opacity = "1";
    more_container.style.pointerEvents = "auto";
  }
});

// 获取容器元素
var container = document.getElementById("saying");
// 创建新的元素
var p1 = document.createElement("p");
var p2 = document.createElement("p");
p1.textContent = "WeChat/GitHub : Freakz3z";
p2.textContent = "如果想要了解更多关于本个人主页的信息，可以点击头像去到该项目地址。";
// 将新元素添加到容器中
container.appendChild(p1);
container.appendChild(p2);