const div = document.getElementById("div15");
div.onclick = function(){
  div.style.display = "none";
  audioe15a.play();


}

let audioe15a = new Audio();
audioe15a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Perr%C3%ADsima_E2.mp3?v=1664425055310";
audioe15a.loop="true";
audioe15a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene15a");
s1.onmouseover = ()=>{
  audioe15a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe15a.volume = 0;
  
}