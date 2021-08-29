// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//function of the Readme file once all data is collected
const renderReadme = (input) => {
  return `
  # ${input.title}

  ## Heading
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
    choices: ["GPL", "Apache", "MIT"],
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
