const vTables= document.querySelector('#viewTables')
vTables.addEventListener("click", goToTables)
const resPage= document.querySelector('#goHome')
resPage.addEventListener('click', goToHomePage)

function goToTables(){
    window.location.replace('./tables.html')
}

function goToHomePage(){
    window.location.replace('./home.html')
}