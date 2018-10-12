//$('h1').html('hi');

//$('h1').fadeOut().delay(1000).fadeIn();
/*
var divs=document.querySelectorAll('div');
for(var i=0;i<divs.length;i++){  
    divs[i].style.backgroundColor='red';
}
*/

/*var $div=$('div')

$div
$('div')
    .css("background-color",'yellow')
    .css('border-color','red');
    */

    var $btn=$('#btn');
    var $txt=$('#txt');
    var $debug=$('#debug');

    $btn.on('click',function(event){
        console.log('click')
        if($txt.val()===''){
            alert('검색어를 입려해주세요');
            return;
        }

        $debug.html($txt.val());

    });
