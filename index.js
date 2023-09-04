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
  email,
  githubUsername
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
If you have any questions, you can reach me at ${email}. You can also check out my GitHub profile at [${githubUsername}](https://github.com/${githubUsername}).`;
}

function writeR(content) {
  fs.writeFile("Readme1.md", content, (err) => {
    if (err) {
      console.log("Eror writing Readme.md file", err);
    } else {
      console.log("Readme.md file created successfullyy");
    }
  });
}

const input = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Could you write the discription of your app?",
  },
  {
    type: "input",
    name: "instalation",
    message: "Write your instalatio instruction, please:",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage instructions:",
  },
  {
    type: "list",
    name: "licence",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache-2.0", "GPL-3.0", "Other"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are contribution guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter github username",
  },
];

function generateContent() {
  inquirer.prompt(input).then((answers) => {
    const readmeContent = generateReadme(
      answers.title,
      answers.description,
      answers.installation,
      answers.usage,
      answers.license,
      answers.contributing,
      answers.tests,
      answers.email,
      answers.githubUsername
    );

    writeR(readmeContent);
  });
}
generateContent();
