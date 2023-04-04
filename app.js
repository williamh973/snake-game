// const
  // Variables pour initialisation
  var snake = []
  var changDir = false
  var food = {}
  var dx = 10, dy = 0
  var speed = 1
  var score = 0
  var advie = 1
  var vie = 1
  var heart = {}
  var PommeRadius = 10;
  
  
  
  // initialisation 
  const box = document.getElementById("snake")
  const board = box.getContext("2d")
  const scoreTag = document.getElementById('score')
  const lifeTag = document.getElementById("life")
  const titreLevel = document.getElementById('titre-level')
  const body = document.getElementById('body')









// Audios

const eatsong = new Audio()
eatsong.src = 'Eat.mp3';

eatsong.addEventListener("canplaythrough", (event) => {
/* the audio is now playable; play it if permissions allow */
});

const LifeLost = new Audio()
LifeLost.src = 'Life-1.mp3';

LifeLost.addEventListener("canplaythrough", (event) => {
/* the audio is now playable; play it if permissions allow */
});

const Music = new Audio()
Music.src = 'collapse.mp3';

Music.addEventListener("canplaythrough", (event) => {
/* the audio is now playable; play it if permissions allow */
});

const SongFenetre = new Audio()
SongFenetre.src = 'SongFenetre.mp3';

SongFenetre.addEventListener("canplaythrough", (event) => {
/* the audio is now playable; play it if permissions allow */
});









 // affiche le score en haut a gauche
 scoreTag.innerText = "Score: "+score
 
 // defini la couleur du score
 scoreTag.style.color = "white";
 
 // defini la couleur du level
 titreLevel.style.color = "white";

//  affiche la vie en haut a droite ainsi que le nombre
 lifeTag.innerText = "Life: " +vie

document.getElementById('level').addEventListener("change", ChangeSpeed)
  
document.getElementById("play").addEventListener("click", StartGame )
  
document.addEventListener ("keydown", ChangeDirection)
  

  
const MenuSong = document.querySelector("#Menu");
   
MenuSong.addEventListener('click', () => {
    SongFenetre.play()
   });
 
  

   



   class Map{
    constructor(){
       
        const image= new Image();
        image.src = 'images/paysage.png';
        image.onload =()=>{
            
          this.position= {
            x: 0,
            y: 0
        }
          this.image = image;
            this.width= 1024;
            this.height= 692;
        }       
    }
    draw(){
        if(this.image){
        c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height,);       
        }
    }
}

let map = new Image()



  
  var looping = setInterval( 
    Loop, 1000 / (2*speed )
    )
map.draw()

  var lopping = null



  GenerateFood()


// Position et nombre de blocs qui constituent le serpent.  x = hauteur, y = longueur.
function InitGame() 
{
 snake = [
  {x: 30, y: 100},
  {x: 20, y: 100},
  {x: 10, y: 100}
  ]
  Loop()
}

InitGame()
Music.play()

function StartGame()
{
InitGame()
looping = setInterval( Loop, 1000 / ( 2*speed )) 
}

// Reinitialisation du looping si game over puis des fonctions au démarrage du jeu.
  function Loop()
  {
    if( IsGameOver() ) {
      clearInterval( looping )
      score = 0
      return
    }
    ClearBoard()
    Drawfood()
    MoveSnake()
    DrawSnake()
    gameOver()
    Heart()
    CatchHeart()
    Compteur()
  }


// Comportement du serpent
  function MoveSnake()
  {
    var head = {
      x: snake[0].x + dx,
      y: snake[0].y + dy
    }
//  pour rajouter un élément au tableau snake qui donne le déplacement du serpent.
    snake.unshift( head )
    var hasEatenFood = snake[0].x === food.x && snake[0].y === food.y
   if( hasEatenFood )

   {
     GenerateFood()
     score += speed
     scoreTag.innerText = "Score: "
     +score
  // Un son est émis lorsque la pomme est mangé.
  eatsong.play();
   }
// pop() enlève le dernier élément du tableau snake qui permet d'avoir le déplacement du serpent
else snake.pop()
  }
 


  // Couleurs du serpent
function DrawSnake()
  {
    snake.forEach( function( block ) {
      board.fillStyle = "#69b040"
      board.strokeStyle = "#557f3e"
      board.fillRect( block.x, block.y, 10, 10 )
      board.strokeRect( block.x, block.y, 10, 10 )
  
    })
  }

// Fenêtre de jeu  
function ClearBoard() 
  {
      board.fillStyle = "white"
      board.strokeStyle = "black"
      board.fillRect( 0, 0, box.width, box.height )
      board.strokeRect( 0, 0, box.width, box.height )
  }

