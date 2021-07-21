/*
let m = require('./math-tools.js')
//require -> 모듈을 로드해서 객체 1개를 리턴

//console.log(m.plus(1,2));
console.log(m.PI);
console.log(m.add(2,4));
console.log(m.substract(1,2));
console.log(m.multiply(1,2));
console.log(m.divide(1,2));
*/

/*
//코어 모듈
const fs=require('fs'); //filesystem
let fileList=fs.readdirSync('.');
console.log(fileList);
fs.writeFileSync('new','Hello Node.js!');

const os=require('os'); //운영체제
console.log(os.cpus());


//서드파티 모듈
const cowsay=require('cowsay');
console.log(cowsay.say({
  text:"I love javascript",
}));
*/


const fs=require('fs');

console.log('Start');

/*
let content=fs.readFileSync('./new','utf8'); //동기실행함수
console.log(content);
*/

fs.readFile('./new','utf8',(error,data)=>{ //비동기실행함수-> node.js는 보통 비동기 실행 함수 사용
  console.log(data);
})
console.log('Finish');