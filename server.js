const http = require('axios')
const data = require('./url_data.json');

async function testUrls(data) {
        for(url of data.get) {
            result = await http.get(url).catch(err => { return {status: err.message}})
            console.log(url, ':', result.status)
         }
}

testUrls(data).then(result => console.log('completed'))
