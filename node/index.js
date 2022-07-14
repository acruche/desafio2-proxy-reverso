const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) VALUES ('Roberto')`
connection.query(sql)
const select = `SELECT * FROM people`


app.get('/', (req,res) => {
    
    connection.query(select, function(err, result, fields) {
        let data = "<ol>";
        for(let i=0; i<result.length; i++) {
            data += "<li>" + result[i]['name'] +"</li>";
        }
        data += "</ol>";

        res.send(`
            <h2>Full Cycle</h2>
            <h3>Usurários cadastrados</h3>
            ${data}
        `)
    })
    
})


app.listen(port, () => {
    console.log("Rodando na porta " + port)
})