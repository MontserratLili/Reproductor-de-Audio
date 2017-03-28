console.log(document.getElementById("contador"));
/*var a =document.getElementById("sonido").currentTime;
console.log(a);
for(a; a<a.currentTime; a++){
  var contador=a+a;
  document.getElementById("song").innerHTML="contador";
}*/

function playAudio(){
  document.getElementById("sonido").play();
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
