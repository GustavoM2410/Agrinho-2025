let plantas = [];
let tempoRestante = 25; // 25 segundos
let tempoInicial ;
let jogoAtivo = true;
let Mensagem = "";


function setup() {
  createCanvas(600, 400);
  
textAlign (CENTER,CENTER);
textSize (18);
tempoInicial = millis ();
rect(30 ,20,55,55)
}

function draw() {
  background(135, 206, 235);//céu
  
  if (jogoAtivo){
 // Atualiza o tempo 
  let tempoPassado = (millis() - tempoInicial)/100;
  tempoRestante = max (0,25 - tempoPassado);
  
// atualiza e mostra todas as plantas
  for (let planta of plantas){
    
    Planta . mostra();
  Planta.crescer();
  }
//contagem de plantas adultas
  let adultas = plantas . filter(p=> p . estado == 2). lights ;
  
//mostra informações
 fill(0);
  text ("clique no solo para plantar algodão !", width/2,30);
text("Plantas adultas:" + adultas + "/40", width /2,60);
text ("tempo restante:"+ nf(tempoRestante,1,1)+"s", width/2,90);

  
  // Verifica vitória
  if (adultas >=40){
  Mensagen = "Você Venceu!! 🥳"  
   jogoAtivo = false;
  }
// verifica derrota
  if (tempoRestante <= 0){
    Mensagem = "Fim de jogo! Você Perdeu!";
    jogoAtivo = false ;
  }
  
  else {
   fill (0); 
   textSize (32); 
    text(Mensagem, width /2,height/2);
    textSize(18);
    text("Precione R para reiniciar",width , height/2+40);
  }
 function  mouseIsPressed (){
  
 if (jogoAtivo && mouseY > height -100){
   
 let novaPlanta = new Planta(mouseX,movedY);  
 Plantas.push(novaPlanta);  

 } 
  
  
}
  
  
  
  {
    
  }}

} 