var randomNumber = [6,6]

function diceRoll1(){

  randomNumber[0] = Math.floor(((6 * Math.random()) + 1))

  var pngName = ""
  if (randomNumber[0] == 1){
    pngName = "Images/dice1.png"
  } else if (randomNumber[0] == 2){
    pngName = "Images/dice2.png"
  } else if (randomNumber[0] == 3){
    pngName = "Images/dice3.png"
  } else if (randomNumber[0] == 4){
    pngName = "Images/dice4.png"
  } else if (randomNumber[0] == 5){
    pngName = "Images/dice5.png"
  } else if (randomNumber[0] == 6){
    pngName = "Images/dice6.png"
  }

  return pngName

}

function diceRoll2(){

  randomNumber[1] = Math.floor(((6 * Math.random()) + 1))

  var pngName = ""
  if (randomNumber[1] == 1){
    pngName = "Images/dice1.png"
  } else if (randomNumber[1] == 2){
    pngName = "Images/dice2.png"
  } else if (randomNumber[1] == 3){
    pngName = "Images/dice3.png"
  } else if (randomNumber[1] == 4){
    pngName = "Images/dice4.png"
  } else if (randomNumber[1] == 5){
    pngName = "Images/dice5.png"
  } else if (randomNumber[1] == 6){
    pngName = "Images/dice6.png"
  }

  return pngName

}

document.querySelector(".img1").setAttribute("src", diceRoll1())
document.querySelector(".img2").setAttribute("src", diceRoll2())

var forH1 = "null"

if (randomNumber[0]>randomNumber[1]){
  forH1 = "🚩Player 1 Wins"
} else if (randomNumber[0]<randomNumber[1]){
  forH1 = "Player 2 Wins🚩"
} else {
  forH1 = "Draw"
}

document.querySelector("h1").innerHTML = forH1
