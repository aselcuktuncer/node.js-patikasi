const fs = require('fs')

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if(err) {
        console.log(err)
    }else{
        console.log('File is created.')
    }
})

fs.readFile('employees.json', 'utf8', (err,data) => {
    if(err) {
        console.log(err)
    }else{
        console.log(data)
        console.log('File is read.')
    }
})

fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 4000}', 'utf8', (err) => {
    if(err) {
        console.log(err)
    }else{
        console.log('File is edited.')
    }
})

fs.unlink('employees.json',(err) => {
    if(err) {
        console.log(err)
    }else{
        console.log('File is deleted.')
    }
})