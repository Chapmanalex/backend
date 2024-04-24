const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');


const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// app.get('/', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' });
// });

// defining end points
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


// response.setHeaders('Content-Type', 'text/html');

app.listen(port, () => {
    console.log("server wainting for requests at port 5000");
});