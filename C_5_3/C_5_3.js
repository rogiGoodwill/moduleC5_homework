const btnNode = document.getElementById("btn");
const resultNode = document.querySelector(".j-result");
// console.log(numField);

numFieldIsValid = (num) => {
  let num = Number(num);
  let textNode = document.getElementById("errField");
  if (num < 1 || num > 10 || isNaN(num)) {
    return (textNode.innerHTML = "число вне диапазона от 1 до 10");
  } else {
    // textNode.innerHTML = num;
    return num;
  }
};

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };

  xhr.send();
}

function displayResult(apiData) {
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener("click", () => {
  let value = document.querySelector("input").value;
  value = numFieldIsValid(value);
  if (typeof value === "number") {
    useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult);
  }
});
