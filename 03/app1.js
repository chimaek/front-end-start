function test(){
    console.log("test()");
}
// var id =setTimeout(test,100);
var id=setInterval(test,1000);

var head=document.querySelector('head');
var script=document.createElement('script');
script