const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.send('<h1>Hello world</h1>')
})

app.get('/posts', (req,res)=>{
    res.send('i am a post page')
}
)

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})