const createManager = function(manager){
    return `
    <div class='col-4 mt-3'>
        <div class='card h-100'>
            <div class="card-header text-white bg-info">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class='card-body'>
                <p>ID: ${manager.id}</p>
                <p>Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
                <p>Office: ${manager.office}</p>
            </div>
        </div>
    </div>
    `
    
}

const createEngineer = function(engineer){ 
    return `
    <div class='col-4 mt-3'>
        <div class='card h-100'>
            <div class="card-header text-white bg-info">
                <h2>${engineer.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class='card-body'>
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></p>
                <p>Office: ${engineer.office}</p>
            </div>
        </div>
    </div>
    `
}

const createIntern = function(Intern) {
    return `
    <div class='col-4 mt-3'>
        <div class='card h-100'>
            <div class="card-header text-white bg-info">
                <h2>${Intern.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class='card-body'>
                <p>ID: ${Intern.id}</p>
                <p>Email: <a href='mailto:${Intern.email}'>${Intern.email}</a></p>
                <p>Office: ${Intern.office}</p>
            </div>
        </div>
    </div>
    `
}

generateHTML = (data) => {
    cardArray =[]

    for(i = 0; i < data.length; i++){
        const employee = data[i]
        const employeeRole = employee.getRole()
        if (role === 'Manager') {
            const cardManager = createManager(employee)
            cardArray.push(cardManager)
        }
        if (role === 'Intern') {
            const cardIntern = createIntern(employee)
            cardArray.push(cardIntern)
        }
        if (role ==='Engineer') {
            const cardEngineer = createEngineer(employee)
            cardArray.push(cardEngineer)
        }
    }
    const teamCards = cardArray.join('')
    const teamCreate = teamCreateCompleted(allCards)
    return teamCreate
}

const teamCreateCompleted = function(allCards){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <nav class="navbar bg-primary">
                <h1 class="text-center w-100">Meet Your Team!</h1>
            </nav>
        </header>
        <main>
            <div class="container mt-4">
                <div class="row justify-content-center" id="main-team">
                    ${allCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </html>
  `;
}

module.exports =generateHTML