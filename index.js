#!/usr/bin/env node

const path = require("path");
const program = require("commander");
const packageJson = require("./package.json");
const { organizeDir } = require("./organizer");

program
    .version(packageJson.version)
    .description(packageJson.description)
    .option("-l, --log", "Generate Log file", false)
    .option("-d, --date", "Use date separation.", false)
    .parse();

const { log, date } = program.opts();

organizeDir(path.resolve(process.cwd()), log, date);
