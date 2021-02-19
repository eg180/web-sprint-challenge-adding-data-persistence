// build your `/api/projects` router here
// build your `/api/projects` router here

const express = require("express");
const router = express.Router();



const Projects = require('./model.js');



router.get('/', (req, res) => {
    Projects.getAll()
    .then(projects => {
        res.status(200).json(projects)
    })
});

router.post('/', async (req, res) => {
    await Projects.insert(req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});


module.exports = router;
