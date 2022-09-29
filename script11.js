const div = document.getElementById("div11");
div.onclick = function(){
  div.style.display = "none";
  audioe11a.play();


}

let audioe11a = new Audio();
audioe11a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Perr%C3%ADsima_E2.mp3?v=1664425055310";
audioe11a.loop="true";
audioe11a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene11a");
s1.onmouseover = ()=>{
  audioe11a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe11a.volume = 0;
  
}