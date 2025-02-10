// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어졌을 때, 이 세 막대로 삼각형을 만들 수 있다면 콘솔창에 "Yes"를 출력하고, 만들 수 없으면 "No"를 출력한다.
// (*삼각형이 되려면 두 변의 길이의 합이 나머지 한 변의 길이 값보다 커야합니다.)

// 받야야 하는 값 = a, b, c
// 문자 x , 공백 x , 중복된 값 x
// isNaN(a) || a === "" || b === a ||  c === a || c === b
// 조건 두 변의 합이 나머지 한 변보다 커야 함 (두변의 합 = twoSide ) > ( 한변의 길이 = oneSide )
// 결과 : 조건이 trur = "Yes" , false = "No"

let a = prompt("A의 길이를 입력해주세요");
if (isNaN(a) || a === "") {
  alert("값을 다시 입력해주세요");
  window.location.reload();
} else {
  let b = prompt("B의 길이를 입력해주세요", `${a}제외`);
  while (isNaN(b) || b === "" || b === a) {
    alert("값을 다시 입력해주세요");
    b = prompt("B의 길이를 입력해주세요", `${a} 제외`);
  }
  let c = prompt("B의 길이를 입력해주세요", `${a},${b}제외`);
  while (isNaN(c) || c === "" || c === a || c === b) {
    alert("값을 다시 입력해주세요");
    c = prompt("C의 길이를 입력해주세요", `${a},${b} 제외`);
  }

  a = Number(a);
  b = Number(b);
  c = Number(c);

  let oneSide = Math.max(a, b, c);
  let twoSide = a + b + c - oneSide;

  if (twoSide > oneSide) {
    alert(`${a},${b},${c}의 값으로는 삼각형이 가능합니다`);
    console.log("Yes");
  } else {
    alert(`${a},${b},${c}의 값으로는 삼각형이 불가합니다`);
    console.log("No");
  }
}
