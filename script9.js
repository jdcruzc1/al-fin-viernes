const div = document.getElementById("div9");
div.onclick = function(){
  div.style.display = "none";
  audioe9a.play();


}

let audioe9a = new Audio();
audioe9a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e9_Casa.mp3?v=1664493959717";
audioe9a.loop="true";
audioe9a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene9a");
s1.onmouseover = ()=>{
  audioe9a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe9a.volume = 0;
  
}