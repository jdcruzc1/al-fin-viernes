const div = document.getElementById("div7");
div.onclick = function(){
  div.style.display = "none";
  audioe7a.play();
  audioe7b.play();

}

let audioe7a = new Audio();
audioe7a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e7_Celular.mp3?v=1664493814111";
audioe7a.loop="true";
audioe7a.volume = 0;

let audioe7b = new Audio();
audioe7b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e7_NoSignal.mp3?v=1664493832656";
audioe7b.loop="true";
audioe7b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene7a");
s1.onmouseover = ()=>{
  audioe7a.volume = 1;
   audioe7b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe7a.volume = 0;
   audioe7b.volume = 0;
}
  
let s2 = document.getElementById("imagene7b");
s2.onmouseover = ()=>{
  audioe7a.volume = 0;
  audioe7b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe7a.volume = 0;
  audioe7b.volume = 0;
  
} 