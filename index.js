// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//Variable icons for licenses
const licenses = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  GPL: "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)",
  APACHE:
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
};
const licensesLink = {
  MIT: "[Here](https://www.mit.edu/~amini/LICENSE.md)",
  GPL: "[Here](https://www.gnu.org/licenses/gpl-3.0.en.html)",
  APACHE: "[Here](https://www.apache.org/licenses/LICENSE-2.0)",
};

//function of the Readme file once all data is collected
const renderReadme = (input) => {
  return `
  # ${input.title}

  ## License
  ${licenses[input.license]}

  Click ${licensesLink[input.license]} for information on the license.
  
  ## Table of Contents
  - [Project-Description](#Project-Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Testing-Process](#Testing-Process)
  - [Questions](#Questions)

  ### Project-Description
  ${input.description}

  ### Installation
  ${input.installation}

  ### Usage
  ${input.usage}

  ### Contribution
  ${input.contribution}

  ### Testing-Process
  ${input.test}

  ### Questions
    - Contact information, if you have any questions or concerns
    ${input.email}
    - GitHub Link
    ${input.githubURL}

  `;
};
// TODO: Create an array of questions for user input
//Prompt user with questions for their ReadMe
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Requirement)",
    //validate the answer given
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You must enter a valid title name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please add a description of the project. (Requirement)",
    //validate the answer given
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You must enter a description of the project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "How long can the individual use this application? (Requirement)",
    //validate the answer given
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log(
          "You must enter an usage time duration. For example: indefinitely or 3 days."
        );
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license from the provided list.",
    choices: ["GPL", "APACHE", "MIT"],
  },
  {
    type: "input",
    name: "installation",
    message:
      "Provide a step by step instruction on how to access your application. (Requirement)",
    //validate the answer given
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log(
          "You must enter a step by step guide for your application."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Are there any limitations/restrictions for your application as far as contributors. (Requirement)",
    //validate the answer given
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log(
          "You must enter any limitations/restrictions. If not please put No."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message:
      "Please inform the user on how to test your application. (Requirement)",
    //validate the answer given
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You must enter how to test the application.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
  },
  {
    type: "input",
    name: "githubURL",
    message:
      "Please provide your github URL to your application. (Requirement)",
    //validate the answer given
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You must enter your github URL.");
        return false;
      }
    },
  },
];
// Function for the creation of the ReadMe.md
inquirer.prompt(questions).then((data) => {
  // TODO: Create a function to write README file
  const template = renderReadme(data);
  // location of the ReadMe file
  fs.writeFile("./output/README.md", template, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! It will be in the output folder.");
  });
});
