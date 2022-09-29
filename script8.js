const div = document.getElementById("div8");
div.onclick = function(){
  div.style.display = "none";
  audioe8a.play();


}

let audioe8a = new Audio();
audioe8a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e8_Covid.mp3?v=1664493912091";
audioe8a.loop="true";
audioe8a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene8a");
s1.onmouseover = ()=>{
  audioe8a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe8a.volume = 0;
  
}