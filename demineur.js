let tabValueForMap = returnTabValue()

function moteur(){
  if (document.chronoForm.startstop.value === "Pause"){
    console.log("Le jeu reprend");
  }
  else if (document.chronoForm.startstop.value === "Start"){
    console.log("tu as mis le jeu en pause");
  }
}

function moteurReset(){
  setTabValue();
  initMap();
  console.log("Le jeu est réinitialisé");
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
  tabValueForMap = returnTabValue();
  const maCase = document.getElementById(clicked_id);
  maCase.value = tabValueForMap[clicked_id[0]][clicked_id.slice(-1)];
  if(tabValueForMap[clicked_id[0]][clicked_id.slice(-1)] === -1){
    perdu();
  }
  else if (tabValueForMap[clicked_id[0]][clicked_id.slice(-1)] === 0){
    let lengthOfMap = tabValueForMap.length;
    revelCases0(Number( clicked_id[0]), Number(clicked_id.slice(-1)), lengthOfMap);
  }
  if(gagner(lengthOfMap)){
    setTimeout(function(){ alert("Tu as gagné!!! \n Une nouvelle partie est créée."); }, 500);
    chronoReset();
  }
}

function gagner(lengthOfMap){
  let numberOfBombes = returnDifficultie() + 1;
  for(let element = 0; element < lengthOfMap; element++){
    for(let element2 = 0; element2 < lengthOfMap; element2++){
      let maCases = document.getElementById('' + element + ':' + element2);
      if(maCases.value === ''){
        numberOfBombes --;
        if(numberOfBombes < 0){
          return false;
        }
      }
    }
  }
  return true;
}

function perdu(){
  alert("Tu as perdu!!! \n Une nouvelle partie est créée.");
  chronoReset();
}

function revel(element, element2){
  let maCases = document.getElementById('' + element + ':' + element2);
  let valueCase = maCases.value;
  maCases.value = tabValueForMap[element][element2];
  if(tabValueForMap[element][element2] === 0 && valueCase === ''){
    revelCases0(element, element2, tabValueForMap.length);
  }
}

function revelCases0(element, element2, lengthOfMap){
  if(element === 0){
    if(element2 === 0){
      revel(element + 1, element2);
      revel(element + 1, element2 + 1);
      revel(element, element2 + 1);
    }
    else if(element2 === lengthOfMap -1){
      revel(element + 1, element2);
      revel(element + 1, element2 - 1);
      revel(element, element2 - 1);
    }
    else{
      revel(element + 1, element2);
      revel(element + 1, element2 + 1);
      revel(element + 1, element2 - 1);
      revel(element, element2 + 1);
      revel(element, element2 - 1);
    }
  }
  else if(element === lengthOfMap -1){
    if(element2 === 0){
      revel(element - 1, element2);
      revel(element - 1, element2 + 1);
      revel(element, element2 + 1);
    }
    else if(element2 === lengthOfMap -1){
      revel(element - 1, element2);
      revel(element - 1, element2 - 1);
      revel(element, element2 - 1);
    }
    else{
      revel(element - 1, element2);
      revel(element - 1, element2 + 1);
      revel(element - 1, element2 - 1);
      revel(element, element2 + 1);
      revel(element, element2 - 1);
    }
  }
  else if(element2 === 0){
    revel(element, element2 + 1);
    revel(element + 1, element2 + 1);
    revel(element - 1, element2 + 1);
    revel(element + 1, element2);
    revel(element - 1, element2);
  }
  else if(element2 === lengthOfMap -1){
    revel(element, element2 - 1);
    revel(element + 1, element2 - 1);
    revel(element - 1, element2 - 1);
    revel(element + 1, element2);
    revel(element - 1, element2);
  }
  else{
    revel(element + 1, element2 + 1);
    revel(element + 1, element2 - 1);
    revel(element + 1, element2);
    revel(element - 1, element2 + 1);
    revel(element - 1, element2 - 1);
    revel(element - 1, element2);
    revel(element, element2 + 1);
    revel(element, element2 - 1);
  }
}
initMap();

