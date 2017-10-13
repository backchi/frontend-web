function done(data) {
  console.log("done",data);
}

var btn = document.getElementById('btn');

btn.addEventListener('click', load);

//
// function ajax(url, callback, data, x) {
//   try {
//     x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
//     x.open(data ? 'POST' : 'GET', url, 1);
//     x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     x.onreadystatechange = function () {
//       x.readyState > 3 && callback && callback(x.responseText, x);
//     };
//     x.send(data)
//   } catch (e) {
//     window.console && console.log(e);
//   }
// };

// https://gist.github.com/132080/110d1b68d7328d7bfe7e36617f7df85679a08968
//
var getJSON = (function(){
  var unique = 0;
  return function(url, callback, context) {
    // INIT
    var name = "_jsonp_" + unique++;
    if (url.match(/\?/)) url += "&callback="+name;
    else url += "?callback="+name;

    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Setup handler
    window[name] = function(data){
      callback.call((context || window), data);
      document.getElementsByTagName('head')[0].removeChild(script);
      script = null;
      delete window[name];
    };

    // Load JSON
    document.getElementsByTagName('head')[0].appendChild(script);
  };
})();

function done(responseText) {
  console.log('done:', responseText);
}

function load() {

  console.log(load);

  // var head = document.getElementsByTagName("head")[0];
  // script.type = 'text/javascript';
  // var script = document.createElement('script');
  // script.src = 'http://1boon.kakao.com/issue.json?callback=done';
  // head.appendChild(script);

  getJSON('http://1boon.kakao.com/issue.json',done);
}
// done(
//   {
//     "a"=1,
//     "b"=2
//   }
// )
