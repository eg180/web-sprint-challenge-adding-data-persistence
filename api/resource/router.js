// build your `/api/resources` router here

// build your `/api/projects` router here

const express = require("express");
const router = express.Router();



const Resources = require('./model.js');



router.get('/', (req, res) => {
    Resources.getAll()
    .then(resources => {
        res.status(200).json(resources)
    })
});

router.post('/', async (req, res) => {
    await Resources.insert(req.body)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});


module.exports = router;

