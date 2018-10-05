console.log('app')

var apiKey='39c960cb39da8bdd08c4b818802d8398';
var query='제주대학교';
var url=`https://dapi.kakao.com/v2/search/web?query=${query}`;

var myHeader=new Headers();

myHeader.append('Authorization','KakaoAK 39c960cb39da8bdd08c4b818802d8398');
var options={
    headers : myHeader
};

fetch(url,options)
    .then(function(response){
        response.json().then(function(data){
            console.log('json data:',data);
        });
    })
    