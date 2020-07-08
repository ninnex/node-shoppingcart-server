
const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const app = express();

app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});

db.connect((error) => {
    if(error)
        console.log ("problem mysql",error);
    else
        console.log("mysql connected!")
})


app.get('/', (req, res) => {
    res.send(data);
}) ;

app.get('/getProducts', (req, res) => {
    let consulta = 'SELECT * FROM products'
    let query = db.query(consulta, (err, results) => 
        
        res.send({"products": results})
            )
    
}) ;

app.listen(9000, () => console.log("Lintening on por 9000..."));


