export {};

// 何も返さない関数を定義する

// 返り値がなくてもundefinedが返ってくる
// function returnNothing() :undefined ERROR! undefinedを明示的にreturnしてないから
function returnNothing() {
    console.log("I dont return anything");
}
console.log(returnNothing());

// 返り値がなくてもundefinedが返ってくる
function returnNothingAddVoid():void {
    console.log("I dont return anything");
}
console.log(returnNothingAddVoid());