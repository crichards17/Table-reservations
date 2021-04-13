const tableListEl = $('#table-list');
const waitListEl = $('#wait-list');

// Testing
const testArr = [
    {
    id: 1,
    name: "camtest",
    email: "camtest@test.com",
    phone: "999-999-9999",
    },
    {
    id: 1,
    name: "camtest",
    email: "camtest@test.com",
    phone: "999-999-9999",
    },
    {
    id: 1,
    name: "camtest",
    email: "camtest@test.com",
    phone: "999-999-9999",
    },
    {
    id: 1,
    name: "camtest",
    email: "camtest@test.com",
    phone: "999-999-9999",
    },
    {
    id: 1,
    name: "camtest",
    email: "camtest@test.com",
    phone: "999-999-9999",
    },
    {
    id: 1,
    name: "camtest",
    email: "camtest@test.com",
    phone: "999-999-9999",
    },
    {
    id: 1,
    name: "camtest",
    email: "camtest@test.com",
    phone: "999-999-9999",
    },
];
// 

function writeTables(resArr) {
    let i = 1;
    for (table of resArr) {
        tableListEl.append(`
            <div style="display:flex; flex-flow:column; border:dashed black">
                <h2>Table # ${i}</h2>
                <h2>ID: ${table.id}</h2>
                <h2>Name: ${table.name}</h2>
                <h2>Email: ${table.email}</h2>
                <h2>Phone: ${table.phone}</h2>
            </div>
        `);
        i++;
        if (i > 5) {
            writeWaiting(resArr);
            break;
        }
    }
}

function writeWaiting(resArr) {
    for (let i = 5; i < resArr.length; i++) {
        let table = resArr[i]
        waitListEl.append(`
            <div style="display:flex; flex-flow:column; border:dashed black">
                <h2>Table # ${i + 1}</h2>
                <h2>ID: ${table.id}</h2>
                <h2>Name: ${table.name}</h2>
                <h2>Email: ${table.email}</h2>
                <h2>Phone: ${table.phone}</h2>
            </div>
        `);
    }
}
// Test:

writeTables(testArr);

