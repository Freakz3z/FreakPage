function sendToGpt(user_message, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.chatanywhere.com.cn/v1/chat/completions");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer sk-MS5nNeNmPWYK7b453xSkD8nbGdgaWAqtRKiRi9cVx4CN60WV");
  
    var payload = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": user_message
        }]
    });
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var answer = response.choices[0].message.content;
        callback(answer); // 调用回调函数，并传递 answer 值
      }
    };
  
    xhr.send(payload);
  }
  

  
    // 调用 sendToGpt 函数，并传递回调函数来处理 answer 的返回值
    //   sendToGpt("你好", function (answer) {
    //     console.log(answer); // 在回调函数中获取 answer 的值
    //   });