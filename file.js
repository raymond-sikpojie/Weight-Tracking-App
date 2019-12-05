const input = document.querySelector(".text-input");
const addButton = document.querySelector(".button");

addButton.addEventListener("click", e => {
  let newInput = input.value;

  let arr = [];
  let id = 0;

  let test = Math.floor(Math.random() * 20);
  console.log(test);

  let weightStore = {
    oldWeight: newInput,
    newWeight: test,
    id: id
  };
  arr.push(weightStore);

  // storing the data input
  localStorage.setItem("kilos", JSON.stringify(arr));

  let data = JSON.parse(localStorage.getItem("kilos"));

  // const newData = data.filter(item => {
  //   return item;
  // });

  console.log(data[0].oldWeight);
  // if (arr) {
  //   JSON.parse(data);
  // } else {
  //   arr = [];
  //   id = 0;
  // }

  // Calculate the weight difference
  const weightChange = (oldWeight, newWeight) => {
    if (newWeight > oldWeight) {
      return `You lost ${newWeight - oldWeight} kg!`;
    } else {
      return `You gained ${oldWeight - newWeight} kg!`;
    }
  };

  weightStore.odlWeight = 15;
  console.log(weightChange(weightStore.newWeight, weightStore.oldWeight));
  input.value = "";
  //location.reload();
});
