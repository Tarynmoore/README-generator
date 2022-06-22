function generateMarkdown(data) {
  return `# Project Title 
  ${data.title}

  # Table of Contents 
    * Description
    * Installations
    * Instructions
    * License
    * Contributions
    * Tests
    * Github Username
    * Contact Email  

  # Description 
  ${data.description}

  # Installations Needed 
  ${data.installations} 

  # Instructions 
  ${data.instructions}

  # License 
  ${data.license}

  # Contribute to project 
  ${data.contributions}

  # Test instructions 
  ${data.tests}


  Questions? Contatct me at either:
  # Github username
  ${data.username}

  # Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
