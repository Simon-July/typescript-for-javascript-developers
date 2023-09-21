export {};

// never 呼び元に戻ってこないときの型
function error(message: string):never {
    throw new Error(message);
}

try {
    let result= error("errorです")
    console.log({result})
}catch(error){
    console.log({error});
}

// voidとneverの違い
// voidはreturnされる値がないこと、呼び元に返ってくる
// neverは呼び元に帰らない（実行したらおわり）なので値を代入できない

let foo:void = undefined;
// let bar:never = undefined; ERROR
