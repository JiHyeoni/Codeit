import Board from './Board';
import { useState } from 'react';
import Button from './Button';
import './App.css';

function random(n){
  return Math.ceil(Math.random()*n);
}

function App(){
  //const [num,setNum]=useState(1);//[state값,set함수]
  //const [sum,setSum]=useState(0);
  const [gameHistory,setGameHistory]=useState([]);

  //const [otherNum,setOtherNum]=useState(1);//[state값,set함수]
  //const [otherSum,setOtherSum]=useState(0);
  const [otherGameHistory,setOtherGameHistory]=useState([]);
  
  const handleRollClick=()=>{
    const nextNum=random(6);
    const nextOtherNum=random(6);
    //setNum(nextNum);
    //setSum(sum+nextNum);
    setGameHistory([...gameHistory, nextNum]);
    //setOtherNum(nextOtherNum);
    //setOtherSum(otherSum+nextOtherNum);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };

  const handleClearClick=()=>{
    //setNum(1);
    //setSum(0);
    setGameHistory([]);
    //setOtherNum(1);
    //setOtherSum(0);
    setOtherGameHistory([]);
  }

  return(
    <div className="App">
      <div>
        <Button className="App-button" onClick={handleRollClick} color="blue">던지기</Button>
        <Button className="App-button" onClick={handleClearClick} color="red">처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={gameHistory}></Board>
        <Board name="상대" color="red" gameHistory={otherGameHistory}></Board>
      </div>
    </div>
  );
}

export default App;
