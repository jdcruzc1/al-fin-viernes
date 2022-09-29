const div16 = document.getElementById("div16");
div16.onclick = function(){
  div16.style.display = "none";

  audioe16a.play();
  audioe16c.play();
}

let audioe16a = new Audio();
audioe16a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Netflix_EX.mp3?v=1664419808196";
audioe16a.loop="true";
audioe16a.volume = 0;

let audioe16c = new Audio();
audioe16c.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Arrocito_EX.mp3?v=1664419803815";
audioe16c.loop="true";
audioe16c.volume = 0;

let div16g = document.getElementById("div16g");

let s3 = document.getElementById("imagene16a");
s3.onmouseover = ()=>{
  audioe16a.volume = 1;
   audioe16c.volume = 0;

}
s3.onmouseout = ()=>{
  audioe16a.volume = 0;
   audioe16c.volume = 0;
}

let s4 = document.getElementById("imagene16c");
s4.onmouseover = ()=>{
  audioe16a.volume = 0;
   audioe16c.volume = 1;

}
s4.onmouseout = ()=>{
  audioe16a.volume = 0;
   audioe16c.volume = 0;
}