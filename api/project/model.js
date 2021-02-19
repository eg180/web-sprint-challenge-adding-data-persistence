// build your `Project` model here
// build your `Project` model here
const db = require('../../data/dbConfig.js');

module.exports = {
    getAll,
    insert
}

function getAll() {
    return db('projects')
}

// async function insert(project) {
//     const [project_id] = await db('projects').insert(project)
//     return db('projects').where({ project_id }).first()
// }

async function insert(project) {
    const [project_id] = await db('projects').insert(project)
    return db.select('project_completed').from('projects').where({ project_id }).first()
}
