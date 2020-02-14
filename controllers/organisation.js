const Organisation = require('../server/models').Organisation;
const Branch = require('../server/models').Branch;

module.exports = {
    add(req, res, next) {
        // console.log(req.body)
        return Organisation.create({
            organisation_name: req.body.organisation_name,
            organisation_address: req.body.organisation_address,
            organisation_city: req.body.organisation_city,
        })
            .then(organisation => res.status(201).send(organisation))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return Organisation
            .findByPk(req.params.id, {
                include: [{
                    model: Branch,
                    as: 'branches'
                }]
            })
            .then(organisation => {
                if (!organisation) {
                    return res.status(404).send({
                        message: 'Organisation Not Found',
                    });
                }
                // console.log(organisation.branches);
                return organisation
                    .update({
                        organisation_name: req.body.organisation_name || organisation.organisation_name,
                        organisation_address: req.body.organisation_address || organisation.organisation_address,
                        organisation_city: req.body.organisation_city || organisation.organisation_city,
                        branches: req.body.branches || organisation.branches,
                    }, {
                        include: [{
                            model: Branch,
                            as: 'branches'
                        }]
                    })
                    .then(() => res.status(200).send(organisation))
                    .catch((error) => { console.log(error); res.status(400).send(error); });
            })
            .catch((error) => { console.log(error); res.status(400).send(error); });
    },

    list(req, res) {
        return Organisation.findAll({
            include: [{
                model: Branch,
                as: 'branches'
            }],
        })
            .then((organisations) => res.status(200).send(organisations))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return Organisation
            .findByPk(req.params.id, {
                include: [{
                    model: Branch,
                    as: 'branches'
                }],
            })
            .then((organisation) => {
                if (!organisation) {
                    return res.status(404).send({
                        message: 'Organisation Not Found',
                    });
                }
                return res.status(200).send(organisation);
            })
            .catch((error) => res.status(400).send(error));
    },

    addWithBranchs(req, res) {
        return Organisation
            .create({
                organisation_name: req.body.organisation_name,
                organisation_address: req.body.organisation_address,
                organisation_city: req.body.organisation_city,
                branches: req.body.branches,
            }, {
                include: [{
                    model: Branch,
                    as: 'branches'
                }]
            })
            .then((organisation) => res.status(201).send(organisation))
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return Organisation
            .findByPk(req.params.id)
            .then(organisation => {
                if (!organisation) {
                    return res.status(400).send({
                        message: 'Organisation Not Found',
                    });
                }
                return organisation
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};