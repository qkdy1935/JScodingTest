// 세 숫자를 입력받고 가장 작은 값을 출력하는 프로그램

// 유효한 입력을 받을 때까지 계속해서 입력을 받는 함수
function getValidNumber(promptMessage) {
  let num;
  do {
    num = prompt(promptMessage); // 사용자로부터 입력을 받는다
    // 입력값이 숫자이고 1에서 100 사이의 자연수인지 확인
    if (isNaN(num) || num <= 0 || num > 100 || num === "") {
      alert("자연수만 입력해 주세요. 100 이하의 자연수만 입력해주세요.");
    }
  } while (isNaN(num) || num <= 0 || num > 100 || num === ""); // 조건이 맞지 않으면 계속 반복
  return parseInt(num); // 문자열을 정수로 변환해서 반환
}

// 세 숫자 입력 받기
let A = getValidNumber("100 이하의 첫 번째 숫자를 입력하세요");
let B = getValidNumber("100 이하의 두 번째 숫자를 입력하세요");
let C = getValidNumber("100 이하의 세 번째 숫자를 입력하세요");

// 세 숫자 중 가장 작은 값 찾기
let smallest = Math.min(A, B, C);

// 결과 출력
console.log(`가장 작은 값은 ${smallest} 입니다.`);
