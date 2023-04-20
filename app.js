require('dotenv').config
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Bruno',
        titulo: 'Curso de node'
    })
  })

  app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Bruno',
        titulo: 'Curso de node'
    })
  })

  app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Bruno',
        titulo: 'Curso de node'
    })
  })

app.listen(port, ()=>{
    console.log(`Aplicación escuchando desde http://localhost:${port}`)
})

