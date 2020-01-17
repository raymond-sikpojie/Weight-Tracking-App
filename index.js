const textContainer = document.querySelector("#output-container");
const firstLine = document.querySelector("#p1");
const secondLine = document.querySelector("#p2");
const thirdLine = document.querySelector("#p3");
const fourthLine = document.querySelector("#p4");
const numberInput = document.querySelector("#number-input");
const enterButton = document.querySelector("#enter-button");
const resetButton = document.querySelector("#reset");
const form = document.querySelector("#form-container");

let numberArray = [];
if (localStorage.getItem("weight") !== null) {
  numberArray = JSON.parse(localStorage.getItem("weight"));
} else {
  numberArray = [];
}

let secondArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let weightInput = numberInput.value;
  numberArray.push(weightInput);
  localStorage.setItem("weight", JSON.stringify(numberArray));
  secondArray = numberArray.slice(-2);
  if (numberArray.length === 1) {
    thirdLine.textContent = `Today, your weight is ${secondArray[0]} kg`;
    numberInput.value = "";
    fourthLine.textContent = "When next you're here, enter your new weight";
  } else {
    firstLine.textContent = `${weightMath(secondArray[1], secondArray[0])} kg!`;
    secondLine.textContent = `Previous weight was ${secondArray[0]} kg`;
    thirdLine.textContent = `Your currently weigh ${secondArray[1]} kg`;
    fourthLine.textContent = "";
    numberInput.value = "";
    //numberArray = [];
    weightMath(secondArray[1], secondArray[0]);
  }
});

const weightMath = (newWeight, oldWeight) => {
  if (newWeight > oldWeight) {
    return `You gained ${newWeight - oldWeight}`;
  } else {
    return `You lost ${oldWeight - newWeight}`;
  }
};

resetButton.addEventListener("click", (e) => {
  localStorage.removeItem("weight");
  numberArray = [];
  firstLine.textContent = "";
  secondLine.textContent = "";
  thirdLine.textContent = "";
  fourthLine.textContent = "";
});
