var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, player1, player2, player3, player4;

var player1,player2,player3,player4,ground;
function preload(){
  player1=loadImage("image/player1.jpg");
  player2=loadImage("image/player2.jpg");
  player3=loadImage("image/player3.jpg");
  player4=loadImage("image/player4.png");
  ground=loadImage("image/ground.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
