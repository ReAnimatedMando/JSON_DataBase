const fs = require('fs')

function readDb(dbName = 'db.json') {
    // read JSON object from file
    const data = fs.readFileSync(dbName, 'utf-8')

    // parse the JSON to object and return it
    const converted_data = JSON.parse(data)
    return converted_data
}

function writeDb(obj, dbName = 'db.json') {
    // check that a user has passed in an object
    if (!obj) {
        return 
    }

    try {
        let converted_data = JSON.stringify(obj)
        fs.writeFileSync(dbName, converted_data)
        console.log('Save successful')
    }catch(err) {
        console.log('Failed to save data\n', err.message)
    }
    // convert our object to the JSON format

    // save JSON to our JSON database
}

module.exports = {
    readDb, writeDb
}