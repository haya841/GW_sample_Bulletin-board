const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const app = express();

const messages = []

app.get("/", (request,response) => {
    const template = fs.readFileSync("template_work4.ejs","utf-8")
    const html = ejs.render(template,{
        listItems : messages,
    })
    response.send(html);
})

app.use(express.urlencoded({ extended: true}));



app.post("/send", (request,response) =>{
    messages.push(request.body.m)

    const template = fs.readFileSync("template_work4.ejs","utf-8")
    const html = ejs.render(template, {
        listItems : messages,
    })
    response.send(html);
});

app.listen(4000);