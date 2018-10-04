console.log('1boon');

var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10';
var nextpage = 0; //버튼 클릭시 페이지를 증가시키기 위한 변수 선언

function reply_click(clicked_id){
      nextpage++;   // 클릭할 때 마다 nextpage가 증가
      url = 'https://1boon.kakao.com/ch/enter.json?page=' + (clicked_id)+nextpage + '&pagesize=10'; // 클릭할 때 마다 다음 페이지를 보여줌
      getUrlData(url, print);
      
}

getUrlData(url, print);

function print(json) {
  console.log(json);

  var str = '';

  for (var i = 0; i < json.data.length; i++) {
    var title = json.data[i].title;
    var path = json.data[i].path;

    // str +=
    //   '<a href="https://1boon.kakao.com/' +
    //   path +
    //   '" target="_blank">' +
    //   title +
    //   '</a><br>';

    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
    str += `<a href="http://1boon.kakao.com/${path}" target="_blank">${title}</a><br>`;  
  }

  document.getElementById('wrap').innerHTML = str;
}

  

function getUrlData(url, callback) {
  fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        // console.log('json data:', data);
        callback(data);
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}