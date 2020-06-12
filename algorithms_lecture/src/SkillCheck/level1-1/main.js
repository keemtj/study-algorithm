const fs = require("fs");
const path = require("path");

const pathDir = __dirname;

function readTestFile(fileName) {
  return fs.readFileSync(fileName).toString();
}

function runTest(fileName) {
  let s = readTestFile(fileName);
  s = s.split("").sort((a, b) => (a < b ? 1 : -1));
  s = `${s.join("")}`;
  console.log(s);
}

fs.readdir(pathDir, (err, files) => {
  files.forEach((file) => {
    if (file.split(".")[1] !== "txt") {
      return;
    }

    console.log(`Testing ${file}...`);
    console.log("====================================");
    console.log("Test Ouput:");

    const tStart = new Date().getTime();
    runTest(path.join(pathDir, file));
    const tDiff = new Date().getTime() - tStart;

    console.log(`${tDiff}ms ellapsed.`);
    console.log("====================================\n");
  });
});
