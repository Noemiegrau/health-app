const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const connection = require('./config/db.config');
// const controllers = require('./controllers');
// const session = require('express-session');
// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({ helpers });
// const path = require('path');

// Instantiate the server
const app = express();
// app.use(...);

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the TODO LIST application." });
});

require("./routes/tutorial.routes.js")(app);
require("./routes/task.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});










// Sequelize connection
// const sequelize = require('./config/db.config');
// Set up Store
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Session Object
// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// Express-session Middleware
// app.use(session(sess));

// Express MIDDLEWARE
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, './public'))); //OR 'public'

// Cors
// app.use(cors({ origin: "*" })); //MAYBE THIS INSTEAD app.use(cors());

// Controllers
// app.use(controllers);






// // parse requests of content-type - application/json
// app.use(bodyParser.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));







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

// // landing page endpoint
// app.get("/", (req, res) => {
//     res.send("landing page coming soon");
// })

// // Signin/signup page endpoint
// app.get('/login-signup', (req, res) => {
//     res.send("Signin/signup page coming soon");
// })




// // creating a port for server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => { console.log(`Now listening on Port ${PORT}!`);
// });

// // Sync Sequelize tables if true, then start server connection
// sequelize.sync({force: false})
// .then(() => {
//     app.listen(PORT, () => console.log(`Now listening on Port ${PORT}!`));
// });