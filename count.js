function sub(){
    var n = parseInt(document.getElementById("count").innerHTML);

      n=n-1;
    document.getElementById("count").innerHTML = n;
}
function add(){
    var n = parseInt(document.getElementById("count").innerHTML);
   
    n=n+1;
    document.getElementById("count").innerHTML=n;
}
function reset(){
    var n = parseInt(document.getElementById("count").innerHTML);
    n=0;
    document.getElementById("count").innerHTML=n;
}