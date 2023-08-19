let inputtedNumber = 0;
let parsedInputtedNumber = null;
let errorText = document.getElementsByClassName("inputError")[0];
let doneText = document.getElementsByClassName("doneText")[0];
let confirmBtn = document.getElementsByClassName("confirmBtn")[0];
let numberInput = document.getElementsByClassName("numberInput")[0];

document.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    restrictionChecker();
  }
});

function restrictionChecker(e) {
  inputtedNumber = document.getElementsByClassName("numberInput")[0].value;
  parsedInputtedNumber = parseInt(inputtedNumber);

  if (!Number.isInteger(parsedInputtedNumber)) {
    errorText.innerHTML = "خطا! فقط کاراکتر عددی مورد قبول است";
    errorText.classList.remove("hidden");
    doneText.classList.add("hidden");
    numberInput.value = "";
    setTimeout(() => {
      errorText.classList.add("hidden");
    }, 3000);
  } else {
    if (parsedInputtedNumber <= 0) {
      errorText.innerHTML = "خطا! عدد وارد شده باید بیشتر از صفر باشد";
      errorText.classList.remove("hidden");
      doneText.classList.add("hidden");
      numberInput.value = "";
      setTimeout(() => {
        errorText.classList.add("hidden");
      }, 3000);
    } else {
      if (parsedInputtedNumber > 19) {
        errorText.innerHTML = "خطا! فقط عدد یک تا بیست مورد قبول است";
        errorText.classList.remove("hidden");
        doneText.classList.add("hidden");
        numberInput.value = "";
        setTimeout(() => {
          errorText.classList.add("hidden");
        }, 3000);
      } else {
        document.getElementsByClassName("inputtedNumber")[0].innerHTML =
          inputtedNumber;
        errorText.classList.add("hidden");
        doneText.classList.remove("hidden");
        numberInput.value = "";
        console.clear();
        printer();
      }
    }
  }
}

// راه حل با استفاده از فور
// function printer() {
//   let star = "*";
//   let newStar = "*";
//   console.log(star);
//   for (let i = 1; i < parsedInputtedNumber; i++) {
//     console.log(`${star}${newStar}`);
//     newStar += star;
//   }

// راه حل با استفاده از فور تو در تو
function printer() {
  let star = "";
  for (i = parsedInputtedNumber; i >= 1; i--) {
    for (j = i; j >= i; j--) {
      star += "*";
    }
    console.log(star);
  }
  for (i = parsedInputtedNumber; i >= 2; i--) {
    for (j = i; j >= i; j--) {
      star = star.replace("*", "");
    }
    console.log(star);
  }

  // راه حل با استفاده از آرایه
  // function printer() {
  //   let star = ["*"];
  //   console.log(star);
  //   for (let i = 1; i < parsedInputtedNumber; i++) {
  //     star.push("*");
  //     console.log(star);
  //   }
  //   for (let j = 1; j < parsedInputtedNumber; j++) {
  //     star.pop("*");
  //     console.log(star);
  //   }

  confirmBtn.style.visibility = "hidden";
  confirmBtn.style.opacity = "0";
  confirmBtn.style.transition = "visibility 0s .5s, opacity .5s linear";

  setInterval(() => {
    confirmBtn.innerHTML = "تلاش مجدد";
    confirmBtn.style.visibility = "visible";
    confirmBtn.style.opacity = "1";
    confirmBtn.style.transition = "opacity 2s linear";
  }, 500);
}
