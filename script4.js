const div = document.getElementById("div4");
div.onclick = function(){
  div.style.display = "none";
  audioe4a.play();
  audioe4b.play();

}

let audioe4a = new Audio();
audioe4a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e4_Tomas.mp3?v=1664493516184";
audioe4a.loop="true";
audioe4a.volume = 0;

let audioe4b = new Audio();
audioe4b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e4_NoTomas.mp3?v=1664493477854";
audioe4b.loop="true";
audioe4b.volume = 0;





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