const { writeFileSync } = require("fs");
const moment = require("moment");
const path = require("path");

let logContent = "";

module.exports.log = (content) => {
    console.log(content);
    logContent += `${content.replace(/\u001b\[.*?m/g, "")}\n`;
};

module.exports.generateLogFile = (workingDir) => {
    const filename = `fileorganizer-${moment().format("YYYY-MM-DD-HH-m-s")}.log`;
    const logPath = path.resolve(workingDir, filename);
    writeFileSync(logPath, logContent);
};
