// build your server here and require it from index.js
// build your server here
const express = require('express');

const helmet = require('helmet')



const projectsRouter = require("./project/router.js");
const resourcesRouter = require("./resource/router.js");
const tasksRouter = require("./task/router.js")


const server = express();
server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);


server.use("/", (req, res) => {
    res.status(200).json({ api: "Wow. You did something right! We're up!" });
});


module.exports = server;

