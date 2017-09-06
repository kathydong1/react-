var prev = document.getElementById('prev');
var oSpan = document.getElementById('oSpan');
var next = document.getElementById('next');
var oul = document.getElementById('oul');
var n = 0;
show();
next.onclick = function(){
    n++;
    show();
}
prev.onclick = function(){
    n--;
    show();
}

 function show(){
//     var date = new Date();
//     date.setDate(1);
//     date.setMonth(date.getMonth()+n);
//     oSpan.innerHTML = date.getFullYear()+'年'+(date.getMonth()+1)+'月';
//     date.setMonth(date.getMonth()+1);
//     date.setDate(0);
//     var n1 = date.getDate();
//     var date = new Date();
//     date.setDate(1);
//     date.setMonth(date.getMonth()+n);
//     var n2 = date.getDay();
//     if(n2==0){
//         n2 = 7;
//     }
//     var date = new Date();
//     var n3 = date.getDate();
//     var str = '';
//     for(var i=0;i<n2-1;i++){
//         str += '<li></li>';
//     }
//     for(var i=0;i<n1;i++){
//         str += '<li>'+(i+1)+'</li>';
//     }
//     oul.innerHTML = str;
//     var lis = oul.getElementsByTagName('li');
//     for(var i=0;i<lis.length;i++){
//         if(n<0){
//             lis[i].className = 'gray';
//         }else if(n==0){
//             if(i<n3-1+n2-1){
//                 lis[i].className = 'gray';
//             }else{
//                 if(i%7==5||i%7==6){
//                     lis[i].className = 'red';
//                 }
//             }
//             if(i==n3-1+n2-1){
//                 lis[i].className += ' active';
//             }
//         }else{
//             if(i%7==5||i%7==6){
//                 lis[i].className = 'red';
//             }
//         }
//     }
    
 }