const btnNode = document.getElementById("btn");
const resultNode = document.querySelector(".j-result");

numFieldIsValid = (value) => {
  let num = Number(value);
  if (num < 1 || num > 10 || isNaN(num)) {
    // console.log(num)
    return false;
  } else {
    return true;
  }
};

showCards = (dataCards) => {
  let cards = "";
  dataCards.forEach((element) => {
    const cardBlock = `
        <div class="card">
            <img
            src="${element.download_url}"
            class="card-image"
            width = "200"
            height = "200"
            />
            <p>${element.author}</p>
        </div>
        `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
};

if (localStorage.getItem("tempStorage")) {
  myStorage = localStorage.getItem("tempStorage");
  console.log(myStorage);
  showCards(JSON.parse(myStorage));
}

btnNode.addEventListener("click", () => {
  let pageNumNode = document.getElementById("pageNum").value;
  let limitNode = document.getElementById("limit").value;
  let textNode = document.getElementById("errField");
  textNode.innerHTML = "";

  const pageNumIsValid = numFieldIsValid(pageNumNode);
  const limitIsValid = numFieldIsValid(limitNode);

  if (!pageNumIsValid && !limitIsValid) {
    return (textNode.innerHTML =
      "Номер страницы и лимит вне диапазона от 1 до 10");
  }

  if (!pageNumIsValid) {
    return (textNode.innerHTML = "Номер страницы вне диапазона от 1 до 10");
  }
  if (!limitIsValid) {
    return (textNode.innerHTML = "Лимит вне диапазона от 1 до 10");
  }

  const pageNum = Number(pageNumNode);
  const limit = Number(limitNode);
  const resUrl = `https://picsum.photos/v2/list?page=${pageNum}&limit=${limit}`;

  fetch(resUrl)
    .then((response) => {
      // Объект ответа на запрос
      // Превращаем объект в JSON. Мы не можем его сразу прочитать,
      // надо отдать в следующий then
      const result = response.json();

      return result;
    })
    .then((data) => {
      // Объект результата в формате JSON
      console.log(data);;
      showCards(data);
      localStorage.clear();
      localStorage.setItem("tempStorage", JSON.stringify(data));
    })
    .catch(() => {
      console.log("error");
    });
});
