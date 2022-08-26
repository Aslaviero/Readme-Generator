// Declaring the dependencies and variables.
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

// Added in seperate questions to be asked with node index.js is ran in terminal
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "TitleofProject",
            message: "What is the name of the project?",
        },
        {
            type: "input",
            name: "Description",
            message: "Write a brief description of your project?",
        },
        {
            type: "input",
            name: "Installation",
            message: "Describe the installation process if there is any.",
        },
        {
            type: "input",
            name: "Usage",
            message: "What is this project used for?",
        },
        {
            type: "list",
            name: "License",
            message: "Choose the appropriate license for this project:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "Contribution",
            message: "Who are the contributors of this project?",
        },
        {
            type: "input",
            name: "Tests",
            message: "Is there a test included?",
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I run into an issue?",
        },
        {
            type: "input",
            name: "username",
            message: "Please enter GitHub username:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email:",
        }
    ]);
}

//This init function will call in the questions and await for user answer before moving onto the next question then when all questions after answered it should create a README.md file
 async function init() {
    try{
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        console.log(generateContent)
        await writeFileAsync('./dist/README.md',JSON.stringify(generateContent));
        console.log('Successfully wrote to README.md');
    } catch(err) {
        console.log(err);
    }
}

init();