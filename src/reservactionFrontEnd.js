const tablesPage= document.querySelector('#vTables')
tablesPage.addEventListener('click', goToTables)
const homePage= document.querySelector('#hmBtn')
homePage.addEventListener('click', goToHome)


function goToTables(){
    window.location.replace('./tables.html')
}

function goToHome(){
    window.location.replace('./home.html')
}