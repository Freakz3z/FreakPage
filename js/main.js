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
              weatherText = `「隐约雷鸣 阴霾天空」\n${address}  ${weather}  温度${temp}`;
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

                weatherText = `「即使天无雨 我亦留此地」\n早${dayWeather}~晚${nightWeather}  早${dayTemp}~晚${nightTemp}`;
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
        showMessage("天气正在更新");
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

// 更新一言
// $('.one-word').on('click', function() {
//   // 禁用按钮
//   $('.one-word').prop('disabled', true);
//     showMessage("一言正在更新");
//   setTimeout(() => {
//     fetch('https://v1.hitokoto.cn?max_length=30')
//       .then(response => response.json())
//       .then(data => {
//         $('.one-word_text').html(data.hitokoto);
//         $('.one-word_from').html('——「' + data.from + '」');
//       })
//       .catch(console.error)
//       .finally(() => {
//         // 启用按钮
//         $('.one-word').prop('disabled', false);
//       });
//   }, 1000);
// });

document.addEventListener('DOMContentLoaded', () => {
  const randomIndex = Math.floor(Math.random() * 2) + 1;
  const backgroundImage = `bg/${randomIndex}.png`; // 构造图片路径

  // 设置背景图片
  const backgroundImageElement = document.getElementById('background');
  backgroundImageElement.src = backgroundImage; // 更新src属性
});

console.log( 
` _____               _    
|  ___| __ ___  __ _| | __
| |_ | '__/ _ \\/ _' | |/ /
|  _|| | |  __/ (_| |   < 
|_|  |_|  \\___|\\__,_|_|\\_\\ 

博客: https://freak.cpolar.top

GitHub: https://github.com/Freakz3z

`);