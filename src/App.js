import React, { useState, useEffect } from "react";


function App() {
  const [userChoice, setUserChoice] = useState(null)
  const [result, setResult] = useState()
  const [computerChoice, setcomputerChoice] = useState()
  const choices = ['rock', 'paper', 'scissors  ']


  const HandleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()

  }


  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setcomputerChoice(randomChoice)
    checkResult()
  }


  const checkResult = () => {
    switch (userChoice + computerChoice) {

      case 'scissorspaper':
      case 'paperrock':
      case 'rockscissors':
        setResult("YOU WIN!");
        break;
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        setResult("YOU LOSS!");
        break;
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
        setResult("Its Draw!");
        break
    }
  }

  useEffect(() => {
    checkResult()
  }, [userChoice, computerChoice])
  return (
    <div>
      <h1>User Choice:{userChoice} </h1>
      <h1>Computer Choice:{computerChoice} </h1>
      {/* <button onClick={() => HandleClick('rock')}>Rock</button>
      <button onClick={() => HandleClick('paper')}>Paper</button>
      <button onClick={() => HandleClick('scissors')}>Scissors</button> */}
      {choices.map((choice, index) => <button key={index} onClick={() => HandleClick(choice)}>{choice}</button>)}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
