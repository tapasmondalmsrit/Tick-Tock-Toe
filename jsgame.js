
let sign = "x";
let disp = document.getElementById("player");


function printx(number){
    let box = document.getElementById("r"+number);
  console.log(box);
  
  if(box.innerText==""){
  box.innerText=sign;
  winner();
  checksign();
 disp.innerHTML="<center>"+ sign + "  your turn "+"</center>";
 
  }
  
  
}
function checksign(){
    if(sign=="x")sign ="o";
    else sign = "x";
   
}
function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}
function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m){
        document.getElementById("r"+a).style.color = "green"
        document.getElementById("r"+b).style.color = "green"
        document.getElementById("r"+c).style.color = "green"
        return true;
    }

    else
    {
        document.getElementById("r"+a).style.color = "white"
        document.getElementById("r"+b).style.color = "white"
        document.getElementById("r"+c).style.color = "white"
        return false;   
    } 
}

function playagain(){
    for(let i=1;i<=9;i++){
        document.getElementById("r"+i).innerHTML="";
    }
    document.getElementById("playaginBtn").style.display = "none"
    disp.innerHTML = "<center>" +sign + " your turn" + "</center>";
    
}

function showplayagainbtn(){
      document.getElementById("playaginBtn").style.display = "block";
      document.getElementById("playaginBtn").onclick = playagain;
}


function winner(){
if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
    ||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)
    ||checkmove(1,5,9,sign)||checkmove(7,5,3,sign)){
    disp.innerHTML = "<center class='success'>" +sign + " is the  winner" + "</center>";
    showplayagainbtn();
   throw "game end";
}else{
    if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
   getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
   getbox(7)!=""&& getbox(8)!=""&& getbox(9)!=""){
    
    disp.innerHTML = "<center> its a tie </center>";
    showplayagainbtn();
       throw "its a tie";
   }
}
}

