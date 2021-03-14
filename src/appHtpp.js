
const express = require('express')

//var stu =require("../src/app/Components/form/form.component.ts")
//import {FormComponent} from '../src/app/Components/form/form.component.spec'
//document.write('<script type="text/javascript" src="file.js" ></script>');

const app = express()
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))
const port = 3000
var students = [{    name: "mohamad",
    id: 11924310,
    gdpa: 4.5,
    date: new Date("11/10/2001"),
    registration :new Date()}]


app.get('/api/students', (req, res) => {
   console.log("hi motaz")
  res.status(200).json(students)
})
const bodyparser = require("body-parser");
app.use(bodyparser.json())
app.post('/api/students',(req,res)=>{
    console.log(req.body);
    students.push(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


