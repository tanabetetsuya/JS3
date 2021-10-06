var nickname = "taro"
console.log(nickname);
var nickname = "ichiro"
console.log(nickname);

var str = "webcamp" //グローバルスコープ

function foo(){
  console.log(str);
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x);
  console.log(y);
}
foo()
