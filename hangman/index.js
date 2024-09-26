let arr = ["Banana", "Orange", "Apple", "Mango"];
let randomValue = arr[Math.floor(Math.random() * arr.length)];
var count = 0;
let right = randomValue.length;
let right_count = 0;
//console.log(randomValue);

for (let i = 0; i < randomValue.length; i++) {
  console.log(randomValue[i]);
  createInputs(randomValue[i]);
}

function createInputs(correct) {
  let container2 = document.getElementById("container2");
  let input = document.createElement("input");
  input.type = "text";
  input.maxLength = "1";
  input.classList.add = "suggest";
  input.addEventListener("input", function () {
    if (input.value == correct) {
      input.disabled = true;
      right_count++;
      if (right_count == right) {
        alert("you win");
      }
    } else {
      wrong();
    }
  });
  container2.appendChild(input);
}
function wrong() {
  count++;

  switch (count) {
    case 1:
      document.getElementById("head").style.display = "block";
      break;
    case 2:
      document.getElementById("body").style.display = "block";
      break;

    case 3:
      document.getElementById("right").style.display = "block";
      break;

    case 4:
      document.getElementById("left").style.display = "block";
      break;

    case 5:
      document.getElementById("leg-right").style.display = "block";
      break;

    case 6:
      document.getElementById("leg-left").style.display = "block";
      alert("try again");
      break;
  }
}

document.getElementById("reset").addEventListener("click", function () {
  window.location.reload();
});
