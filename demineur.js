let lengthOfMap = 5;

function moteur(){
  if (document.chronoForm.startstop.value === "Pause"){
    console.log("Le jeu reprend");
  }
  else if (document.chronoForm.startstop.value === "Start"){
    console.log("tu as mis le jeu en pause");
  }
}

function moteurReset(){
  console.log("Le jeu est réinitialisé");
  initMap();
}

function moteurStart(){
  if (document.chronoForm.startstop.value === "Pause"){
    console.log("La partie commence");
  }
  else if (document.chronoForm.startstop.value === "Start"){
    console.log("Le jeu est en pause");
  }
}

function initMap(){
  let mapRender = createMap();

  if (document.querySelector('h2')){
    
    if (document.getElementById('map') !== null){
      document.getElementById('map').innerHTML= mapRender;
    }
    else{
      document.querySelector('h2').insertAdjacentHTML('afterend', mapRender);
    }
    console.log("la map est initialisé");
  }

}

function createMap(){

  let map = ['<div class="wrapper" id="map">\n'];
  for(let i = 0; i < lengthOfMap; i++ ){
    map.push('<div>');
    for(let j = 0; j < lengthOfMap; j++){
      map.push('<input type="button" id="' + i + j + '" class="boutonPara" onClick="hide(this.id)" style="display:inline;"  value="' + i + j + '">');
    }
    map.push('</div>');
  }
  map.push('</div>');
  let mapRender = map.join("");
  console.log(mapRender);
  return(mapRender);
}

function hide(clicked_id){
  // démare le chrono 
  if(document.chronoForm.startstop.value === "Start"){
    if(document.getElementById('chronotime').textContent === "0:00:00:000"){
      chronoStart();
    }
    else{
      chronoContinue()
    }    
  }

  // rével la case 
  console.log("hide marche!" + clicked_id);
  const maCase = document.getElementById(clicked_id);
  if (maCase.value === clicked_id) {
    maCase.value = '';
  } else {
    maCase.value = '' + clicked_id;
  }
}

function LengthOfMap(value){
  lengthOfMap = value
  chronoReset();
}

initMap();

