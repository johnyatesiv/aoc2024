import fs from "fs";

const calcSimilarity = (num, l2h) => {
    if (l2h[num.toString()]) {
        return num * parseInt(l2h[num], 10);
    } else {
        return 0;
    }
}

const list1 = []
const list2 = []
const list1_h = {};
const list2_h = {};

const parsed = JSON.parse(fs.readFileSync("parsed.json", "utf8"));
for (let row of parsed) {
    const l = parseInt(row[0])
    const r = parseInt(row[1]);
    list1.push(l);
    list2.push(r);

    if (list1_h[l] == null || list1_h[l] == undefined) {
        list1_h[l] = 1
    } else {
        list1_h[l] = list1_h[l]+1;
    }

    if (list2_h[r] == null || list2_h[r] == undefined) {
        list2_h[r] = 1
    } else {
        list2_h[r] = list2_h[r]+1;
    }
}

const list1_s = list1.sort((a, b) => a > b ? 1 : -1)
const list2_s = list2.sort((a, b) => a > b ? 1 : -1)

const diffs = []

for (let i in list1_s) {
    diffs.push(Math.abs(list1_s[i] - list2_s[i]))
}

const sum = diffs.reduce((el, acc) => acc + el, 0)

console.log(`The sum is ${sum}`);

let similaritySum = 0;
for (let num of list1_s) {
    similaritySum += calcSimilarity(num, list2_h)
}

console.log(`The similaritySum is ${similaritySum}`);