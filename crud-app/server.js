const express = require("express");
const mongoose = require("mongoose");
const port = process.env.port || 3000;
const articleRouter = require("../crud-app/routes/article");

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/ARTICLES',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connected')
}).catch(err => {
    console.log('Database not connected')
});

app.get('/articles', articleRouter);

app.listen(port, ()=>{console.log(`server connected on ${port} `)});