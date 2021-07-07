// build your `Task` model here
// build your `Project` model here
const db = require('../../data/dbConfig.js');

module.exports = {
    getAll,
    insert
}

function getAll() {
    return db('tasks')
}

async function insert(task) {
    const [task_id] = await db('tasks').insert(task)
    return db('tasks').where({ task_id }).first()
}
