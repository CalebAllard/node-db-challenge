const db = require('../data/db-config');

module.exports = {
    getAll,
    getById,
    addProject,
    getResource,
    getTasks,
    addResource,
    addTask,
}

function getAll(){
    return db('project').select();

};

function getById(id){
    return db('project').where({id}).select();
}

function addProject(data){
    return db('project').insert(data);
}
function getResource(id){
    return db('project_resources').where('project_id', '=', id).join('resource', 'project_resources.resource_id', '=', 'resource.id').select('resource.name');
}
function getTasks(id){
    console.log(id);
    return db('task').where('project_id', '=', id).join('project', 'task.project_id','=','project.id').select();
}
function addResource(id,body){
    const payload = {
        name:body.name,
        description:body.notes,
        
    }
    
    return db('resource').insert(payload);
}
function addTask(id,body){
    const payload = {
        description:body.description,
        notes:body.notes,
        project_id:id,
    }
    
    return db('task').insert(payload);
}