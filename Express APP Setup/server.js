require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')


//express app
const app = express()


//next is used to move from one middleware to the next
//middleware
app.use(express.json())
app.use((req,res, next) =>{
console.log(req.path, req.method)
next()
})

//routes (it grabs all the routes attached in workout file)
app.use('/api/workouts',workoutRoutes)




//now we want an app to react also
//testroutes
//app.get('/', (req, res) => {
    //res.json({mssg:'Welcome to the App'})
//})//this will response to a get req comming in from a specific route
//for sensitive info we move them into environmental variable
//env file to git ignore file



//to listen for requests(certain port numb)
app.listen(process.env.PORT, () => {
    console.log('listenting on port', process.env.PORT)
})
//now run the file
//if we change anything inthe code it will not run we have to rerun the code in node 
//install nodemon pkg globally => npm install -g nodemon then nodemon filename
//now if we change anything it detect it and it rerun the file 
