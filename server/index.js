const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// // landing page endpoint
// app.get("/", (req, res) => {
//     res.send("landing page coming soon");
// })

// // Signin/signup page endpoint
// app.get('/login-signup', (req, res) => {
//     res.send("Signin/signup page coming soon");
// })

// Todo list page endpoint // replace /tasks with /todo later
app.get('/tasks', (req, res) => {
    const TASK_QUERY = `select * from health_app.task`;
    connection.query(TASK_QUERY, (err, response) => {
        if (err) console.log(err)
        else res.send(response);
    })
})

// POST Task
app.post('/addTask', (req, res) => {
    const ADD_QUERY = `insert into health_app.task (task_name) values ('${req.body.task}')`;
    connection.query(ADD_QUERY, (err) => {
        if (err) console.log(err)
        else res.send("task has been added");
    })
})
 
// DELETE Task
app.delete('/deleteTask/:id', (req, res) => {
    console.log(req.params.id);
    const DELETE_QUERY = `DELETE FROM health_app.task WHERE (id=${req.params.id})`
    connection.query(DELETE_QUERY, (err, res) => {
        if (err) console.log(err)
        // else res.send("task has been deleted");
    })
})

// // Dashboard page after login/signup
// app.get('/dashboard', (req, res) => {
//     res.send("dashboard page coming soon");
// })


app.listen(4000, () => {
    console.log("running on port 4000")
});