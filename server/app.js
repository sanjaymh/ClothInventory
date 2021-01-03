const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const config = require("./config");

//Route...
const clothRoute = require("./routes/cloth");
const app = express();

app.use(express.json());

//Using CORS to allow client reqs...
app.use(cors());

//Connecting to DB...
mongoose.connect(config.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
.then(() => {console.log("Connected to the Database")})
.catch(err => console.log(`Error: ${err}`));

//Using route at the App entry...
app.use("/api", clothRoute);

const PORT = process.env.PORT || config.PORT;

//Setting up App to listen at a PORT...
app.listen(PORT, () => {
    console.log(`App is running in PORT: ${PORT}`);
})

