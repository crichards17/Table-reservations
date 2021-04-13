const vTables= document.querySelector('#viewTables')
vTables.addEventListener("click", goToTables)
const resPage= document.querySelector('#makeRes')
resPage.addEventListener('click', goToResPage)

function goToTables(){
    window.location.replace('./tables.html')
}

function goToResPage(){
    window.location.replace('./reservactions.html')
}