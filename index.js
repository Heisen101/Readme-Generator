import fs from "fs";
import inquirer from "inquirer";
console.log(inquirer);

function generateReadme(title, description) {
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
- [Questions](#questions)`;
}
