export {};

let numbers: number[] = [1, 2, 3];
let strings: string[] = [ "TS", "JS", "Java"];


let numbers2: Array<number> = [1, 2, 3]; // 非推奨, interfaceで抽象化されている型のため
let strings2: Array<string> = ["Tokyo", "Osaka", "Kyoto"];
console.log(numbers)

let nijigenArray: number[][] = [
    [50, 100],
    [150, 300],
];

let array: (number| boolean| string)[] = [ 1, false, "japan"]
