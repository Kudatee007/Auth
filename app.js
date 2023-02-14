require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 9900;
mongoose.set('strictQuery', true);
const notFound = require('./middleware/notFound');
const authRouter = require('./routes/authRouter')
const journalRouter = require('./routes/journalRouter')
const auth = require('./middleware/auth')
const cors = require("cors")

// MIDDLEWARE
app.use(express.json());


// ROUTE
app.use("/api/v1", authRouter);
app.use("/api/v1/journal", auth, journalRouter)


// // ERROR ROUTE
// app.use(notFound);



const startServer = async () => {
try {
    await mongoose.connect(process.env.DB)
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}.....`);
    })
} catch (err) {
    console.log(err);
}
}

startServer()