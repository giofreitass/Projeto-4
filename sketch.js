let palavra;

function setup() {
  createCanvas(400, 400);
  palavraAleatoria();
 
}

function palavraAleatoria(){
   let palavras = ["dormir", "sonhar", "descansar"];
  palavra = random(palavras);
}



function inicializaCores(){
   background("black");
  fill ("blue");
  textSize(60);
  textAlign(CENTER, CENTER);
}

function draw() {
  inicializaCores();
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial =palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
  
  
  
  
  

  /*if(mouseX < 50){
    let palavra = "s";
  text(palavra, 200, 200);
  } else if (mouseX < 100){
    let palavra = "so";
  text(palavra, 200, 200);
  } else if (mouseX < 150){
    let palavra = "son";
  text(palavra, 200, 200);
  } else if (mouseX < 200){
    let palavra = "sono";
  text(palavra, 200, 200);
  }*/
 }