import logo from './logo.svg';
import './App.css';
import React from 'react';
import Question from './question';
import {nanoid} from 'nanoid';

function App() {
  const [click,setClick]=React.useState(false)
  const [qData,setQData]=React.useState([])
  const [score,setScore]=React.useState(0)
  const renderAfterCalled = React.useRef(false);
  const [start,setStart]=React.useState(false);

  React.useEffect(() => {
      if (!renderAfterCalled.current) {
        // your API call func
        async function getData() {
          const res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
          const data = await res.json()
          setQData(data.results)
        }
        getData()
      }
      renderAfterCalled.current = true;
  }, []);

  // console.log(qData)
  const questionEle=qData.map(qu=>{
    return (
      <Question
         id={nanoid()}
         title={qu.question}
         cans={qu.correct_answer}
         ians={qu.incorrect_answers}
         click={click}
         score={score}
         setScore={setScore}
      />
    )
  })
   
  

  function change(){
    setClick(true)
  }
  
  return (
    <div className="App">
    {  start ?
      <div>
        {questionEle}
        {click && <h3 className='score'>You scored {score}/10 correct answer</h3>}
        {/* <button onClick={change}>{click ? "Play Again" : "Check Answer"}</button> */}
        <div className='btncon'>
          {click ?
            <button className='btn' onClick={() => window.location.reload(false)}>Play Again</button>
            :
            <button className='btn' onClick={change}>Check Answer</button>
          }
        </div>
      </div>
     :  
      <div className='start'>
        <h1>Quizzical</h1>
        <button onClick={()=>setStart(true)}>Start quiz</button>
      </div>
    }
    </div>
  );
}

export default App;
