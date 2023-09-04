import fs from "fs";
import inquirer from "inquirer";
console.log(inquirer);

function generateReadme(
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  email
) {
  return `
   # ${title}
   ## Description
   ${description}
   
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, you can reach me at ${email}. You can also check out my GitHub profile at [https://github.com/${githubUsername}](https://github.com/${githubUsername}).`;
}

function writeR(content) {
  fs.writeFile("Readme.md", content, (err) => {
    if (err) {
      console.log("Eror writing Readme.md file", err);
    } else {
      console.log("Readme.md file created successfullyy");
    }
  });
}
