const numbers = [2, 20, 0, 4, 1, 17];

function doThing(nums, turn) {
    let myNums = nums.slice(0);
    let i
    for (i = nums.length + 1; i < turn + nums.length; i++) {
        let n = myNums[myNums.length - 1];

        if (myNums.indexOf(n) == myNums.length - 1)
            myNums.push(0);
        else {
            let tmpNum = myNums.slice(0, -1).lastIndexOf(n) + 1;
            n = myNums.lastIndexOf(n) + 1 - tmpNum;
            myNums.push(n);
        }
    }
    //console.log(i)
    //console.log(myNums)
    return myNums[myNums.length - 1];
}

let testArray = [
    [0, 3, 6],
    [1, 3, 2],
    [2, 1, 3],
    [1, 2, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2],
];

testArray.forEach(t => { console.log(doThing(t, 2018)) })

console.log(doThing(numbers, 2018))