// 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때, N명의 학생수를 입력한다면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
// (예를 들어 25명의 학생수가 있다면 3다스가 필요합니다. / 178명의 학생수가 있다면 15다스가 필요합니다.)

// 연필 1다스 (a) === 12자루 (b*12)
// 1자루 (b) === 학생 1명 (c)
// 학생 12명 (c*12) === 연필 1다스 (a)

let students = prompt("학생 수를 입력하세요");

if (isNaN(students) || students === "") {
  alert("값을 다시 입력헤주세요");
  students = parseInt(students);
} else {
  let dase;

  if (students % 12 === 0) {
    dase = students / 12;
  } else {
    dase = parseInt(students / 12) + 1;
  }

  alert(`필요한 연필 다스 수는 ${dase}다스입니다.`);
}
