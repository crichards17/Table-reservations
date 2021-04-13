const tableListEl = $('#table-list');
const waitListEl = $('#wait-list');

function writeTables(tablesArr) {
    for (table of tablesArr) {
        tableListEl.append(`
            <div style="display:flex; flex-flow:column; border:dashed black">
                <h2>Table # ${table.number}</h2>
                <h2>ID: ${table.customer.id}</h2>
                <h2>Name: ${table.customer.name}</h2>
                <h2>Email: ${table.customer.email}</h2>
                <h2>Phone: ${table.customer.phone}</h2>
            </div>
        `);
    }
}

function writeWaiting(waitingArr) {
    for (cust of waitingArr) {
        waitListEl.append(`
            <div style="display:flex; flex-flow:column; border:dashed black">
                <h2>ID: ${cust.id}</h2>
                <h2>Name: ${cust.name}</h2>
                <h2>Email: ${cust.email}</h2>
                <h2>Phone: ${cust.phone}</h2>
            </div>
        `);
    }
}

fetch('/api/tables')
    .then(response => response.json())
    .then(data => writeTables(data));

fetch('/api/waiting')
    .then(response => response.json())
    .then(data => writeWaiting(data));

// Testing
// const testTableArr = [
//     {
//     tableNum: 1,
//     id: 1,
//     name: "camtest",
//     email: "camtest@test.com",
//     phone: "999-999-9999",
//     },
//     {
//     tableNum: 2,
//     id: 2,
//     name: "camtest",
//     email: "camtest@test.com",
//     phone: "999-999-9999",
//     },
//     {
//     tableNum: 3,
//     id: 3,
//     name: "camtest",
//     email: "camtest@test.com",
//     phone: "999-999-9999",
//     },
//     {
//     tableNum: 4,
//     id: 4,
//     name: "camtest",
//     email: "camtest@test.com",
//     phone: "999-999-9999",
//     },
//     {
//     tableNum: 5,
//     id: 5,
//     name: "camtest",
//     email: "camtest@test.com",
//     phone: "999-999-9999",
//     },
// ];

// const testWaitingArr = [
//     {
//     id: 6,
//     name: "camtest",
//     email: "camtest@test.com",
//     phone: "999-999-9999",
//     },
//     {
//     id: 7,
//     name: "camtest",
//     email: "camtest@test.com",
//     phone: "999-999-9999",
//     },
//     {
//     id: 8,
//     name: "camtest",
//     email: "camtest@test.com",
//     phone: "999-999-9999",
//     },
// ];

// writeTables(testTableArr);
// writeWaiting(testWaitingArr);
// 