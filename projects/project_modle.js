const db = require('../data/db-config');

module.exports = {
    getAll,
    getById,
}

function getAll(){
    return db('project').select();

};

function getById(id){
    return db('project').where({id}).select();
}