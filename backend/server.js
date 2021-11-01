const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const sendMailroute = require("./routes/sendMailRoute");
const PORT = process.env.PORT || 5000
//middleware
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(cors());

app.use("/api",  sendMailroute);
app.listen(PORT, () => console.log(`Started server at http://localhost:5000!`));