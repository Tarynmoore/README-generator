// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
            type: 'confirm',
            name: 'Table of Contents?',
            message: 'Do you need a table of contents?',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What installations does the user need?',
        },
        {
            type: 'input',
            name: 'How to use',
            message: 'Instructions on how to use application',
        },
        {
            type: 'list',
            name: 'license options',
            message: 'Select a license for this project',
            choices: [ 
                'MIT',
                'Apache 2.0',
                'Mozilla'
            ]
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'How can people contribute to your project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Any test instructions for your application?',
        },
        {
            type: 'input',
            name: 'github username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }
    ])
}
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile('./README.md', )
 }

// TODO: Create a function to initialize app
function init() { 
    questions();
}

// Function call to initialize app
init();
