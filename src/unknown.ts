export {}

let func = ():number => 43;

let numberAny: any = func();
let numberUnknown: unknown = func();

let sumAny = numberAny + 10;
// let sumUnknown = numberUnknown + 10; unknown型なので無理

console.log(typeof numberUnknown)
if ( typeof numberUnknown === "number"){ // typeガード！
    let sumUnknown = numberUnknown + 10;
    console.log(sumUnknown)
}
