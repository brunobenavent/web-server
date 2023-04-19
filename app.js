const express = require('express')
const app = express()

const port = 8080


app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Bruno',
        titulo: 'Curso de node'
    })
  })
app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
  })
app.listen(port, ()=>{
    console.log(`Aplicación escuchando desde http://localhost:${port}`)
})

