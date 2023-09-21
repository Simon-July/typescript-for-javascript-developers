export {}; // 外部ファイルへのexportする対象がない場合の書き方

// nameという変数名がlib.dom.d.tsというファイルで既に宣言されて(declared)おり、その変数名と競合してしまう。
// 影響を及ぼさないようにするには、モジュール化を行う
// モジュール化 = TypeScriptでは、importあるいはexportがあればどんなファイルでもモジュールとみなされる。
let name = "TypeScript"

let isFinished: boolean = true;
isFinished = false;

console.log({isFinished})