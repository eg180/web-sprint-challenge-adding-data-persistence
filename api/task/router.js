// build your `/api/tasks` router here


const express = require("express");
const router = express.Router();
const Tasks = require('./model.js');


router.get('/', (req, res) => {
    Tasks.getAll()
    .then(tasks => {
        res.status(200).json(tasks)
    })
});

router.post('/', async (req, res) => {
    await Tasks.insert(req.body)
    .then(taskcompleted => {
        res.status(200).json(taskcompleted)
    })
    .catch(err => {
        res.status(403).json(err.message)
    })
});


module.exports = router;

