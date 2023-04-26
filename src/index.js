const numFromUserInput = document.querySelector("#random-num input");
//const numFromUserVal = numFromUserInput.value; //숫자 최대 범위위
const guessInput = document.querySelector("#guessInput");
const submitBtn = document.getElementById("submitBtn"); //play 버튼
const resultText = document.getElementById("resultText"); //result값 들어올 div

//let randomNum;

// 승부 이김 vs 짐 ?
function bettingNumber(num1, num2) {
  console.log(`num1 ${num1}, num2 ${num2}`);
  if (num1 == num2) {
    // === 사용했을땐 if절 안탔음음
    //이김
    console.log("win");
    resultText.innerHTML += `<h3>YOU WIN!</h3>`;
  } else {
    console.log("lose");
    resultText.innerHTML += `<h3>YOU LOST!</h3>`;
  }
}

function reset() {
  numFromUserInput.value = "";
  guessInput.value = "";
}

//유효성 체크
function verification(guessNumUser, numFromUser) {
  if (guessNumUser > numFromUser) {
    alert("유효한 숫자로 다시 입력하세요");
    reset();
    return false;
  }
  if (guessNumUser < 0) {
    alert("양수로 다시 입력하세요");
    reset();
    return false;
  }
  return true;
}

function submitEvent(e) {
  e.preventDefault(); // 해당이벤트 객체의 기본 실행을 일단 막음
  const numFromUser = numFromUserInput.value;
  const guessNumUser = guessInput.value;
  console.log("guessNumUser" + guessNumUser);
  // 유효성 검사
  if (!verification(guessNumUser, numFromUser)) {
    return false;
  }

  let randomNum;
  randomNum = Math.round(Math.random() * (numFromUser - 0) + 0);

  resultText.innerText = `You chose : ${guessNumUser}, the machine chose : ${randomNum}`;
  bettingNumber(guessNumUser, randomNum);
}

submitBtn.addEventListener("click", submitEvent);

//니꼬쌤 참고 코드

// const guessForm = document.getElementById("js-guess");
// const result = document.getElementById("js-result");
// const maxNumber = document.getElementById("maxNumber");

// function handleGuessSubmit(e) {
//   e.preventDefault();
//   const guessInput = guessForm.querySelector("input");
//   if (guessInput.value === "" && maxNumber === "") {
//     return;
//   }
//   const max = maxNumber.value;
//   const random = Math.ceil(Math.random() * max);
//   const userGuess = parseInt(guessInput.value, 10);
//   const resultSpan = result.querySelector("span");
//   resultSpan.innerHTML = `
//   You chose: ${userGuess},
//   the machine chose: ${random}.<br />
//   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
//   `;
// }

// guessForm.addEventListener("submit", handleGuessSubmit);
