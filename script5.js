const div = document.getElementById("div5");
div.onclick = function(){
  div.style.display = "none";
  audioe5a.play();
  audioe5b.play();

}

let audioe5a = new Audio();
audioe5a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e5_Vomito.mp3?v=1664493615971";
audioe5a.loop="true";
audioe5a.volume = 0;

let audioe5b = new Audio();
audioe5b.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e5_Enfermeria.mp3?v=1664493584498";
audioe5b.loop="true";
audioe5b.volume = 0;





let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene5a");
s1.onmouseover = ()=>{
  audioe5a.volume = 1;
   audioe5b.volume = 0;

}
s1.onmouseout = ()=>{
  audioe5a.volume = 0;
   audioe5b.volume = 0;
}
  
let s2 = document.getElementById("imagene5b");
s2.onmouseover = ()=>{
  audioe5a.volume = 0;
  audioe5b.volume = 1;

}
s2.onmouseout = ()=>{
  audioe5a.volume = 0;
  audioe5b.volume = 0;
  
} 