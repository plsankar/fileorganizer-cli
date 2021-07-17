const config = require("./config.json");
const moment = require("moment");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { log, generateLogFile } = require("./logger");

const today = moment().format("DD-MM-YYYY");

const getConfigForExtension = (ext) => {
    const configKeys = Object.keys(config);
    for (let i = 0; i < configKeys.length; i++) {
        const configKey = configKeys[i];
        const configItem = config[configKey];
        if (configItem.extensions.indexOf(ext.toLowerCase()) != -1) {
            return configItem;
        }
    }
    return null;
};

const organizeFile = (child, childPath, workingDir, useDate) => {
    const extension = path.extname(childPath);
    if (extension === "") {
        log(`${chalk.bold.blue(child)} - - Skipped ( No Extension )`);
        return;
    }
    const configForExtension = getConfigForExtension(extension.replace(".", ""));
    if (!configForExtension) {
        printStat(child, chalk.yellow.bold("Skipped ( No Config Found )"));
        return;
    }
    let fileFolder = path.resolve(workingDir, configForExtension.folder);
    if (configForExtension.dateSeparation === true && useDate) {
        fileFolder = path.resolve(fileFolder, today);
    }
    if (!fs.existsSync(childPath)) {
        log(`${chalk.bold.blue(child)} - ${chalk.green(extension)} - `);
        printStat(child, chalk.red.bold("Error ( File Not Found )"));
        return;
    }
    fs.mkdirSync(fileFolder, { recursive: true });
    if (!fs.existsSync(fileFolder)) {
        printStat(child, chalk.red.bold("Error ( Unable to create folder )"));
        return;
    }
    const oldPath = childPath;
    const newPath = path.resolve(fileFolder, child);
    fs.renameSync(oldPath, newPath);
    printStat(child, chalk.green.bold("Done"));
};

const printStat = (child, status) => {
    log(`${chalk.cyan(child)} - ${status}`);
};

module.exports.organizeDir = (workingDir, generateLog, useDate) => {
    fs.readdir(workingDir, (err, children) => {
        if (err) {
            log(chalk.red(`Error: ${err}`));
            return;
        }
        if (children.length === 0) {
            log(chalk.red(`Error: No Files Found!`));
            return;
        }
        children.forEach((child) => {
            const childPath = path.resolve(workingDir, child);
            const childStat = fs.lstatSync(childPath);
            if (childStat.isFile()) {
                organizeFile(child, childPath, workingDir, useDate);
            }
        });
        if (generateLog) {
            generateLogFile(workingDir);
        }
    });
};
