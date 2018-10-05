console.log('app')

var apiKey='39c960cb39da8bdd08c4b818802d8398';
var getText=document.getElementById('searchText').value;
console.log(getText)
var url=`https://dapi.kakao.com/v2/search/web?query=${getText}`;

var myHeader=new Headers();

myHeader.append('Authorization','KakaoAK 39c960cb39da8bdd08c4b818802d8398');
var options={
    headers : myHeader
};

fetch(url,options)
    .then(function(response){
        response.json().then(function(data){
            for(var i = 0; i < data.documents.length; i++) {
                document.write(data.documents[i].title);
            }
        });
    })
