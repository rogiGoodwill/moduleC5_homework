const btnNode = document.getElementById("btn");
const resultNode = document.querySelector(".j-result");

numFieldIsValid = (value) => {
  let num = Number(value);
  if (num < 100 || num > 300 || isNaN(num)) {
    // console.log(num)
    return false;
  } else {
    return true;
  }
};

btnNode.addEventListener("click", () => {
  let withNode = document.getElementById("txtWidth").value;
  let heightNode = document.getElementById("txtHeight").value;
  let textNode = document.getElementById("errField");
  textNode.innerHTML = "";

  checkValues = () => {
    return numFieldIsValid(withNode) === true && numFieldIsValid(heightNode) === true;
  };

  if (!checkValues()) {
    return (textNode.innerHTML = "одно из чисел вне диапазона от 100 до 300");
  } else {
    const withNum = Number(withNode);
    const heightNum = Number(heightNode);
    const resUrl = `https://picsum.photos/${withNum}/${heightNum}`;
    // console.log('Все правильно')
    fetch(resUrl).then(() => {
      const cardBlock = `
            <div class="card">
              <img
                src="${resUrl}"
                class="card-image"
              />
            </div>
          `;
      resultNode.innerHTML = cardBlock;
    });
  }
});
