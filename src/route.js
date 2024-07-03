const express = require('express');
const app = express();


const gameRouter = require('./pages/games.jsx')


app.set('view engine', 'jsx')
app.get('/games',(res,req)=>{
    res.render(gameRouter)
    // kjkjjk
})


module.exports = app