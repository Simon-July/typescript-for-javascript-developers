export {}

type Pitcher = {
    throwingSpeed: number;
}

type Batter = {
    battingAverage: number;
}

const joe: Pitcher = {
    throwingSpeed: 154
}

const duke: Batter = {
    battingAverage: 0.5
}

type TwoWayPlayer = Pitcher & Batter;

const ryan: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.222
}