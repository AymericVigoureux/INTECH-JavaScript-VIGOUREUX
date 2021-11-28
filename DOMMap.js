let lengthOfMap = 5;
let tabValue = tabBombeChiffresValue();

function returnDifficultie(){
  return ((lengthOfMap ** 2 ) * (10/100));
}

function setTabValue(){
  tabValue = tabBombeChiffresValue();
}

function returnTabValue(){
  return tabValue;
}

function createMap(){

  let map = ['<div class="wrapper" id="map">\n'];
  for(let i = 0; i < lengthOfMap; i++ ){
    map.push('<div>');
    for(let j = 0; j < lengthOfMap; j++){
      map.push('<input type="button" id="' + i + ':' + j + '" class="boutonPara" onClick="hide(this.id)" style="display:inline;"  value="">');
    }
    map.push('</div>');
  }
  map.push('</div>');
  let mapRender = map.join("");
  return(mapRender);
}

function LengthOfMap(value){
  lengthOfMap = value
  chronoReset();
}

function tabBombeChiffresValue(){

  // 10/100 = % des bombes sur la map  
  let numberOfBombe = (lengthOfMap ** 2 ) * (10/100);
  console.log(numberOfBombe);
  let tabBombes = [];

  // repartie les bombes aléatoirement
  for(let i = 0; i < numberOfBombe; i++){
    do{
      bombId = parseInt(Math.random()*(lengthOfMap**2),10);
    }
    while(tabBombes.includes(bombId))
    tabBombes.push(bombId);
  }

  // insert les bombes dans le tableau et créer le tableau
  let tabValue = [];
  let incrementBombId = 0
  for(let i = 0; i < lengthOfMap; i++){
    let tabValue2 = [];
    for(let j = 0; j < lengthOfMap; j++){
      if (tabBombes.includes(incrementBombId)){
        tabValue2.push(-1)
      }
      else{
        tabValue2.push(0)
      }
      incrementBombId++;
    }
    tabValue.push(tabValue2);
  }

  // ajoute les chiffres au tableau
  for(let element = 0; element < lengthOfMap; element++){
    for(let element2 = 0; element2 < lengthOfMap; element2++){
      if (tabValue[element][element2] === -1){
        if(element === 0){
          if(element2 === 0){
            ajoutChiffre(element + 1, element2);
            ajoutChiffre(element + 1, element2 + 1);
            ajoutChiffre(element, element2 + 1);
          }
          else if(element2 === lengthOfMap -1){
            ajoutChiffre(element + 1, element2);
            ajoutChiffre(element + 1, element2 - 1);
            ajoutChiffre(element, element2 - 1);
          }
          else{
            ajoutChiffre(element + 1, element2);
            ajoutChiffre(element + 1, element2 + 1);
            ajoutChiffre(element + 1, element2 - 1);
            ajoutChiffre(element, element2 + 1);
            ajoutChiffre(element, element2 - 1);
          }
        }
        else if(element === lengthOfMap -1){
          if(element2 === 0){
            ajoutChiffre(element - 1, element2);
            ajoutChiffre(element - 1, element2 + 1);
            ajoutChiffre(element, element2 + 1);
          }
          else if(element2 === lengthOfMap -1){
            ajoutChiffre(element - 1, element2);
            ajoutChiffre(element - 1, element2 - 1);
            ajoutChiffre(element, element2 - 1);
          }
          else{
            ajoutChiffre(element - 1, element2);
            ajoutChiffre(element - 1, element2 + 1);
            ajoutChiffre(element - 1, element2 - 1);
            ajoutChiffre(element, element2 + 1);
            ajoutChiffre(element, element2 - 1);
          }
        }
        else if(element2 === 0){
          ajoutChiffre(element, element2 + 1);
          ajoutChiffre(element + 1, element2 + 1);
          ajoutChiffre(element - 1, element2 + 1);
          ajoutChiffre(element + 1, element2);
          ajoutChiffre(element - 1, element2);
        }
        else if(element2 === lengthOfMap -1){
          ajoutChiffre(element, element2 - 1);
          ajoutChiffre(element + 1, element2 - 1);
          ajoutChiffre(element - 1, element2 - 1);
          ajoutChiffre(element + 1, element2);
          ajoutChiffre(element - 1, element2);
        }
        else{
          ajoutChiffre(element + 1, element2 + 1);
          ajoutChiffre(element + 1, element2 - 1);
          ajoutChiffre(element + 1, element2);
          ajoutChiffre(element - 1, element2 + 1);
          ajoutChiffre(element - 1, element2 - 1);
          ajoutChiffre(element - 1, element2);
          ajoutChiffre(element, element2 + 1);
          ajoutChiffre(element, element2 - 1);
        }
      }
    }
  }

  tabValue.forEach(element => {
    console.log(element) ;
  });

  function ajoutChiffre(element, element2){
    if (tabValue[element][element2] !== -1){
      tabValue[element][element2] += 1;
    }
  }
  return tabValue;
}