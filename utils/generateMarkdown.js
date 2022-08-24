// Function for answers to the questions and how they will appear in the README.md that will be created
function generateMarkdown(answers) {
  return
  `<h1 align="center">${answers.TitleofProject} </h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

  ##Description
    ${answers.Description}

  ##Table of Contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contribution](#contribution)
    -[Tests](#tests)
    -[Questions](#questions)

  ##Installation
    ${answers.installation}
  
  ##Usage
    ${answers.usage}
  
  ##License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license. 

  ##Contribution
    ${answers.contribution}

  ##Tests
    ${answers.tests}

  ##Questions
    ${answers.questions}  <br />
    <br />
    :octocat: Find me on GitHub: [${answers.username}](https://github.com${answers.username})<br /> 
    <br />

    Email me if you have any questions: [${answers.email}]<br />
    <br />
  
    _This README was created by [README-generator](https://github.com/Aslaviero/Readme-Generator)_
    `;
}

module.exports = generateMarkdown;