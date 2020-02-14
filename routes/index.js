'use strict'

module.exports = (app) => {
    // list out routes
    let companyRoute = require('./companyRoute');
    let schoolRoute = require('./schoolRoute');
    let employeeRoute = require('./employeeRoute');
    let organisationRoute = require('./organisationRoute');
    let branchRoute = require('./branchRoute');
    let roleRoute = require('./roleRoute');
    let userRoute = require('./userRoute');
    // health check
    app.get('/health', (req, res, next) => {
        res.status(200).json({ success: true })
    })
    // list out routes
    app.use('/api/v1/company', companyRoute);
    app.use('/api/v1/employee', employeeRoute);
    app.use('/api/v1/school', schoolRoute);
    app.use('/api/v1/organisation', organisationRoute);
    app.use('/api/v1/branch', branchRoute);
    app.use('/api/v1/role', roleRoute);
    app.use('/api/v1/user', userRoute);

    app.get('/api', (req, res) => {
        return res.status(200).send({
            message: 'Welcome to the Todos API!'
        });
    });
};
