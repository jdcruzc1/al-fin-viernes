const div = document.getElementById("div3");
div.onclick = function(){
  div.style.display = "none";
  audioe4a.play();
  audioe4b.play();

}

let audioe4a = new Audio();
audioe4a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Perr%C3%ADsima_E2.mp3?v=1664425055310";
audioe4a.loop="true";
audioe4a.volume = 0;

let audioe3b = new Audio();
audioe4b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Casual_E2.mp3?v=1664425250791";
audioe3b.loop="true";
audioe3b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene3a");
s1.onmouseover = ()=>{
  audioe3a.volume = 1;
   audioe3b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe3a.volume = 0;
   audioe3b.volume = 0;
}
  
let s2 = document.getElementById("imagene3b");
s2.onmouseover = ()=>{
  audioe3a.volume = 0;
  audioe3b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe3a.volume = 0;
  audioe3b.volume = 0;
  
} 