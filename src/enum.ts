export {};

enum Months {
    January = 1,
    Febrary,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

 console.log(Months.January); // 0 自動的にindexをふってくれる, enum自体に値を代入することができる（出力：１）

 enum COLORS {
    RED = "#FF0000",
    WHITE = "#FFFFFF",
    BLUE = "#0000FF"
 }
 console.log(COLORS.RED) // #FF0000

enum COLORS {
    YELLOW = "#FFFF00",
}

console.log(COLORS) // 追加できます