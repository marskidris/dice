// function to roll dice between 1/6
let diceNum = 0;
let totalDice = 0;
let hasRolled = false;
let hasASM = false;
let win = false;

function load() {
  let dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceNum').value = dice;
  totalDice = dice;
  let reset = 0;
  document.getElementById('diceGenerator').value = reset;
}
function rollDice() {
  document.getElementById('diceNum').autofocus;
  if (hasRolled && !hasASM) {
    alert("You must roll pick an option before re-rolling!")
    return;
  }
  let dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceGenerator').value = dice;
  diceNum = dice;
  hasRolled = true;
  hasASM = false;
}
// function to add dice
function add() {
  if (hasRolled && !hasASM) {
    totalDice += diceNum;
    document.getElementById('diceNum').value = totalDice;
    hasASM = true;
    win = false;
    winner();
  }
  else if (!hasRolled) {
    alert("You must roll a number!")
  }
  else {
    alert("You can only add/subtract/multiply dice once!")
  }
}
function subtract() {
  if (hasRolled && !hasASM) {
    totalDice -= diceNum;
    document.getElementById('diceNum').value = totalDice;
    hasASM = true;
    win = false;
    winner();

  }
  else if (!hasRolled) {
    alert("You must roll a number!")
  }
  else {
    alert("You can only add/subtract/multiply dice once!")
  }
}
function multiply() {
  if (hasRolled && !hasASM) {
    totalDice *= diceNum;
    document.getElementById('diceNum').value = totalDice;
    hasASM = true;
    win = false;
    winner();
  }
  else if (!hasRolled) {
    alert("You must roll a number!")
  }
  else {
    alert("You can only add/subtract/multiply dice once!")
  }
}

function winner() {
  if (!win) {
    if (totalDice === 10) {
      alert("Congratulations, you've won!")
      totalDice = 0;
      document.getElementById('diceNum').value = totalDice;
      win = true;
      load()
    }
    else if (totalDice <= 0) {
      alert("You lost!")
      totalDice = 0;
      document.getElementById('diceNum').value = totalDice;
      win = true;
      load()
    }
    else  if (totalDice > 10) {
      alert("You lost!")
      totalDice = 0;
      document.getElementById('diceNum').value = totalDice;
      win = true;
      load()
    }
  }
}
window.onload = load;
