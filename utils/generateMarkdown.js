// Function for answers to the questions and how they will appear in the README.md that will be created
function generateMarkdown(answers) {
  return `
# ${answers.TitleofProject}



![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)



## Description
${answers.Description}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)


##  Installation 
${answers.Installation}
  

## Usage 
${answers.Usage}
  

## License 
![badge](https://img.shields.io/badge/license-${answers.License}-brightgreen)
  

This application is covered by the ${answers.License} license. 


##  Contribution 
${answers.Contribution}


## Tests
${answers.Tests}


## Questions
${answers.Questions}  
    

Find me on GitHub: [${answers.Username}](https://github.com${answers.Isername})


Email me if you have any questions: ${answers.Email}
    

  
    `;

}

module.exports = generateMarkdown;