const div = document.getElementById("div1");
div.onclick = function(){
  div.style.display = "none";
  audioe1a.play();
  audioe1b.play();
  audioe16a.play();
  audioe16c.play();
}

let audioe1a = new Audio();
audioe1a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Copas_E1.mp3?v=1664394676323";
audioe1a.loop="true";
audioe1a.volume = 0;

let audioe1b = new Audio();
audioe1b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Sandwich_E1.mp3?v=1664395353305";
audioe1b.loop="true";
audioe1b.volume = 0;

let audioe16a = new Audio();
audioe16a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Netflix_EX.mp3?v=1664419808196";
audioe16a.loop="true";
audioe16a.volume = 0;

let audioe16c = new Audio();
audioe16c.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/Arrocito_EX.mp3?v=1664419803815";
audioe16c.loop="true";
audioe16c.volume = 0;


let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene1a");
s1.onmouseover = ()=>{
  audioe1a.volume = 1;
   audioe1b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe1a.volume = 0;
   audioe1b.volume = 0;
  
let s2 = document.getElementById("imagene1b");
s2.onmouseover = ()=>{
  audioe1a.volume = 0;
  audioe1b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe1a.volume = 0;
  audioe1b.volume = 0;
  
}
  

let s3 = document.getElementById("imagene16a"); 
}
s3.onmouseout = ()=>{
  audioe16a.volume = 1;
   audioe16c.volume = 0;
}
s3.onmouseout = ()=>{
  audioe16a.volume = 0;
   audioe16c.volume = 0;
}


let s4 = document.getElementById("imagene16c");
s4.onmouseout = ()=>{
  audioe16a.volume = 0;
  audioe16c.volume = 1;
  
}
s4.onmouseout = ()=>{
  audioe16a.volume = 0;
  audioe16c.volume = 0;
  
}

let s5 = document.getElementById("imagene16b");
s5.onmouseout = ()=>{
  audioe16a.volume = 1;
  audioe16c.volume = 0;
  
}
s5.onmouseout = ()=>{
  audioe16a.volume = 0;
  audioe16c.volume = 0;
  
}

