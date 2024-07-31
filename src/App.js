import React, { useState } from "react";
import "./App.css";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the purpose of React's useEffect hook?",
      options: [
        { id: 0, text: "To create a component state", isCorrect: false },
        { id: 1, text: "To handle form submissions", isCorrect: false },
        { id: 2, text: "To fetch data from an API", isCorrect: false },
        { id: 3, text: "To perform side effects in function components", isCorrect: true },
      ],
    },
    {
      text: "Which of the following is true about React keys?",
      options: [
        { id: 0, text: "Keys should be unique among all sibling elements", isCorrect: true },
        { id: 1, text: "Keys are used to identify elements in the HTML DOM", isCorrect: false },
        { id: 2, text: "Keys should be unique among all child elements", isCorrect: false },
        { id: 3, text: "Keys are required for all elements in a component", isCorrect: false },
      ],
    },
    {
      text: "What is the significance of the `state` object in React components?",
      options: [
        { id: 0, text: "It is used to store dynamic data and control component behavior", isCorrect: true },
        { id: 1, text: "It is used to store static data", isCorrect: false },
        { id: 2, text: "It is used to handle DOM events", isCorrect: false },
        { id: 3, text: "It is used to define the component's structure", isCorrect: false },
      ],
    },
    {
      text: "Which method in a React class component is used to handle initialization logic?",
      options: [
        { id: 0, text: "componentDidMount", isCorrect: false },
        { id: 1, text: "constructor", isCorrect: true },
        { id: 2, text: "render", isCorrect: false },
        { id: 3, text: "componentWillUnmount", isCorrect: false },
      ],
    },
    {
      text: "What does the `props` object represent in React components?",
      options: [
        { id: 0, text: "Properties that can change over time", isCorrect: false },
        { id: 1, text: "Properties that are passed to components by their parent", isCorrect: true },
        { id: 2, text: "State data that is local to the component", isCorrect: false },
        { id: 3, text: "Methods to fetch data from an API", isCorrect: false },
      ],
    },
  ];


  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Online Quiz Platform</h1>

      {showResults ? (
        <div className="final-results">
          <h3>Final Results</h3>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()} >Restart game</button>
        </div>
      ) : (
        <div className="question-card">


          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <p className="question-index">
            {currentQuestion + 1}/{questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
