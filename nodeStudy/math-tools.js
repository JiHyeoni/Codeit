function add(a,b){
  return a+b;
}

exports.plus=add; // add함수가 모듈 외부로 공개
//exports.모듈외부로 공개할 이름 = 모듈 내부에서의 이름;

let calculator={
  PI:3.14,
  add:(a,b)=>a+b,
  substract:(a,b)=>a-b,
  multiply:(a,b)=>a*b,
  divide:(a,b)=>a/b,
};

module.exports=calculator;
//공개하고 싶은 것들을 모은 객체를 외부에 공개 할 때는 module.exports 써야함
