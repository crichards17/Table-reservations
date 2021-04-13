const vTables= document.querySelector('#viewTables')
vTables.addEventListener("click", goToTables)
const resPage= document.querySelector('#goHome')
resPage.addEventListener('click', goToHomePage)
const submitBtn= document.querySelector('#submit')
submitBtn.addEventListener('click',saveToJSONObj)
const reservaction =[]

function goToTables(){
    window.location.replace('./tables.html')
}

function goToHomePage(){
    window.location.replace('./home.html')
}

function saveToJSONObj(){
    const customerName=document.getElementById('userName').value;
    const phoneNumber=document.getElementById('phoneNumber').value;
    const email=document.getElementById('userEmail').value;
    const uniqueID=document.getElementById('userID').value
    console.log(customerName, phoneNumber,email,uniqueID)
    reservaction.push({
        name:customerName,
        phone:phoneNumber,
        email:email,
        ID:uniqueID,
    })
    console.log(reservaction)
}




