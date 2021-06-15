"use strict";
// tsc in console for running
var a = 5;
var b = "dasdsa";
var c = "sdasdasda"; // u can use native js
var e = true;
var d = ["dsadsa", "dsad", "dsa"]; // arr of strings
var f = [1, 2, 3];
var s = 3; // any type of var
var t = "2";
function test(a) {
    // after : what type of value will return a function
    return "";
}
function test1(a) {
    // after : what type of value will return a function (string or number)
    return "";
}
d = d.map(function (el) { return el.toLowerCase(); });
var countCoord = function (coord) { }; // waiting a object with two options
var printIt = function (id) {
    if (typeof id == "number")
        console.log(id.toString());
    else if (typeof id == "string")
        console.log(id.toLowerCase());
};
var getSum = function (a) {
    if (Array.isArray(a)) {
        a.forEach(function (el) { return console.log(el); });
    }
};
var z = null;
var x = undefined;
var printIn = function (coord) { };
var testsss = function (point) {
    var d = point;
    console.log(d);
};
testsss({ x: 3, y: 2 });
var myCanvas = document.getElementById("canvas");
var str = "test"; // only string type
var str1 = "test"; // литеральный тип ( может быть только test)
function performAction(action) {
    switch (action) {
        case "up": {
            return -1;
        }
        case "down": {
            return 1;
        }
    }
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "UP";
    DirectionStr["Down"] = "DOWN";
    DirectionStr["Left"] = "LEFT";
    DirectionStr["Right"] = "RIGHT";
})(DirectionStr || (DirectionStr = {}));
