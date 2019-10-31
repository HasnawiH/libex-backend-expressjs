//===== configuration
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const router = require('./src/Routes/index')
const app = express()
const PORT = process.env.PORT || 8000
// const multer = require('multer')
// const path = require('path');

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server  is running at ${PORT}`)
})

module.exports = app



















//====  CRUD API
//=GET
// app.get('/book', (req, res) => {
//     db.query('SELECT * FROM book WHERE title=?',[req.query.title], (error,response) =>{
//         if (!error){
//             res.json(response)
//         } else {
//             res.json(error)
//         }
//     })
// })

//=DELETE 
// app.delete('/book', (req, res) => {
//     db.query('DELETE FROM book WHERE id=?',[req.query.id], (error,response) =>{
//         if (!error){
//             res.send('Delete Successfully')
//         } else {
//             res.json(error)
//         }
//     })
// })

//=POST
// app.post('/book', (req,res)=>{
//     const body = {
//         ...req.body,
//         created_at: Date.now (),
//         updated_at: Date.now (),
//       };
//     db.query('INSERT INTO book SET ?', [body], (error, response) =>{
//         if (!error){
//             res.json(response)
//         } else {
//             res.json(error)
//         }
//     })
// })


//=PUT / Update
// app.put('/book/:id', (req,res)=>{
//     const body = {
//         ...req.body,
//         created_at: Date.now (),
//         updated_at: Date.now (),
//       };
//     //   const id = req.params.id
//     // db.query('UPDATE book SET ? WHERE id =? ', [body,id], (error, response) =>{
//     //     if (!error){
//     //         res.json(response)
//     //     } else {
//     //         res.json(error)
//     //     }
//     // })
// })


// filter by genre
// app.get('/book/genre/:genre', (req, res) => {
//     db.query('SELECT * FROM book WHERE genre=?',[req.params.genre], (error,response) =>{
//         if (!error){
//             res.json(response)
//         } else {
//             res.json(error)
//         }
//     })
// })

// filter by status
// app.get('/book/status/:status', (req, res) => {
//     db.query('SELECT * FROM book WHERE status=?',[req.params.status], (error,response) =>{
//         if (!error){
//             res.json(response)
//         } else {
//             res.json(error)
//         }
//     })
// })