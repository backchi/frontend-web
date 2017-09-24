
var board = document.getElementById("board");
var bgColor;

for(var j=0; j<=1; j++){
  for (var i = 0; i <=3; i++) {
    if(i%2==0){ bgColor='white' }
    else {bgColor='black'}
    board.innerHTML += "<div style = \"background-color:"+bgColor+"\"></div>";
  }
  for (var k = 4; k <=7; k++) {
    if(k%2==0){ bgColor='black' }
    else {bgColor='white'}
    board.innerHTML += "<div style = \"background-color:"+bgColor+"\"></div>";
  }
}

document.addEventListener("DOMContentLoaded", function(event){
  var divs = document.querySelectorAll('#board div');
  var beforeBg;
  var beforeTarget;
  var first = true;

  function changeRed(event){
    if (first == true) {
      first = false;
    }
    else {
      // console.log(beforeBg);
      // console.log(beforeTarget);
      beforeTarget.style.backgroundColor = beforeBg;
    }
    // console.log('changeRed');
    beforeTarget = event.currentTarget;
    beforeBg = event.currentTarget.style.backgroundColor;
    event.currentTarget.style.backgroundColor = 'red';
  }

  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener ('click', changeRed);
  }
});
