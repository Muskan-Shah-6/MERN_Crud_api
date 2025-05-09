const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

// Connecting to mongodb 
mongoose.connect("mongodb://127.0.0.1:27017/crud")

// Post the user data (Add)
app.post("/createUser", (req, res) => {
    userModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// Display the user Data
app.get('/', (req, res) => {
    userModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


// get  the users to display in update form
app.get('/getUsers/:id', (req, res) => {
    const id = req.params.id;
    userModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// Update users
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({ _id: id },
        {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        })
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err));
})

// Server running checking
app.listen(3001, () => {
    console.log("server is running on port ; 3001")
})