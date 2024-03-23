const fs = require('fs');

function createJSON(data, fileName) {
    if (fs.existsSync(fileName)) {
        const jsonData = fs.readFileSync(fileName, 'utf8')
        const existingData = JSON.parse(jsonData);

        data = [...existingData, ...data]
    }

    const dataJSON = JSON.stringify(data, null, 2);

    // Write the JSON string to a file named ids.json
    fs.writeFile(fileName, dataJSON, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File successfully written!');
        }
    });
}

module.exports = {createJSON}
