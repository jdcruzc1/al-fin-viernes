const div18 = document.getElementById("div18");
div18.onclick = function(){
  div18.style.display = "none";

  audioe18a.play();
  audioe18b.play();
}

let audioe18a = new Audio();
audioe18a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e18_ponerla.wav?v=1664502296849";
audioe18a.loop="true";
audioe18a.volume = 0;

let audioe18b = new Audio();
audioe18b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Arrocito_EX.mp3?v=1664419803815";
audioe18b.loop="true";
audioe18b.volume = 0;

let div18g = document.getElementById("div18g");

let s7 = document.getElementById("imagene18a");
s7.onmouseover = ()=>{
  audioe18a.volume = 1;
   audioe18b.volume = 0;

}
s7.onmouseout = ()=>{
  audioe18a.volume = 0;
   audioe18b.volume = 0;
}

let s8 = document.getElementById("imagene18b");
s8.onmouseover = ()=>{
  audioe18a.volume = 0;
   audioe18b.volume = 1;

}
s8.onmouseout = ()=>{
  audioe18a.volume = 0;
   audioe18b.volume = 0;
}