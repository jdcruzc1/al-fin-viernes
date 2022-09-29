const div = document.getElementById("div5");
div.onclick = function(){
  div.style.display = "none";
  audioe5a.play();
  audioe5b.play();

}

let audioe5a = new Audio();
audioe5a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Perr%C3%ADsima_E2.mp3?v=1664425055310";
audioe5a.loop="true";
audioe4a.volume = 0;

let audioe4b = new Audio();
audioe5b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Casual_E2.mp3?v=1664425250791";
audioe5b.loop="true";
audioe5b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene4a");
s1.onmouseover = ()=>{
  audioe4a.volume = 1;
   audioe4b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe4a.volume = 0;
   audioe4b.volume = 0;
}
  
let s2 = document.getElementById("imagene4b");
s2.onmouseover = ()=>{
  audioe4a.volume = 0;
  audioe4b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe4a.volume = 0;
  audioe4b.volume = 0;
  
} 