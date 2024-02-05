const searchBox = document.querySelector(".tBox input");
const input = document.getElementById("text");
let playerPoints = 0;
const socket = io();

const player = new Jogador(playerPoints)
const timer = document.querySelector('.timer');

const frontEndPlayers = {}
socket.on('updatePlayers', (backEndPlayers) => {
  for (const id in backEndPlayers){
    const backendPlayer = backEndPlayers[id]

    if(!frontEndPlayers[id]){
      frontEndPlayers[id] = new Jogador(backendPlayer.playerPoints)
    }
  }


  for (const id in frontEndPlayers){
    if(!backEndPlayers[id]){
      delete frontEndPlayers[id]
    }
  }
  console.log(frontEndPlayers)
})

///socket on do timer
socket.on('fds', (teste) => {
  timer.innerHTML = teste;
})

/// socket on do rNumber
socket.on('r', (randomQuestion, randomImage, randomAnswer, randomAnswer0, randomAnswer1, randomAnswer2, randomAnswer3) => {

  document.querySelector(".question").innerHTML = randomQuestion;
  document.querySelector(".questionImage").src = randomImage; 
  
  if(randomAnswer === searchBox.value.toUpperCase() || randomAnswer0 === searchBox.value.toUpperCase() || randomAnswer1 === searchBox.value.toUpperCase() || randomAnswer2 === searchBox.value.toUpperCase() || randomAnswer3 === searchBox.value.toUpperCase()){
    console.log("Correct Answer")
    playerPoints += 10;
    socket.emit("score", playerPoints)
    document.querySelector(".score").innerHTML = `Score: ${playerPoints}`;
    console.log(`Score: ${playerPoints}`);
    document.getElementById('text').value = "";
  }

})















/*
const timer = document.querySelector('.timer');
let timeSecond = 15;

timer.innerHTML = timeSecond;

const countDown = setInterval(()=>{
    timeSecond--;
    timer.innerHTML = timeSecond;
    if(timeSecond<1){
        rNumber = generateRandomNumber()
        changeQuestion()
        document.querySelector(".tBox").style.display = 'contents';
        timeSecond = 15;
        
    }
},1000)
*/



