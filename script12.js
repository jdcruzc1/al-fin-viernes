const div = document.getElementById("div12");
div.onclick = function(){
  div.style.display = "none";
  audioe12a.play();


}

let audioe12a = new Audio();
audioe12a.src="https://cdn.glitch.global/aa4b3a19-f706-4e4c-89d2-388c2f7a3411/e12_Beso.mp3?v=1664494333281";
audioe12a.loop="true";
audioe12a.volume = 0;







let divG = document.getElementById("divG");

let s1 = document.getElementById("imagene12a");
s1.onmouseover = ()=>{
  audioe12a.volume = 1;
 

}
s1.onmouseout = ()=>{
  audioe12a.volume = 0;
  
}