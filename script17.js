const div17 = document.getElementById("div17");
div17.onclick = function(){
  div17.style.display = "none";

  audioe17a.play();
  audioe17b.play();
}

let audioe17a = new Audio();
audioe17a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Final_E6.mp3?v=1664424533844";
audioe17a.loop="true";
audioe17a.volume = 0;

let audioe17b = new Audio();
audioe17b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/AburridaEnCasa_EX.mp3?v=1664419796672";
audioe17b.loop="true";
audioe17b.volume = 0;

let div17g = document.getElementById("div17g");

let s5 = document.getElementById("imagene17a");
s5.onmouseover = ()=>{
  audioe17a.volume = 1;
   audioe17b.volume = 0;

}
s5.onmouseout = ()=>{
  audioe17a.volume = 0;
   audioe17b.volume = 0;
}

let s6 = document.getElementById("imagene17b");
s6.onmouseover = ()=>{
  audioe17a.volume = 0;
   audioe17b.volume = 1;

}
s6.onmouseout = ()=>{
  audioe17a.volume = 0;
   audioe17b.volume = 0;
}