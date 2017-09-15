//1부터 100까지 출력하는 프로그램을 작성

// var str = ", ";
//
// for (var num = 1; num <= 100; num++) {
//   console.log(num + str);
// }

//1~100 사이의 홀수(짝수)를 출력하는 프로그램을 작성


// function odd(num) {
//   if(num%2 !== 0){
//   return num;
//   }
// }
//
// for (var num = 1; num <= 100; num++) {
//   oddnum = odd(num);
//   console.log(oddnum);
// }
//

//구구단 프로그램
// for(var n = 2; n < 10; n++){
//   console.log(n + '단');
//   for (var i = 1; i < 10; i++) {
//     console.log(n +' * i = ', n * i);
//   }
// }


//prompt()를 이용하여 숫자를 입력받아 그 숫자의 합을 구함
var num = true;
var sum = 0;

while(num){
  num = prompt('더하고 싶은 숫자를 입력하세요');
    if(num !== null) {
      sum = sum + parseInt(num,10);
    }
}
console.log(sum);
