// $('div').css('background-color' ,'black')
// console.log($('div').height());
$('div').height(200)

$('div').removeClass('blue')
//
// console.log($('div').offset())  // 위치 반환
// console.log($('div').position())  //상위 요소에 대한 상대 위치

// $('div').addClass('blue')
//
//
// console.log($('img').attr('src'));
// console.log(document.querySelector('img').src);


$('img').attr('src');


// $('div').html('<h2>div</h2>');

console.log($('input').val());

// $('div').addClass('blue').html('<h2>div</h2>'); // 한번에 써서 효율적.

// var div = $('div').addClass('blue');
// div.html('<h2>div</h2>');             //나눠서 사용 시.

// console.log($('input').val());

// $('div').slideUp();

// $('div').animate({'top' : 200},1000);
$('#btn').on('click', function(){
  $('div').animate({'left' : 200},1000);
})


$('#login').click(function(event){

    //동작구현
    window.open($(event.currentTarget).attr('href'), 'login','width=400, height=400');

    //이벤트막고 , 기본동작 중지
    // event.stopPropagation();
    event.preventDefault();

    //return false; 로 대체가능
  });
