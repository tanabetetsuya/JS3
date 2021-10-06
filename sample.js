var nickname = "taro"
console.log(nickname);
var nickname = "ichiro"
console.log(nickname);

var str = "webcamp" //グローバルスコープ

fanction foo(){
  console.log(str);
  var y = "hello" //関数スコープ
}

console.log(y);