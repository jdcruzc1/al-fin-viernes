const div = document.getElementById("div1");
div.onclick = function(){
  div.style.display = "none";
  audio.play();
  audio2.play();
 
}

let audio = new Audio();
audio.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Copas_E1.mp3?v=1664394676323";
audio.loop="true";
audio.volume = 0;

let audio2 = new Audio();
audio2.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Sandwich_E1.mp3?v=1664395353305";
audio2.loop="true";
audio2.volume = 0;


let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene1a");
s1.onmouseover = ()=>{
  audio.volume = 1;
   audio2.volume = 0;

}
s1.onmouseout = ()=>{
  audio.volume = 0;
   audio2.volume = 0;

}
