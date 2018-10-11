
var myHeader=new Headers(); //헤더를 생성함
myHeader.append('Authorization','KakaoAK 39c960cb39da8bdd08c4b818802d8398'); //헤더에 다음에 요청할 값 추가
var options={
    headers : myHeader
};
var page; //페이지 번호저장
var getText=''; //입력된 값을 가져옴
var url=''; 
var str='';
var contain10= document.getElementById('contain10'); //contain10 클래스를 선택함
function search(){  //검색버튼을 누르면 실행되는 함수 작성
    document.getElementById('nextBtn').style.display="block"; //다음 버튼 보여줌
    page=1;
    getText=document.getElementById('searchText').value; //텍스트에 입력된 값을 변수에 저장
    if(getText=='') alert("검색어를 입력하세요.");
    url=`https://dapi.kakao.com/v2/search/web?query=${getText}&page=${page}`; //url 지정
    fetch(url,options)
        .then(function(response){
            response.json().then(function(data){
                str=''; 
                for(var i = 0; i < data.documents.length; i++) {    //div태그를 만들어 html에 넣어줌.
                    str += '<div id=contain>'+'<a href='+data.documents[i].url+'>'+ data.documents[i].title +'</a></div>';
                    contain10.innerHTML=str;
                }
            })
        })
    }

function nextBtn(){
    page+=1;  // page증가
    url=`https://dapi.kakao.com/v2/search/web?query=${getText}&page=${page}`; //url 지정
    fetch(url,options)
        .then(function (response){
            response.json().then(function(data){
                for(var j=0; j<data.documents.length; j++){
                    str += '<div id=contain>'+'<a href='+data.documents[j].url+'>'+ data.documents[j].title +'</a></div>';
                    contain10.innerHTML=str;
                }
            })
        })
}

document.getElementById('searchSubmit').addEventListener('click',search);
document.getElementById('nextBtn').addEventListener('click',nextBtn);

