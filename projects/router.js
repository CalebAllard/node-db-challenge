const router = require('express').Router();
const db = require('./project_modle');

router.get('/', (req,res) => {
    db.getAll().then(ret =>{
        res.status(200).json(ret);
    })  
    .catch(err => {
        console.log(err);
        res.status(500).json({err: 'problem getting projects'});
    })
});
router.get('/:id', (req,res) => {
    const { id } = req.params;
    db.getById(id)
    .then(ret =>{
        res.status(200).json(ret);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err: 'problem getting project'});
    })
})
router.post('/', (req,res) => {
    db.addProject(req.body)
    .then( ret => {
        
        return ret;
        
    })
    .then(id => {
        
        db.getById(id[0])
            .then(ret =>{
            res.status(200).json(ret);
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err:'problem adding project'});
    })
})
router.get('/:id/resource', (req,res) => {
    const { id } = req.params;
    db.getResource(id)
    .then(ret => {
        res.status(200).json(ret);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err:'problem getting resouces'});
    })
})
router.get('/:id/task', (req,res) => {
    const { id } = req.params;
    db.getTasks(id)
    .then(ret => {
        res.status(201).json(ret);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err: 'problem getting task'});
    });
})
router.post('/:id/resource', (req,res) => {
    const {id} = req.params;
    const data = req.body;
    db.addResource(id,data)
        .then(ret => {
            res.status(201).json(ret);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err: 'problem adding resource'});
        })
});
router.post('/:id/task', (req,res) => {
    const {id} = req.params;
    const data = req.body;
    db.addTask(id,data)
        .then(ret => {
            res.status(201).json(ret);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err: 'problem adding task'});
        })
});


module.exports = router;

// - [ ] Build an API with endpoints for:
//   - [x] adding resources.
//   - [x] retrieving a list of resources.
//   - [x] adding projects.
//   - [x] retrieving a list of projects.
//   - [x] adding tasks.
//   - [x] retrieving a list of tasks.