'use strict'

module.exports = (app) => {
    // list out routes
    let companyRoute = require('./companyRoute');
    let schoolRoute = require('./schoolRoute');
    // health check
    app.get('/health', (req, res, next) => {
        res.status(200).json({ success: true })
    })
    // list out routes
    app.use('/api/v1/company', companyRoute);
    app.use('/api/v1/school', schoolRoute);

    app.get('/api', (req, res) => {
        return res.status(200).send({
            message: 'Welcome to the Todos API!'
        });
    });
};
