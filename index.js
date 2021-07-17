#!/usr/bin/env node

const path = require("path");
const program = require("commander");
const packageJson = require("./package.json");
const { organizeDir } = require("./organizer");

program.version(packageJson.version).description(packageJson.description);

program
    .command("organize", { isDefault: true })
    .description("Organize files in the current directory")
    .option("-l, --log", "Generate Log file", false)
    .option("-d, --date", "Use date separation.", false)
    .action((options) => {
        const { log, date } = options;
        organizeDir(path.resolve(process.cwd()), log, date);
    });

program.parse(process.argv);
