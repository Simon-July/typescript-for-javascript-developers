export {};

// null型

let absence: null = null; // nullを代入しても型推論ではanyになるため、nullだけにしたいなら型定義する必要あり

// undefinedも同じ
let test = undefined;
let test2:undefined = undefined;
