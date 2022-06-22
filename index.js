const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const getLicense = (value) => {
    if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "Mozilla") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
} 

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What installations does the user need?',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Instructions on how to use application',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for this project',
            choices: [ 
                'MIT',
                'Apache 2.0',
                'Mozilla'
            ]
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How can people contribute to your project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Any test instructions for your application?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }
    ])
}

const init = () => {
    questions()
    .then((answers) => {
        fs.writeFileSync('README.md', generateMarkdown(answers));
        console.log('README succesfully generated');
     })
     .catch((err) => {
         console.log(err);
    })
}

init();
