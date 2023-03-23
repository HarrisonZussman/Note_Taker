const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const db = require('../db/db.json')
//npmjs
const readFileAsync = util.promisify(fs.readFile);

router.get('/notes', (req, res) =>{
    return readFileAsync("./db/db.json","utf8").then((notes)=>{
        let allNotes;
        try {
            allNotes = [].concat(JSON.parse(notes))
        }catch(err){
            allNotes = []
        }
      //  console.log(allNotes)
        return allNotes
    } ).then((results)=>{
        console.log(results);
        return res.json(results)
    }).catch((err) =>{
        res.status(500).json(err);
    });
    // const file = await res.json(db)
    // console.log(file);
    // return file
//console.log(db);
//return res.json(db)
    //const data = req.body;
    // fs.readFileSync('./db/db.json', (err, results) => {
    //     console.log(err, "this is the err");
    //    res.json(err)
    // })
//     // .then(data => {
//     //     res.json(data);
//     // }) 
//     // console.log('return notes info')
//     // res.json([
//     //     {
//     //         "title":"Test Title",
//     //         "text":"Test text",
//     //         "note":"Current Note"
//     //     }
//     // ]
//     // )
//  //   res.sendFile(path.join(__dirname, './public/notes.html'))
});


module.exports = router;