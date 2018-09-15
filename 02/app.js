
var str='Hello World!';
console.log(str);
function me1(){
    for(var i=1;i<=100;i++){
        console.log(i)
    }
}
function me2(){
    for(var i=1;i<=100;i++){
        if(i%2==1){
            console.log(i)
        }
    }
}
function me3() {
    for(var i=2;i<=9;i++){
        for(var j=1;j<=9;j++){
            console.log(i +" x " + j+" = " +i*j)
        }
    }
}
me1()
me2()
me3()
