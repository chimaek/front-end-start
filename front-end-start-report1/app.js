pagesize=10;
page=0;

var list=document.getElementById('list');

//*************** 클릭하여 탭이 바뀌는 이벤트 ***************//

var allBoard=document.querySelectorAll('.nav > li'); //nav클래스 밑에 있는 리스트 선택
var changeBlock=null;
for(var i=0;i<allBoard.length;i++){
  allBoard[i].addEventListener('click',function select(event){

    var board=event.currentTarget;
    
    if(changeBlock){
      changeBlock.classList.remove("active")
    }
    board.classList.add("active")
    changeBlock=board;
    });
    
}
//*************** 트렌딩누르면 리스트에 보여주는 이벤트 ***************//

allBoard[0].addEventListener('click',function trending(){
    page=1;
    url_trending="https://1boon.kakao.com/ch/trending.json?pagesize="+pagesize+"&page="+page;
    fetch(url_trending).then(function(response){
        response.json().then(function(json){
            str='';
            var data = json.data;
            for(var i=0;i<data.length;i++){
                var title=data[i].title;
                var coverImage=data[i].coverImage;
                var path=data[i].path;
                var totalView=data[i].totalView;
                str += `<div id="contain"> <a href="https://1boon.kakao.com/${path}"> <img src="${coverImage}" width="200px" height="100px"> ${title} <br> 총 조회수: ${totalView} </a> </div> `;
            }
            list.innerHTML=str;
        })
    })
})
//*************** 이슈누르면 리스트에 보여주는 이벤트 ***************//
allBoard[1].addEventListener('click',function issue(){
    page=1;
    url_issue="https://1boon.kakao.com/ch/issue.json?pagesize="+pagesize+"&page="+page;
    fetch(url_issue).then(function(response){
        response.json().then(function(json){
            str='';
            var data = json.data;
            for(var i=0;i<data.length;i++){
                var title=data[i].title;
                var coverImage=data[i].coverImage;
                var path=data[i].path;
                var totalView=data[i].totalView;
                str += `<div id="contain"> <a href="https://1boon.kakao.com/${path}"> <img src="${coverImage}" width="200px" height="100px"> ${title} <br> 총 조회수: ${totalView} </a> </div> `;
            }
            list.innerHTML=str;
        })
    })
})
//*************** 엔터누르면 리스트에 보여주는 이벤트 ***************//
allBoard[2].addEventListener('click',function enter(){
    page=1;
    url_enter="https://1boon.kakao.com/ch/enter.json?pagesize="+pagesize+"&page="+page;
    fetch(url_enter).then(function(response){
        response.json().then(function(json){
            str='';
            var data = json.data;
            for(var i=0;i<data.length;i++){
                var title=data[i].title;
                var coverImage=data[i].coverImage;
                var path=data[i].path;
                var totalView=data[i].totalView;
                str += `<div id="contain"> <a href="https://1boon.kakao.com/${path}"> <img src="${coverImage}" width="200px" height="100px"> ${title} <br> 총 조회수: ${totalView} </a> </div> `;
            }
            list.innerHTML=str;
        })
    })
})


//*************** 더보기 클릭. ***************//
document.querySelector('.btn').addEventListener('click',function nextBtn(){
    page+=1;
    if(document.querySelector('.active').innerText=="트렌딩"){
        url_trending="https://1boon.kakao.com/ch/trending.json?pagesize="+pagesize+"&page="+page;
        
        fetch(url_trending).then(function(response){
            response.json().then(function(json){
                var data = json.data;
                for(var i=0;i<data.length;i++){
                    var title=data[i].title;
                    var coverImage=data[i].coverImage;
                    var path=data[i].path;
                    var totalView=data[i].totalView;
                    str += `<div id="contain"> <a href="https://1boon.kakao.com/${path}"> <img src="${coverImage}" width="200px" height="100px"> ${title} <br> 총 조회수: ${totalView} </a> </div> `;
                }
                list.innerHTML=str;
            })
        })
    }else if(document.querySelector('.active').innerText=="이슈"){
        url_issue="https://1boon.kakao.com/ch/issue.json?pagesize="+pagesize+"&page="+page;
        fetch(url_issue).then(function(response){
            response.json().then(function(json){
                var data = json.data;
                for(var i=0;i<data.length;i++){
                    var title=data[i].title;
                    var coverImage=data[i].coverImage;
                    var path=data[i].path;
                    var totalView=data[i].totalView;
                    str += `<div id="contain"> <a href="https://1boon.kakao.com/${path}"> <img src="${coverImage}" width="200px" height="100px"> ${title} <br> 총 조회수: ${totalView} </a> </div> `;
                }
                list.innerHTML=str;
            })
        })
    }else if(document.querySelector('.active').innerText=="엔터"){
        url_enter="https://1boon.kakao.com/ch/enter.json?pagesize="+pagesize+"&page="+page;
        fetch(url_enter).then(function(response){
            response.json().then(function(json){
                var data = json.data;
                for(var i=0;i<data.length;i++){
                    var title=data[i].title;
                    var coverImage=data[i].coverImage;
                    var path=data[i].path;
                    var totalView=data[i].totalView;
                    str += `<div id="contain"> <a href="https://1boon.kakao.com/${path}"> <img src="${coverImage}" width="200px" height="100px"> ${title} <br> 총 조회수: ${totalView} </a> </div> `;
                }
                list.innerHTML=str;
            })
        })
    }
});

//*********로딩화면 ************//

