var nickname = "taro"
console.log(nickname);
var nickname = "ichiro"
console.log(nickname);

var str = "webcamp" //グローバルスコープ

function foo(){
  var str 
  console.log(str)
  str = "dmm webcamp"
  console.log(str)
}

foo()
