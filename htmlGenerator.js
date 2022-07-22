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