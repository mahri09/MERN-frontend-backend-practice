const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("./app/config/db.config");

const routerCustomer = require("./app/routes/db.routes");
const routerStaff = require("./app/routes/staff.routes");

const port = process.env.PORT || 8080;

const corsOptions = {
  origin: process.env.ORIGIN || 'http://localhost:8081',
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/customers', routerCustomer);
app.use('/api/staff', routerStaff);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


app.get('/', (req, res) => res.send('Hello World!'))



app.listen(port, () => console.log(`Example app listening on ${port} port!`))