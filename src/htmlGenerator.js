//Generates and populates the HTML for the Manager employee card
function managerHtml(manager_data) {

    let manager = manager_data[0];

    return `
        <section class="manager empl_card">
            <div class="mgt_heading">
                <h2 class="job">Manager</h2>
                <h3 class="name">${manager.name}</h3>
            </div>
            <div class="employee_info">
                <p class="employee_id">Employee ID: ${manager.id}</p>
                <p class="office_num">Office Number: ${manager.officeNumber}</p>
                <p>Email: <a href="mailto:${manager.email}" target="_blank" class="email">${manager.email}</a></p>
            </div>
        </section>`
};

//Generates and populates the HTML for an Engineer employee card
function engineerHtml(engin) {

    let eText = "";

    if (engin === []) {
        eText = "";
    } else {

        engin.forEach((engineer) => {

            eText += `
        <section class="engineer empl_card">
            <div class="eng_heading">
                <h2 class="job">Engineer</h2>
                <h3 class="name">${engineer.name}</h3>
            </div>
            <div class="employee_info">
                <p class="employee_id">Employee ID: ${engineer.id}</p>
                <p>GitHub: <a href="https://github.com/${engineer.github}" target="_blank" class="github">${engineer.github}</a></p>
                <p>Email: <a href="mailto:${engineer.email}" target="_blank" class="email">${engineer.email}</a></p>
            </div>
        </section>`
        });
    };
    return eText;
};

//Generates and populates the HTML for an Intern employee card
function internHtml(int) {

    let iText = "";

    if (int === []) {
        iText = "";
    } else {
        int.forEach((intern) => {

            iText += `
        <section class="intern empl_card">
            <div class="int_heading">
                <h2 class="job">Intern</h2>
                <h3 class="name">${intern.name}</h3>
            </div>
            <div class="employee_info">
                <p class="employee_id">Employee ID: ${intern.id}</p>
                <p class="school">School: ${intern.school}</p>
                <p>Email: <a href="mailto:${intern.email}" target="_blank" class="email">${intern.email}</a></p>
            </div>
        </section>`
        });
    };
    return iText;
};

//Generates the HTML and populates it with user input from prompts 
function htmlGenerator(input) {

    let manager = input.filter((element) => {return element.getRole() === 'Manager'});
    let engineer = input.filter((element) => {return element.getRole() === 'Engineer'});
    let intern = input.filter((element) => {return element.getRole() === 'Intern'});

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Team Page</title>    
</head>
<body>
    <header class="header">
        <h1 class="team_heading">Go Team</h1>
    </header>
    <main class="main_body">
        ${managerHtml(manager)}
        ${engineerHtml(engineer)}
        ${internHtml(intern)}
    </main>
    <footer class="footer">
        <h2>Magic Place</h2>
    </footer>       
</body>
</html>`
}

//Exports the htmlGenerator function for other files to reference
module.exports = htmlGenerator;