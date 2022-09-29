const div = document.getElementById("div10");
div.onclick = function(){
  div.style.display = "none";
  audioe10a.play();
  audioe10b.play();

}

let audioe10a = new Audio();
audioe10a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e10_Confias.mp3?v=1664494127191";
audioe10a.loop="true";
audioe10a.volume = 0;

let audioe10b = new Audio();
audioe10b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e10_Miedo.mp3?v=1664494149780";
audioe10b.loop="true";
audioe10b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene10a");
s1.onmouseover = ()=>{
  audioe10a.volume = 1;
   audioe10b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe10a.volume = 0;
   audioe10b.volume = 0;
}
  
let s2 = document.getElementById("imagene10b");
s2.onmouseover = ()=>{
  audioe10a.volume = 0;
  audioe10b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe10a.volume = 0;
  audioe10b.volume = 0;
  
} 