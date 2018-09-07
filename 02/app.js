<<<<<<< HEAD
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
function me3(){
    for(var i=2;i<=9;i++){
        for(var j=1;j<=9;j++){
            console.log(i +" x " + j+" = " +i*j)
        }
    }
}
me1()
me2()
me3()
=======
for(var i=1; i<101; i++)
    console.log(i)

for(var j=1; j<101; j++){
    if(j % 2 == 1)
        console.log(j)
}

for(var k=2; k<10; k++){
    for(var n=1; n<10; n++){
       console.log(k+' * '+n+' = '+k*n);
    }
}
>>>>>>> 8d032a2875f884fc09762f33aa5262e7a9bdbc3c
