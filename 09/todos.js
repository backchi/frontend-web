//start...

var inputingField = document.getElementById('inputing');

// inputingField.addEventListener('keyup', function(event));

var todoList = document.getElementById('todoList');
//
var moreList = function(str){
  todoList.innerHTML += '\
                 <li>\
                 <button class="delete">×</button>\
                 <input type="checkbox" class="toggle-checked">\
                 <span class="text">''</span>\
                 </li>';
//   var del = document.getElementsByClassName("delete");
//   var checkBox = document.getElementsByClassName("toggle-checked");
//
//   for (var i = 0; i < del.length; i++) {
//     del[i].addEventListener('click',eraser);
//     checkBox[i].addEventListener('change',finish);
//   }
// }
//
// var eraser = function(){
//   this.parentNode.parentNode.removeChild(this.parentNode);
// }
//
// var finish = function(){
//   if(this.checked)
//     this.nextSibling.style.textDecoration="line-through";
//   else
//     this.nextSibling.style.textDecoration="none";
// }
//
// // moreList("JS공부하기");
// // moreList("다희");
// // moreList("과제");
//
// var input = document.getElementsByName("text");
//
// var pull = function(e){
//   if(e.keyCode == 13){
//     if(input[0].value){
//       moreList(input[0].value);
//       input[0].value = null;
//     }
//   }
// }
// input[0].addEventListener('keypress', pull);
