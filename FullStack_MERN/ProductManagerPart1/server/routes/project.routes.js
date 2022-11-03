
const ProjectMgrController = require('../controllers/project.controller');//Imports controller
module.exports = (app) => {

    app.get('/api', ProjectMgrController.index);
    app.post ('/api/', );
    app.delete('/api/',)
}