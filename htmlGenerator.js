function managerHtml(manager) {
    return `
    <section class="manager empl_card">
                <div class="mgt_heading">
                    <h2 class="job">Manager</h2>
                    <h3 class="name">${manager.name}</h3>
                </div>
                <div class="employee_info">
                    <p class="employee_id">Employee ID: ${manager.id}</p>
                    <p class="office_num">Office Number: ${manager.officeNumber}</p>
                    <p>Email: <a href="mailto:email@email.com" target="_blank" class="email">${manager.email}</a></p>
                </div>
            </section>
    
    `
}

function engineerHtml(engineer) {

    for (let i = 0; i < x.length; i++) {
        
    return `
    <section class="engineer empl_card">
    <div class="eng_heading">
        <h2 class="job">Engineer</h2>
        <h3 class="name">Lucille</h3>
    </div>
    <div class="employee_info">
        <p class="employee_id">Employee ID: 10110</p>
        <p>GitHub: <a href="https://github.com/${Username}" target="_blank" class="github">GiddyLu</a></p>
        <p>Email: <a href="mailto:email@email.com" target="_blank" class="email">engineerLucy@magicplace.net</a></p>
    </div>
</section>
    
    `
}
}

function internHtml(intern) {

    for (let i = 0; i < x.length; i++) {

    return `
    <section class="intern empl_card">
            <div class="int_heading">
                <h2 class="job">Intern</h2>
                <h3 class="name">Timmy</h3>
            </div>
            <div class="employee_info">
                <p class="employee_id">Employee ID: 19055</p>
                <p class="school">School: University of Minnesota</p>
                <p>Email: <a href="mailto:email@email.com" target="_blank" class="email">interntimmy@magicplace.net</a></p>
            </div>
        </section>
    
    `
    }
}




function htmlGenerator(input) {
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Page</title>
        <style>
    
        </style>
    </head>
    <body>
        <header class="header">
            <h1 class="team_heading">Go Team</h1>
        </header>
        <main class="main_body">
    
            <section class="manager empl_card">
                <div class="mgt_heading">
                    <h2 class="job">Manager</h2>
                    <h3 class="name">${input.name}</h3>
                </div>
                <div class="employee_info">
                    <p class="employee_id">Employee ID: ${input.id}</p>
                    <p class="office_num">Office Number: ${input.officeNumber}</p>
                    <p>Email: <a href="mailto:email@email.com" target="_blank" class="email">${input.email}</a></p>
                </div>
            </section>
    
    

    
    
        </main>
        <footer class="footer">
            <h2>Magic Place</h2>
        </footer>
    
        
    </body>
    </html>
    
    
    `

}



module.exports = htmlGenerator;