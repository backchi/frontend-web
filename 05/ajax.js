console.log('ajax.js');

var btn = document.getElementById('btn');

btn.addEventListener('click', load);

function load() {
  console.log('load');

  var request = new XMLHttpRequest();

  // request.open('GET','dummy.json', true);
  // request.open('GET','http://1boon.kakao.com/', true);  // access 할 수 없다. 보안에 위배
  request.open('GET','http://1boon.kakao.com/issue.html', true);  // access 할 수 없다. 보안에 위배


  // console.log(request);

  // request.onreadystatechange = function() {
  //   console.log(request.readyState);
  // }

request.onreadystatechange =function() {
  if(request.readyState ===4){
    if(request.status === 200){
      console.log(request.responseText);
    }
  }
}
  request.send();
  console.log('send');
}
