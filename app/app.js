const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 600; 
canvas.height = 500;

  let snake = [];
  let food = {};
  let heart = {};
  let changDir = false;
  let dx = 10 ;
  let dy = 0;
  let speed = 1; 
  let score = 0;
  let addLife = 1;
  let life = 1;
  let PommeRadius = 10;
  let looping = setInterval( Loop, 1000 / (2*speed ));
  let lopping = null;
  let compteurCoeur = 0;
  let AfficheCoeur = false;

  
   
  const scoreTag = document.getElementById('score'); 
  const lifeTag = document.getElementById("life");
  const body = document.getElementById('body');
  const MenuSong = document.querySelector("#Menu");

  
  
// const eatsong = new Audio()
// eatsong.src = 'Eat.mp3';

// const LifeLost = new Audio()
// LifeLost.src = 'Life-1.mp3';

// const Music = new Audio()
// Music.src = 'collapse.mp3';

// const SongFenetre = new Audio()
// SongFenetre.src = 'SongFenetre.mp3';



// eatsong.addEventListener("canplaythrough", (event) => {
  
// });

// LifeLost.addEventListener("canplaythrough", (event) => {
  
// });


// Music.addEventListener("canplaythrough", (event) => {
  
// });
// // Music.play()


// SongFenetre.addEventListener("canplaythrough", (event) => {

// });


 scoreTag.innerText = "Score " + score
 lifeTag.innerText = "Life " + life

document.getElementById('btn-level').addEventListener("change", ChangeSpeed)
  
document.getElementById("btn-play").addEventListener("click", StartGame )
  
document.addEventListener ("keydown", ChangeDirection)
  


// MenuSong.addEventListener('click', () => {
//     SongFenetre.play()
//    });
 
  

GenerateFood()

function InitGame() {
 snake = [
  {
    x: 30, 
    y: 100
  },
  {
    x: 20, 
    y: 100
  },
  {
    x: 10, 
    y: 100
  }
  ]

  Loop()
}

InitGame();


function StartGame() {
  InitGame()
  looping = setInterval( Loop, 1000 / ( 2*speed )) 
};

function Loop() {
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


  function MoveSnake() {
    let head = {
      x: snake[0].x + dx,
      y: snake[0].y + dy
    };
    snake.unshift(head);

    let hasEatenFood = snake[0].x === food.x && snake[0].y === food.y
      
    if(hasEatenFood) {
        GenerateFood()
        score += speed
        scoreTag.innerText = "Score : " + score
  
        eatsong.play();
    } else {
      snake.pop();
    }
  };
 

function DrawSnake() {
    snake.forEach( function(block) {
      c.fillStyle = "#69b040"
      c.strokeStyle = "#557f3e"
      
      c.fillRect(
        block.x, 
        block.y, 
        10, 
        10 
        )
      
      c.strokeRect(
        block.x, 
        block.y, 
        10, 
        10
        )
    })
  };


function ClearBoard() {
  c.fillStyle = "white";
  c.strokeStyle = "black";
  c.fillRect(
    0, 
    0, 
    canvas.width, 
    canvas.height 
    )

  c.strokeRect(
    0, 
    0, 
    canvas.width, 
    canvas.height
    )
  };


function IsGameOver() {
  for(let i = 1; i < snake.length; i++) {
     if(
        snake[i].x === snake[0].x &&   
        snake[i].y === snake[0].y
       ) {
        return true;
      } 
  };

const lw = snake[0].x < 0
  if( lw ) {
    life -= 1;
    lifeTag.innerText = "Life : " + life
     
    snake[0].x = randPos( 0, canvas.width - 10 )
    snake[0].y = randPos( 0, canvas.height - 10 )
    
    LifeLost.play();
}

const rw = snake[0].x > canvas.width - 10
  if( rw ) {
    life -= 1;
    lifeTag.innerText = "Life : " + life
    
    snake[0].x = randPos( 0, canvas.width - 10 )
    snake[0].y = randPos( 0, canvas.height - 10 )

    LifeLost.play();
  }

const tw = snake[0].y < 0
  if( tw ) {
    life -= 1;
    lifeTag.innerText = "Life : " + life
    
    snake[0].x = randPos( 0, canvas.width - 10 )
    snake[0].y = randPos( 0, canvas.height - 10 )
    
    LifeLost.play();
  }

const bw = snake[0].y > canvas.height - 10  
  if( bw ) {
    life -= 1;
    lifeTag.innerText = "Life : " + life
   
    snake[0].x = randPos( 0, canvas.width - 10 )
    snake[0].y = randPos( 0, canvas.height - 10 )

    LifeLost.play();
  }
// return lw || rw || tw || bw

};


  function ChangeDirection(e) {

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
  function GenerateFood() {
    food.x = randPos( 0, canvas.width - 10 )
    food.y = randPos( 0, canvas.height - 10 )

    snake.forEach ( function( block ) {
      let eaten = block.x == food.x && block.y == food.y
        
        if(eaten) { 
          GenerateFood();
        }
    
    })

  };
  
  
  function randPos(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10
  };
  
  
function Drawfood() {
c.beginPath()
c.arc(
  food.x + 5, 
  food.y + 5, 
  8, 
  0, 
  Math.PI * 2
  )

  c.fillStyle = "#e74c3c"
  c.fill()
  
  c.font = '15px Arial';
  c.fillStyle = '#2ecc71';
  c.fillText(
    '√', 
    food.x + 1.1, 
    food.y 
    );
  
  c.save();
  c.scale(1, 1.5);
  
  c.beginPath();
  c.arc(
    food.x + PommeRadius - 4, 
    (
      food.y + PommeRadius) / 1.5301, 
      PommeRadius / 4, 
      2, 
      Math.PI * 2
      );
  c.fillStyle = "#ed7365";
  c.fill();
  c.closePath();
  
  c.restore();
};    

function ChangeSpeed() {
  speed = parseInt(this.value)
};


function gameOver() {
  if(life == -1) {
    c.font = '40px Arial';
    c.fillStyle = '#fff';
    c.fillText(
      'GAME OVER', 
      canvas.width / 2 - 110, 
      canvas.height / 2
      );
  };
};


function Heart() {
  c.beginPath()
  c.font = '12px Arial';
  c.fillStyle = '#2ecc71';
  c.fillText( '♥',
  heart.x+0, heart.y+10);
};


function GenerateLife() {    
  heart.x = randPos( 1, canvas.width - 9 )
  heart.y = randPos( 1, canvas.height - 9)
};


function DisepearH() {
  heart.x = ( -9999 )
  heart.y = ( -9999 )
};


function CatchHeart() {
  let hasEatenHeart = snake[0].x === heart.x && snake[0].y === heart.y
    if( hasEatenHeart ) {
      DisepearH(); 
           
      life += addLife
      lifeTag.innerText = "Life: " + life
    };
};



function Compteur() {
  if(compteurCoeur++ > 115){
    compteurCoeur = 0;
      
    if(Math.random()*100 > 75){
      AfficheCoeur = true;
      GenerateLife();
      } else {
      AfficheCoeur = false
    };

  };

};


