const express = require('express')
const app = express()

const  cors =  require("cors")
app.use(cors())

const ApplicantRouter = require('./routers/R_Applicant')
const  bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/uploaded"))


app.use(ApplicantRouter)



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