// Défaite
function IsGameOver()
  {
    // defaite si on recule
for( var i=1; i<snake.length; i++)
 {
   if(snake[i].x === snake[0].x &&   snake[i].y === snake[0].y) 
     
   return true 
 }
// la variable lw délimite le point 0 en haut a gauche du canvas.
const lw = snake[0].x < 0
if( lw ) {
vie -= 1;
lifeTag.innerText = "Life: "+vie
     
// pour repositionner le serpent au  hasard dans la zone de jeu    
snake[0].x = randPos( 0, box.width - 10 )
snake[0].y = randPos( 0, box.height - 10 )
LifeLost.play();

}
// la variable rw délimite le bout en haut a droite du canvas.
const rw = snake[0].x > box.width - 
10
if( rw ) {
vie -= 1;
lifeTag.innerText = "Life: "
     +vie
snake[0].x = randPos( 0, box.width - 10 )
snake[0].y = randPos( 0, box.height - 10 )

// Un son est émis lorsque le serpent sort de la zone de jeu.
LifeLost.play();
}
// la variable tw délimite le point 0 en haut a gauche du canvas.
const tw = snake[0].y < 0
if( tw ) {
vie -= 1;
lifeTag.innerText = "Life: "
     +vie
snake[0].x = randPos( 0, box.width - 10 )
snake[0].y = randPos( 0, box.height - 10 )
LifeLost.play();
}
// la variable bw délimite le bout en bas a gauche du canvas.
const bw = snake[0].y > box.height - 10  
if( bw ) {
vie -= 1;
lifeTag.innerText = "Life: "
     +vie
snake[0].x = randPos( 0, box.width - 10 )
snake[0].y = randPos( 0, box.height - 10 )
LifeLost.play();
}
// return lw || rw || tw || bw

  }

 
  // Direction du serpant avec les touches fléchés
  function ChangeDirection(e)
  {
const lk = 37, rk = 39, uk = 38, dk = 40
    
    changeDir = true
    let k = e.keyCode
    let toUp = dy === -10,
        toDown = dy === 10,
        toLeft = dx === -10,
        toRight = dx === 10
        
        if( k === lk && !toRight) {
            dx = -10, dy = 0
        }
        if( k === rk && !toLeft) {
            dx = 10, dy = 0
        }
        if( k === uk && !toDown ) {
            dx = 0, dy = -10
        }
        if( k === dk && !toUp) {
            dx = 0, dy = 10
        }
  }
  

  
// Apparition au hasard de la pomme
  function GenerateFood()
  {
food.x = randPos( 0, box.width - 10 )
food.y = randPos( 0, box.height - 10 )

snake.forEach ( function( block ) {
  var eaten = block.x == food.x && block.y == food.y
  if(eaten) GenerateFood()

})

  }
  
  
//  pour générer un élément au hasard   
function randPos(min, max)
  {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10
  }
  
  
// On transforme le block rouge en pomme
function Drawfood()
{
board.beginPath()
board.arc( food.x+5, food.y+5, 8, 0, Math.PI*2)
board.fillStyle = "#e74c3c"
board.fill()
// Feuille en forme de √ sur la pomme
board.font = '15px Arial';
board.fillStyle = '#2ecc71';
board.fillText('√', food.x+1.1, food.y );
// le reflet sur la pomme
board.save();
board.scale(1, 1.5);

board.beginPath();
board.arc(food.x+PommeRadius -4, (food.y+PommeRadius)/1.5301,PommeRadius/4, 2, Math.PI * 2);
board.fillStyle="#ed7365";
board.fill();
board.closePath();

board.restore();
}    

  function ChangeSpeed()
  {
    speed = parseInt(this.value)
  }

// ---------------------------------------

function gameOver()
{
if(vie == -1) {
// Affichage la fin de la partie
board.font = '40px Arial';
board.fillStyle = '#fff';
board.fillText('GAME OVER', box.width / 2 - 110, box.height / 2);

}
}

// couleur et taille du coeur
function Heart()
 {
{
board.beginPath()
board.font = '12px Arial';
board.fillStyle = '#2ecc71';
board.fillText( '♥',
heart.x+0, heart.y+10);
} 
}




// pour générerer au hasard le coeur
function GenerateLife()
  {
    
heart.x = randPos( 1, box.width - 9 )
heart.y = randPos( 1, box.height - 9)

}

// Une fois que le serpent se trouve dans la même case que le coeur, on repositionne le coeur en dehord du champs
function DisepearH() {
heart.x = ( -9999 )
heart.y = ( -9999 )
}



  
// function CatchHeart()
function CatchHeart()
{
var hasEatenHeart = snake[0].x === heart.x && snake[0].y === heart.y
   if( hasEatenHeart ) {
DisepearH()
   {
     vie += advie
     lifeTag.innerText = "Life: "
     +vie
   }
}
}



var compteurCoeur= 0;
var AfficheCoeur= false


function Compteur() {
if(compteurCoeur++ > 115){
compteurCoeur = 0;
if(Math.random()*100 > 75){

AfficheCoeur= true
GenerateLife()
} else {

AfficheCoeur= false
}
}
}


