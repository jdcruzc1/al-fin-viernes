const div = document.getElementById("div6");
div.onclick = function(){
  div.style.display = "none";
  audioe6a.play();


}

let audioe6a = new Audio();
audioe6a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Perr%C3%ADsima_E2.mp3?v=1664425055310";
audioe6a.loop="true";
audioe6a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene6a");
s1.onmouseover = ()=>{
  audioe6a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe6a.volume = 0;
  
}
  
