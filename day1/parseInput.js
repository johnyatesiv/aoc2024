import fs from 'fs';
fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        throw new Error(err);
    }

    const rows = data.split("\n")
    console.log(rows);

    const splitRows = [];
    for (let row of rows) {
        console.log(row);
        splitRows.push(row.split("  "))
    }

    console.log(splitRows);

    fs.writeFileSync("parsed.json", JSON.stringify(splitRows));
})