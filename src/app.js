import express from 'express'
import {pool}  from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/',(req, res)=>
{
    res.send('welcome to server')
})

app.get('/mostrar', async (req, res)=>
    {
        const [rows] = await pool.query('SELECT * FROM Usuarios')
        res.json(rows)
    })

app.listen(PORT)
console.log('server on port ', PORT)