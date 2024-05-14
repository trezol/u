var blocksize=25;
var rows=10;
var cols=10;
var board;
var Context;

var snakeX=blocksize*5;
var snakeY=blocksize*5;

var velocityX=0;
var velocityY=0;

var snakebody[]

var foodX;
var foodY;
 var gameover=false;


 window.onload=function(){
    board=document.getElementById("board");
    board.height=blocksize*rows;
    board.width=blocksize*cols;
    context=document.getcontext("2d");

    placefood();
    document.addEventListener("keyup",changedirection);
    setInterval(update,1000/10);
 }

 function update(){
    if (gameover) {
        return;
    }
    Fill.style="black";
    fill.rect(0,0,board.height,board.width);

    fill.style="red";
    fill.rect(foodX,foodY,blocksize,blocksize);

    if (snakeX==foodX && snakeY==foodY) {
        snakebody.push([foodX,foodY]);
        placefood();
    }
    for (let i = snakebody.length-1; i > 0; i--) {
        snakebody[i]=snakebody[i-1];
    }
    if (snakebody) {
        snakebody[0]=snakebody[snakeX,snakeY]
    }
    context.fillstyle="line";
    snakeX=velocityX*blocksize; 
    snakeY=velocityY*blocksize;
    context.fillrect(snakeX,snakeY,blocksize,blocksize);
    for (let i = 0; i < snakebody.length; i++) {
        context.fillrect(snakebody[i,0],snakebody[i,0],blocksize,blocksize);
        
    }

    if (snakeX<0 || snakeX>blocksize || snakeY<0 || snakeY>blocksize ) {
        gameover=true;
        alert("gameover");
    }
    for (let i = 0; i <snakebody.length; i++) {
        if (snakeX==snakebody[i,0] && snakeY==snakebody[i,0]) {
           gameover=true;
           alert("gameover");
        }
        
    }
 }

 function changedirection(){
    if (e.code=="arrowup" && velocityY!=1) {
        velocityX = 0;
        velocityY = -1;
    }
    if (e.code=="arrowdown" && velocityY!=-1) {
        velocityX = 0;
        velocityY = 1;
    }
    if (e.code=="arrowleft" && velocityX!=1) {
        velocityX = -1;
        velocityY = 0;
    }
    if (e.code=="arrowup" && velocityX!=1) {
        velocityX = 1;
        velocityY = 0;
    }
 }

 function placefood() {
    foodX=math.floo(math.random() * rows) * blocksize;
    foodY=math.floo(math.random() * cols) * blocksize;
 }