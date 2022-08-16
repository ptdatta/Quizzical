import logo from './logo.svg';
import './App.css';
import React from 'react';
import Question from './question';
import {nanoid} from 'nanoid';

function App() {
  const [click,setClick]=React.useState(false)
  const [qData,setQData]=React.useState([])
  React.useEffect(() => {
    async function getData() {
      const res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      const data = await res.json()
      setQData(data.results)
    }
    getData()
  }, []) 

  const questionEle=qData.map(qu=>{
    return (
      <Question
         id={nanoid()}
         title={qu.question}
         cans={qu.correct_answer}
         ians={qu.incorrect_answers}
         click={click}
      />
    )
  })
   
  
  // function change(){
  //   setClick(true)
  // }
  // console.log(options)
  return (
    <div className="App">
      {questionEle}
      {/* <button onClick={change}>Check answers</button> */}
    </div>
  );
}

export default App;
