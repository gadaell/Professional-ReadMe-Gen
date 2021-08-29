// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
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
    // validate: (nameInput)
  },
];

inquirer.prompt(questions).then(function (data) {
  // TODO: Create a function to write README file
  const template = renderReadme(data);

  fs.writeFile("./dist/README.md", template, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success! It will be in the dist folder.");
  });
});
