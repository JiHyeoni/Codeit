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


// 비동기 프로그래밍과 콜백
/*
const fs=require('fs');

console.log('Start');
* /

/*
let content=fs.readFileSync('./new','utf8'); //동기실행함수
console.log(content);
*/
/*
fs.readFile('./new','utf8',(error,data)=>{ //비동기실행함수-> node.js는 보통 비동기 실행 함수 사용
  console.log(data);
})
console.log('Finish');
*/

//비동기 프로그래밍과 이벤트
/*
const EventEmitter=require('events'); //코어모듈->클래스 하나를 외부에 공개
const myEmitter=new EventEmitter();
const myEmitter2=new EventEmitter();

myEmitter.on('test',()=>{ //on -> 어떤 이벤트가 발생했을 때 실행할 콜백을 등록할 함수
  console.log('Success!');
});
myEmitter.on('test',()=>{
  console.log('1');
});
myEmitter.on('test',()=>{
  console.log('2');
});
myEmitter2.on('test',()=>{
  console.log('3');
});
//하나의 이벤트에 관해 여러개의 콜백 등록 가능
//이벤트 설정과 콜백 실행은 하나의 이벤트 에미터 객체 안에서만 실행

myEmitter.emit('test'); //emit -> 이벤트를 발생시키는 함수
*/

/*
//이벤트에 추가 정보 함께 전달하기
const EventEmitter=require('events'); 
const myEmitter=new EventEmitter();

myEmitter.on('test',(arg1,arg2)=>{
  console.log('Success!');
  console.log(arg1);
  console.log(arg2);
})

myEmitter.emit('test','apple','banana','pear');

const obj={type:'text',data:'Hello Codeit',date:'2021-07-22'};
myEmitter.on('test1',(info)=>{
  console.log(info);
});
myEmitter.emit('test1',obj);
*/


//웹 서버 만들기
const http=require('http');

let server=http.createServer(function(request,response){
  response.end('<h1>Hello wolrd!</h1>');
});
server.listen(3000);//외부로부터 오는 클라이언트의 요청을 받아들일 준비(포트번호 3000)

let url=new URL('http://example.com/business/mart/item?category=14&id=2965');
console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);
console.log(url.search);

