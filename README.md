# Team Profile Generator
By Logan Sutton

## Description

Using Node.js with the Inquirer NPM (v8.2.4), the goal of this project was to develop a command line application that would generate an HTML file to present information on an indefinite number of employees on a work team.

Upon initialization, the user would be presented with a prompt to enter the name, id number, email, and office number for the work team manager. After entering this information, the user is then presented with the option to add an Engineer or an Intern to the work team, or to close out the prompt and generate the `index.html` file with only the information entered so far. If the user opts to add an Engineer to the work team, they are presented with a prompt to enter the engineer's name, id number, email, and GitHub username. If the user opts to add an Intern to the work team, they are presented with a prompt to enter the intern's name, id number, email, and school. At the end of both the Engineer and Intern question prompts, the user is again presented with the option to add an Engineer, Intern, or to generate the HTML file with only the information entered so far. In this way, the user may add as many Engineers or Interns to the team as is desired.

Validation is used for the user input to the question prompts. The user must enter some information in each field; the id number must be a numeral input, and regular expressions are used to check whether the Engineer GitHub username and the emails are well-formed according to conventional restrictions on these categories.

A pre-made CSS stylesheet accompanies this project and is automatically linked to the generated `index.html` file. Team member information is presented on separate section cards. The Engineer GitHub username that is listed is active as a link to the Engineer's GitHub profile page. All emails open the user's default email in a separate tab on click.

## Table of Contents  

- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [How to Contribute](#how-to-contribute)  
- [Tests](#tests)  
- [Questions](#questions)  

## Installation

This README project requires the installation of Node.js, Inquirer 8.2.4 NPM, and Jest NPM for testing, running in an appropriate command line terminal.

## Usage

Once the appropriate supporting software is installed, open the command line terminal and navigate to the folder where the index.js file is located. Run the command line node index.js to activate the command line prompt to begin generating the HTML file. The final index.html file is generated in the `dist` folder.

## License

All Rights Reserved. No license is assigned to this project.

Copyright (c) 2022 Logan Sutton.  

## How to Contribute
  
This app was created as a graded class challenge. No contribution is requested at present.  

## Tests

Tests are provided with this project package to test the assignment of properties to the classes used.

## Questions

[LSton40 GitHub](https://github.com/LSton40)  

If you have any questions, please contact me at logan.sutton@gmail.com.