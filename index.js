// var wholebody=document.getElementsByTagName('body');
// window.onKeyDown=function(e){
//     console.log(e.keyCode);
// }
var eventObj;
window.document.addEventListener('keyup',function(e){
    // console.log(e.keyCode);
    eventObj=e.key;
    console.log(eventObj);
    var selectedId;
    switch(eventObj){
        case 97:
            selectedId='a';
            break;
        case 115:
            selectedId='s';
            break;
        case 100:
            selectedId='d';
            break;
        case 102:
            selectedId='f';
            break;
        case 103:
            selectedId='g';
            break;
        case 104:
            selectedId='h';
            break;
        case 106:
            selectedId='j';
            break;
        case 107:
            selectedId='k';
            break;
        case 108:
            selectedId='l';
            break;
    }
    console.log(selectedId);
    var selectedEle=document.getElementById(selectedId);
    console.log(selectedEle);
    selectedEle.classList.add('keyP');
    // setTimeout(function(){
    //     selectedEle.classList.remove('keyP');
    // },1000)
})

// window.document.addEventListener('keydown',function(e){
//     var storage=e.keyCode;
//     console.log(storage);
//     console.log("a key was clicked")
// })

