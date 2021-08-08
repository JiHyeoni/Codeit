
import React, { Fragment } from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
/*
const product ='MACBOOK';
const model ='Air';
const item=product+model;

function handleClick(){
  alert('곧 도착합니다!');
}

ReactDOM.render(  
  <Fragment>
  <p className="hello">안녕</p>
  <p>리액트!</p>
  <h1>나만의 {item.toUpperCase} 주문하기</h1>
  <button onClick={handleClick}>확인</button>
  </Fragment>,//Fragment를 사용하면 불필요한 div 태그를 줄일 수 있음 <></>로도 사용 가능 
  document.getElementById('root')
);
*/

function Hello(){
  return <h1>안녕 리액트</h1>;
}
//리액트 컴포넌트-> 함수이름의 첫글자가 대문자, return값이 JSX로 만든 값

const element=(
  <>
  <Hello />
  <Hello />
  <Hello />
  </>
);

reactDom.render(element,document.getElementById('root'));

