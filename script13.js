const div = document.getElementById("div13");
div.onclick = function(){
  div.style.display = "none";
  audioe13a.play();


}

let audioe13a = new Audio();
audioe13a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e13_Periodico.mp3?v=1664494374408";
audioe13a.loop="true";
audioe13a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene13a");
s1.onmouseover = ()=>{
  audioe13a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe13a.volume = 0;
  
}