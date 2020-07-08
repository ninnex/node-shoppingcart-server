
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



var data = 
{
    "products": [
        {
            "id": 1,
            "title": "Woman Blouse (White)",
            "description" : "Woman t-shirt (White) desc",
            "url" : "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
            "price": 350.00,
            "isFreeShipping" : true
        },

        {
            "id": 2,
            "title": "Men's Plain Tshirt (Green)",
            "description" : "Men's Plain Tshirt (Green) desc",
            "url" : "http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg",
            "price": 220.00,
            "isFreeShipping" : true
        },

        {
            "id": 3,
            "title": "Woman pants (White)",
            "description" : "Woman t-shirt (White) desc",
            "url" : "http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg",
            "price": 15.00,
            "isFreeShipping" : false
        },

        {
            "id": 4,
            "title": "Men's Blazer",
            "description" : "Men's Blazer",
            "url" : "http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg",
            "price": 125.00,
            "isFreeShipping" : false
        },

        {
            "id": 5,
            "title": "Women's Designer Top",
            "description" : "Women's Designer Top",
            "url" : "http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg",
            "price": 400.99,
            "isFreeShipping" : true
        },

        {
            "id": 6,
            "title": "Women's Yellow Top",
            "description" : "Women's Yellow Top",
            "url" : "http://bestjquery.com/tutorial/product-grid/demo3/images/img-3.jpeg",
            "price": 300.00,
            "isFreeShipping" : true
        }


    ]


}



