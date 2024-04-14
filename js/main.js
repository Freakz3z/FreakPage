// 加载动画
var loader = document.getElementById("loader");
window.addEventListener("load", function() {
  setTimeout(function() {
    loader.style.display = "none";
  }, 2000);
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
    getWeatherData();

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