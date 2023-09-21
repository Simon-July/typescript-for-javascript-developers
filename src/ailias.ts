export {};

type Mojiretsu = string;

const fooString: Mojiretsu = "hello"

type Profile = {
    name: string;
    age: number;
}


const user: Profile = {
    name: "Ham",
    age: 20,
}

type Profile2 = typeof user

const user2: Profile2 = {
    name: "Hom",
    age: 24,
}
