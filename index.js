const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001


app.get('/', (req, res) => {
    return res.send({hola: 'From my service'})
})


app.listen(PORT, ()=>{
   console.log(`listening on ${PORT}`)
})
