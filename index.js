const express = require('express');
const categories = require("./routes/categories");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use("/api/categories", categories);


mongoose
.connect(
    'mongodb://localhost/mydb',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(result => {
    console.log(
        {
            status: true,
            message: "Database connected",
            data: {
                code: 200
            }
        }
    );
})

.catch(err => console.log(
    {
        status: false,
        message: "An error occured",
        data: {
            code: 400,
        }
    }
));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));