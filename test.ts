// tsc in console for running

const a: number = 5;
const b: string = "dasdsa";
const c = "sdasdasda"; // u can use native js
const e: boolean = true;
let d: string[] = ["dsadsa", "dsad", "dsa"]; // arr of strings
const f: number[] = [1, 2, 3];
const s: any = 3; // any type of var

const t: number | string = "2";

function test(a: string): string {
  // after : what type of value will return a function
  return "";
}

function test1(a: string): string | number {
  // after : what type of value will return a function (string or number)
  return "";
}

d = d.map((el: string) => el.toLowerCase());

const countCoord = (coord: { lat: number; long?: number }) => {}; // waiting a object with two options

const printIt = (id: number | string) => {
  if (typeof id == "number") console.log(id.toString());
  else if (typeof id == "string") console.log(id.toLowerCase());
};

const getSum = (a: number | number[]) => {
  if (Array.isArray(a)) {
    a.forEach((el: number) => console.log(el));
  }
};

const z: null = null;
const x: undefined = undefined;

// types

type Point = {
  x: number;
  y: number;
};
type D3Point = Point & {
  // similar
  z: number;
};

interface IPoint {
  x: number;
  y: number;
}
interface I3DPoint extends IPoint {
  // similar
  z: number;
}

const printIn = (coord: Point) => {};
const testsss = (point: IPoint) => {
  const d: I3DPoint = point as I3DPoint;
  console.log(d);
};

testsss({ x: 3, y: 2 });

const myCanvas = document.getElementById("canvas") as HTMLCanvasElement;

interface Test {
  a: number;
}

interface Text {
  b: number;
}

interface NewText extends Test {
  // will have a and b
  // can't using this in types
}

interface WorkTestInfo {
  desc: string;
  isActive: boolean;
}

interface WorkTestTags {
  name: string;
  value: number;
}

interface WorkTest {
  userId: number;
  id: number;
  title: string;
  info: WorkTestInfo;
}

let str: string = "test"; // only string type
let str1: "test" = "test"; // литеральный тип ( может быть только test)

type ActionType = "up" | "down";

function performAction(action: ActionType): -1 | 1 {
  switch (action) {
    case "up": {
      return -1;
    }
    case "down": {
      return 1;
    }
  }
}

interface ComplexAction {
  s: string;
}

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

enum Direction1 {
  Up = 1, // 1
  Down, // 2
  Left, // 3
  Right, // 4
}

enum DirectionStr {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const enum ConstEnum {
  A,
  B,
}

let sds = ConstEnum.A; // 0

enum Dice {
  One = 1,
  Two,
  Three,
}

function ruDice(dice: Dice) {
  switch (dice) {
    case Dice.One: {
      return 1;
    }
    case Dice.Two: {
      return 2;
    }
    case Dice.Three: {
      return 3;
    }
    default: {
      const a: never = dice;
    }
  }
}

let asdas: [number, string, number] = [0, "a", 1]; // кортеж или tuple // length is fixed but we can add new elements with push after init

asdas.push(2); // working
asdas.length; // 4
//asdas[3] // not working

function logTime<T>(value: T): T {
  // T it's generics // code for reuse (переиспользование)
  console.log(new Date());
  return value;
}

logTime<string>("test");
logTime<number>(12);

interface MyInterface {
  transform: <T, F>(a: T) => F;
}

interface TimeStamp {
  stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
  // T must have the property stamp cause T depends on TimeStamp
  console.log(num.stamp);
  return num;
}
