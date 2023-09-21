export {};

function calBMI(height: number, weight: number):number {
    return weight/(height*height)
}

console.log(calBMI(160, 53))


// 無名関数バージョン
let bmi = function(height: number, weight: number):number { // 優秀な型推論　let bmi: (height: number, weight: number) => number
    return weight/(height*height)
}

// 以下のように書き直す
let bmi2:(height: number, weight: number) => number = function(
    height: number,
    weight: number
):number{
    return weight/(height*height)
}
console.log(bmi(160, 53))

// オプショナルな引数を追加する
let bmi3:(height: number, weight: number, printable?: boolean) => number = function(
    height: number,
    weight: number,
    printable?: boolean,
):number {
    const bmi: number = weight/(height*height)
    if(printable){
        console.log({bmi})
    }
    return bmi
}

console.log(bmi3(160,86))

// デフォルトパラメータの設定 引数に直接＝で書ける
const nextYearSalary = (currentSalary: number, rate:number = 1.1) => {
    return currentSalary * rate;
}
console.log(nextYearSalary(1000))s