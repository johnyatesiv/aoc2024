import fs from 'fs';
const input = fs.readFileSync('./input.txt', 'utf8');

const parseMul = function (statement) {
    const arr = statement.split(',');
    const first = arr[0].replace('mul(', '');
    const second = arr[1].replace(')', '');
    console.log(first, second, first*second);
    return first*second;
}

const matches = input.matchAll(/mul\([0-9]+,[0-9]+\)|do\(\)|don't\(\)/g)
// console.log(matches);
let sum = 0;
let enabled = true;
for (let match of matches) {
    let skip = false;
    console.log(match[0]);
    if (match[0] == "do()") {
        console.log("enabling")
        enabled = true;
        skip = true;
    }

    if (match[0] == "don't()") {
        console.log("disabling");
        enabled = false;
        skip = true;
    }

    if (enabled && !skip) {
        sum += parseMul(match[0]);
    }
}

console.log(sum);