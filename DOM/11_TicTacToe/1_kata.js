let gameBox=document.querySelectorAll(".box");
let textBox=document.querySelectorAll(".boxtext");
let playerTurn=document.querySelector(".turn");
let resetButton=document.querySelector(".reset");
let imgPos=document.querySelector(".imge");
let victoryImage=document.createElement("img");
let winningSound=new Audio("./vicAud.mp3");
let clickSound=new Audio("./click12.aac");
 victoryImage.src="./victory.gif";




// let win=[ [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];


let point="X";
for(let i=0;i<gameBox.length;i++){
gameBox[i].addEventListener('click',function(){
     clickSound.play();
   textBox[i].innerHTML=point;
   if(point=="X"){
       point="0";
       playerTurn.innerHTML="0's turn"
   }else{
       point="X"
       playerTurn.innerHTML="X's turn "
   }
    let zero =textBox[0].innerHTML;
    let one =textBox[1].innerHTML;
    let two =textBox[2].innerHTML;

    let three =textBox[3].innerHTML;
    let four =textBox[4].innerHTML;
    let five =textBox[5].innerHTML;

    let six =textBox[6].innerHTML;
    let seven =textBox[7].innerHTML;
    let eight =textBox[8].innerHTML;

    // console.log(zero);
    // console.log(one);
    // console.log(two);
    // console.log(three);
    // console.log(four);
    // console.log(five);
    // console.log(six);
    // console.log(seven);
    // console.log(eight);

    if((zero=="X" && one=="X"&& two=="X") ){
        playerTurn.innerHTML="Player X won the game " 
        winningSound.play();
        imgPos.appendChild(victoryImage);
        return;
    }else if((zero=="0" && one=="0"&& two=="0")){
        playerTurn.innerHTML="Player 0 won the game "
        winningSound.play();
        imgPos.appendChild(victoryImage);
        return; 
    }else if((three=="X" && four=="X"&& five=="X") ){
        playerTurn.innerHTML="Player X won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((three=="0" && four=="0"&& five=="0")){
        playerTurn.innerHTML="Player 0 won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((six=="X" && seven=="X"&& eight=="X") ){
        playerTurn.innerHTML="Player X won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((six=="0" && seven=="0"&& eight=="0")){
        playerTurn.innerHTML="Player 0 won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((zero=="X" && four=="X"&& eight=="X") ){
        playerTurn.innerHTML="Player X won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((zero=="0" && four=="0"&& eight=="0")){
        playerTurn.innerHTML="Player 0 won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((two=="X" && four=="X"&& six=="X") ){
        playerTurn.innerHTML="Player X won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((two=="0" && four=="0"&& six=="0")){
        playerTurn.innerHTML="Player 0 won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((zero=="X" && three=="X"&& six=="X") ){
        playerTurn.innerHTML="Player X won the game " 
        winningSound.play();
        imgPos.appendChild(victoryImage);
        return;
    }else if((zero=="0" && three=="0"&& six=="0")){
        playerTurn.innerHTML="Player 0 won the game "
        imgPos.appendChild(victoryImage); 
        winningSound.play();
        return;
    }else if((one=="X" && four=="X"&& seven=="X") ){
        playerTurn.innerHTML="Player X won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((one=="0" && four=="0"&& seven=="0")){
        playerTurn.innerHTML="Player 0 won the game "
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return; 
    }else if((two=="X" && five=="X"&& eight=="X") ){
        playerTurn.innerHTML="Player X won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }else if((two=="0" && five=="0"&& eight=="0")){
        playerTurn.innerHTML="Player 0 won the game " 
        imgPos.appendChild(victoryImage);
        winningSound.play();
        return;
    }
    
    
    
   
})



resetButton.addEventListener("click",function(){
    for(let i=0;i<textBox.length;i++){
        textBox[i].innerHTML="";
    }
    playerTurn.innerHTML="X's turn"
    victoryImage.remove();
})

}