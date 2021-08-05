
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <Fragment>
  <p className="hello">안녕</p>
  <p>리액트!</p>
  </Fragment>,//Fragment를 사용하면 불필요한 div 태그를 줄일 수 있음 <></>로도 사용 가능 
  document.getElementById('root')
);


