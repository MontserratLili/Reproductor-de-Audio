function playAudio(){
  document.getElementById("sonido").play();
  barraDeProgreso.max=sonido.duration;
}
function stopAudio(){
  document.getElementById("sonido").currentTime =300;
}
function pauseAudio(){
  document.getElementById("sonido").pause();
}
function advanceAudio(){
  document.getElementById("sonido").currentTime +=1 ;
}
function backAudio(){
  document.getElementById("sonido").currentTime -=1;
}
function volumeAudioUp(){
  document.getElementById("sonido").volume+=0.1;
}
function volumeAudioDown(){
  document.getElementById("sonido").volume-=0.1;
}
function progresoAudio(){
  document.getElementById("sonido").currentTime+=0.1;
}
function barra(){
  var a = document.getElementById("sonido");
  var b = document.getElementById("barraDeProgreso");
  var currentTime = document.getElementById("currentTime");
  currentTime.innerHTML=sonido.currentTime;
  b.value=sonido.currentTime;
  console.log(sonido.currentTime);
}
