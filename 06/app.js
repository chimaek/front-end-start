console.log('app')
/* 강사님 코드
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
*/
var daumSearch={
    init : function(){
        this.apikey='39c960cb39da8bdd08c4b818802d8398';
        this.q=document.getElementById('searchText');
        
        daumWeb.init(10);
    },
    search : function(){
        this.query = '?apikey=' + this.apikey + '&output=json&q=' + encodeURI(this.q.value);
        daumWeb.pingSearch(1);
    },
    pingSearch : function(i, api, pgno, callback, result){
        i.innerHTML = "";
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.charset = 'utf-8';
        s.src = api + this.query + '&pageno=' + pgno + '&callback=' + callback + '&result='+result ; 
        i.appendChild(i);
    },
    pongSearch : function(search, z){
        var ul = document.createElement('ul');
        
        for(var i=0; i<z.channel.item.length; i++){
            //title 정보를 얻음.
            var title = document.createElement('h4');
            var a = document.createElement('a');
            a.href = z.channel.item[i].link;
            a.target = '_blank';
            a.innerHTML = this.escapeHtml(z.channel.item[i].title) 
                + '<br'+'>';

            title.appendChild(a);
            title.appendChild(a);
                
            //세부 내용을 얻음.
            var content = search.getContent(z.channel.item[i]);
            
            //리스트 화.
            ul.appendChild(search.getSearch(title,content));
        }
        return ul;
    },
    /** PageNumber를 그려줌. **/
    pongPgno : function(pgno,max,func){
        var maxpg = (pgno+6<max)?pgno+6:max;
        
        var div = document.createElement('div');
        div.align = 'center';
        div.style.clear = 'left'; 
        
        //좌측 화살표.
        var left = document.createElement('a');
        left.innerHTML = "<< ";
        if(pgno-5>1)
            this.onMouseDown(left,pgno-6,func);
        else{
            left.style.color = "gray";
            left.style.cursor = "default";
        }
        div.appendChild(left);
        
        //페이지 번호.
        for(var i=(pgno-5>1)?pgno-5:1; i<maxpg; i++){
            var a = document.createElement('a');
            a.innerHTML = " " + i + " ";

            if(i==pgno){
                a.style.color = 'yellow';
                a.style.cursor = "default";
            }
            else
                this.onMouseDown(a,i,func);
            
            div.appendChild(a);
        }
        
        //우측 화살표.
        var right = document.createElement('a');
        right.innerHTML = ">> ";
        if(pgno+6<max)
            this.onMouseDown(right,pgno+7,func);
        else{
            right.style.color = "gray";
            right.style.cursor = "default";
        }
        div.appendChild(right);
        
        return div;
    },
    /** 마우스 이벤트. **/
    onMouseDown: function(a, i, func){
        a.style.cursor = 'pointer';
        a.onmousedown = function(){
            func(i);
        }
    },
    /** HTML태그 안 먹게 하는 함수 **/
    escapeHtml: function (str) {
        str = str.replace(/&amp;/g, "&");
        str = str.replace(/&lt;/g, "<");
        str = str.replace(/&gt;/g, ">");
        return str;
    }
};

window.onload = function () {
    daumSearch.init();
    daumSearch.search();
};