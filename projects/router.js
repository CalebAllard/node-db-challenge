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


module.exports = router;

// - [ ] Build an API with endpoints for:
//   - [ ] adding resources.
//   - [ ] retrieving a list of resources.
//   - [ ] adding projects.
//   - [ ] retrieving a list of projects.
//   - [ ] adding tasks.
//   - [ ] retrieving a list of tasks.