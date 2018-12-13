var textarea=document.getElementById('memo');

//새 노트 클릭시 이벤트 발생 함수
function reset(){
    textarea.value="";
};
// 노트저장 클릭시 스토리지에 저장하는 이벤트 발생 함수
function noteSave(){
        localStorage.setItem("note",textarea.value);
        alert("노트의 내용이 저장되었습니다.");
};
// 저장된 내용 불러오기
window.onload=function(){
    if(localStorage.length>=1){
        textarea.value=localStorage.getItem("note");
    }
};
//파일 저장하기 구현 (filesaver 사용)
function noteDownload(){
    var blob = new Blob([textarea.value], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Note.txt");
}
// 전체화면 구현
function fullScreen(){
    
        screenfull.request();
    
}