var scoreBoard = document.getElementsByClassName('scoreBoard');

var score = 0;
var level = 1;
var miss = 0;
var limit = [,15,13,11,9,7,5,3,1];
var speed = [,3000,2750,2500,2250,2000,1750,1500,1250];
var perfect = [,1,2,3,4,5,6,7,8];
scoreBoard[0].innerHTML = '<h2> Score : <span id="score"> ' + score + ' </span> </h2>'
                        + '<h2> Level : <span id="level"> ' + level + ' </span> </h2>'
                        + '<h2> Miss  : <span id="miss"> ' + miss + ' </span> / <span id="limit"> ' + limit[1] + ' </span> </h2>'

var scoreID = document.getElementById('score');
var levelID = document.getElementById('level');
var missID = document.getElementById('miss');
var limitID = document.getElementById('limit');

var boxArea = document.getElementsByClassName('boxArea');
boxArea[0].innerHTML = '<div class="rec"></div>';
var rec = document.getElementsByClassName('rec');

var Random = function (min, max) {
  var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
  return ranNum;
}

var relocation = function (){
  rec[0].style.backgroundColor = "red";
  var rndTop = Random(0,boxArea[0].scrollHeight-50)+'px';
  var rndLeft = Random(0,boxArea[0].scrollWidth-50)+'px';
  rec[0].style.top = rndTop;
  rec[0].style.left = rndLeft;
  setTimeout(relocation, speed[level]);
}

document.addEventListener('DOMContentLoaded', relocation);

var Update = function(){
  miss = 0;
  levelID.innerHTML = level;
  missID.innerHTML = miss;
  limitID.innerHTML = limit[level];
}
// var misClick = function() {
//   judge = true;
//   miss++;
//   missID.innerHTML = miss;
//   if(miss==limit[level]) {
//     alert("You Lose...:c Please Retry!");
//   }
// }
// boxArea[0].addEventListener('click', misClick);
var judge = false;
var ascScore = function() {
  // event.stopPropagation(misClick);
  miss--;
  rec[0].style.backgroundColor = "blue";
  score++;
  if(level==1){
    if(score==perfect[level]){
      level++;
      Update();
    }
  }
  else {
    // console.log(level);
    var sum = 0;
    for (var i = 1; i <= level; i++) {
      sum += perfect[i];
    }
    // console.log(sum);
    if(score==sum){
      level++;
      Update();
    }
  }
  scoreID.innerHTML = score;
}

rec[0].addEventListener('click', ascScore);

var missUpdate = function() {
  console.log(miss);
  miss++;
  missID.innerHTML = miss;
  judge = false;
  if(miss==limit[level]) {
    alert("You Lose...:c Please Retry!");
  }
}

if(judge == false){
  setInterval(missUpdate, speed[level]);
}
