const div = document.getElementById("div14");
div.onclick = function(){
  div.style.display = "none";
  audioe14a.play();
  audioe14b.play();

}

let audioe14a = new Audio();
audioe14a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Perr%C3%ADsima_E2.mp3?v=1664425055310";
audioe14a.loop="true";
audioe14a.volume = 0;

let audioe14b = new Audio();
audioe14b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Casual_E2.mp3?v=1664425250791";
audioe14b.loop="true";
audioe14b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene14a");
s1.onmouseover = ()=>{
  audioe14a.volume = 1;
   audioe14b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe14a.volume = 0;
   audioe14b.volume = 0;
}
  
let s2 = document.getElementById("imagene14b");
s2.onmouseover = ()=>{
  audioe14a.volume = 0;
  audioe14b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe14a.volume = 0;
  audioe14b.volume = 0;
  
} 