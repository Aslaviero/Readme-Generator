// Function for answers to the questions and how they will appear in the README.md that will be created
function generateMarkdown(answers) {
  return `
    <h1> ${answers.TitleofProject}</h1>



  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)



  ## ** Description **
    ${answers.Description}


  ## ** Table of Contents **
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)


  ##  Installation 
    ${answers.installation}
  

  ## Usage 
    ${answers.usage}
  

  ## License 
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  

  This application is covered by the ${answers.license} license. 


  ##  Contribution 
    ${answers.contribution}


  ## Tests
    ${answers.tests}


  ## Questions
    ${answers.questions}  
    

    :octocat: Find me on GitHub: [${answers.username}](https://github.com${answers.username})


    Email me if you have any questions: [${answers.email}]
    

  
    `;

}

module.exports = generateMarkdown;