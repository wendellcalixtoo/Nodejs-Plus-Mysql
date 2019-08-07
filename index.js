const express = require('express');
const mysql = require('mysql');
const server = express();

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
});

connection.connect(function(error){
    if (!!error){
        console.log('Error!!!');
    } else {
        console.log('Connected \n');
        console.log('run localhost:3000/ \n');
    }
});

server.get('/', function(req, resp){
    connection.query("SELECT * FROM mySampleTable", function(error, rows, fields){
        if(!!error){
            console.log('Error in the query');
        } else {
            console.log('Sucess!\n');
            console.log(rows[0]);
            resp.json(rows[0]);
        }
    })
})

server.listen(3000);