// build your `Resource` model here
// build your `Project` model here
const db = require('../../data/dbConfig.js');

module.exports = {
    getAll,
    insert
}

function getAll() {
    return db('resources')
}

async function insert(resource) {
    const [resource_id] = await db('resources').insert(resource)
    return db('resources').where({ resource_id}).first();
}
