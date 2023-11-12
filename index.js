const express = require('express')
const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res)=>{
    const formattedJSON = JSON.stringify(persons, null, 2);
    res.header('Content-Type', 'application/json');
    res.send(formattedJSON);
    // res.json(persons)
})

app.get('/api/info', (req, res)=>{
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
    
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${datetime}</p>`)
})

const PORT = 3001   // declare port #
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})    // binding server to post #