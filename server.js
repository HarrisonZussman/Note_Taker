
const express = require ('express');
//const fs = require ('fs');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
//const { response } = require('express');
//const {v4} = require('uuid');
const app = express();
const PORT = process.env.PORT || 3001;
//let db = require('./db/db.json');

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//////////////////////////////////////////////////////


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
});

//get request for html file
app.get('/notes', (req , res) =>{
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

//get notes from db
app.get('/api/notes', (req, res) => {
    console.info(`get /api/notes`);
    res.status(200).json(db);
});

//post notes to db
// app.post('/api/notes' , (req, res) => {
//     console.info(`${req.method} request received to add a note`);

//     const {title, text, id} = req.body;
//     if (title && text) {
//         // to be saved
//         const newNote = {
//             title,
//             text,
//             id: v4(),
//         };

//         db.push(newNote);

//         fs.writeFile('./db/db.json' , JSON.stringify(db),
//         (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });

//         const response = {
//             status: 'success',
//             body: newNote,
//         };

//         res.status(201).json(response);
//     } else {
//         res.status(500).json('Error in posting note');
//     }
// });



// // Middleware reoute to delete notes
// app.delete('/api/notes/:id' , (req,res) =>{
//     if (req.params.id) {
//         console.info(`${req.method} request received to delete a note`);
//         let filtered = db.filter(note => {
//             return note.id != req.params.id;
//         });
//         console.log(filtered);

//         fs.writeFile('./db//db.json' , JSON.stringify (filtered),(err) => {
//             if (err) {
//                 console.log(err);
//             }
//     res.status(201).json(filtered);
//         });
//     }
// });
/////////////////////////////////////////////////////////////////////
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));