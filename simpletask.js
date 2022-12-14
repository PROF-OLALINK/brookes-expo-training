const arr = [
    {
        title: "item 1",
        isDone: true
    },
    {
        title: "item 2",
        isDone: false
    },
    {
        title: "item 3",
        isDone: true
    },
    {
        title: "item 4",
        isDone: false
    },
    {
        title: "item 5",
        isDone: true
    },
    {
        title: "item 6",
        isDone: false
    },
    {
        title: "item 7",
        isDone: false
    },
];

let trueArray = arr.filter(a => a.isDone);
let falseArray = arr.filter(a => !a.isDone);

const allArr = [
    ...falseArray,
    ...trueArray
];

console.log("allArr", allArr);