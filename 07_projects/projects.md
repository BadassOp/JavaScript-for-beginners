# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-ddq5dv?file=index.html)

# Solution Code

## Project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})
```

## Project 2
```javascript
const form = document.querySelector('form')

//this usecase will store the empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault()  //prevent from submitting

  const height = parseInt(document.querySelector('#height').value)  //storing user input in variable
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if( height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give valid height"
  }
  else if( weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give valid weight"
  }
  else {
    const bmi = (weight / ((height*height) / 10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
})
```

## Project 3
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('clock') //both are same

setInterval(function () {
  //Date method allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects
  let date = new Date(); 

  // console.log(date.toLocaleTimeString())  //updates clock in the console panel

  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## Project 4
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1 ) //generating random number 

const submit = document.querySelector('#subt')  //# is for id and . is for class
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p') //creating paragraphs

let prevGuess = []
let numGuess = 1

let playGame = true //to start the game

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess < 1 ){
    alert('Please enter a number greater than 1')
  } else if(guess > 100){
    alert('Please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage('Your guess is right')
    endGame()
  }else if(guess < randomNumber){
    displayMessage('Number is TOO Low')
  }else if(guess > randomNumber){
    displayMessage('Number is TOO High')
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('Button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1 )
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${10 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
```
## Project 5
```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
      <tr>
        <th>key</th>
        <th>keycode</th>
        <th>code</th>
      </tr>
      <tr>
        <td>${e.key === " " ? "Space": e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
    </div>
  `
})
```

## Project 6
```javascript
// generating random colors
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i = 0; i < 6; i++){
    // Math.floor(Math.random() * 16) //creating random values OR selecting random positions
    color += hex[Math.floor(Math.random() * 16)] //adding values 1 by 1 
  }
  return color
}

let intervalId
const startChangingColor = function(){
  if(!intervalId){   //if interval id is null
  intervalId = setInterval(changeBgColor, 1000)
  }

  function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
  }
}

const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null //flushes out the value on intervalId
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
```