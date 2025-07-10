#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { program } = require("commander");
const chalk = require("chalk");

// CLI Arguments
program.option("-d, --dir [folder]", "Directory to organize").parse();

const options = program.opts();
const folderName = options.dir || process.cwd();

console.log(chalk.blue(`📂 Organizing files in: ${folderName}`));

// Start Time
const startTime = Date.now();

// Folder existence check
if (!fs.existsSync(folderName)) {
  console.error(chalk.red(`❌ Directory not found: ${folderName}`));
  process.exit(1);
}

// Read files
fs.readdir(folderName, (err, files) => {
  if (err) {
    console.error(chalk.red("❌ Error reading directory:", err.message));
    return;
  }

  if (files.length === 0) {
    console.log(chalk.yellow("⚠️  No files found in directory."));
    return;
  }
  const basePath = path.isAbsolute(folderName)
    ? folderName
    : path.join(process.cwd(), folderName);

  const uniqueExtensions = new Set(
    files.map((file) => path.extname(file).slice(1)).filter((ext) => ext)
  );
  let movedCount = 0;

  uniqueExtensions.forEach((ext) => {
    const folderPath = path.join(basePath, `myfolder_${ext}`);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    files.forEach((file) => {
      if (path.extname(file).slice(1) === ext) {
        const oldPath = path.join(basePath, file);
        const newPath = path.join(folderPath, file);
        fs.renameSync(oldPath, newPath);
        movedCount++;
        console.log(chalk.green(`✅ Moved: ${file} → ${folderPath}`));
      }
    });
  });

  const endTime = Date.now();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

  console.log(chalk.cyan(`\n📊 Summary:`));
  console.log(chalk.cyan(`- Total files moved: ${movedCount}`));
  console.log(chalk.cyan(`- Unique folders created: ${uniqueExtensions.size}`));
  console.log(chalk.cyan(`- Time taken: ${timeTaken} seconds\n`));
});
