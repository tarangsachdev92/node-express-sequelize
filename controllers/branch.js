const Branch = require('../server/models').Branch;
const Organisation = require('../server/models').Organisation;

module.exports = {
    list(req, res) {
        return Branch
            .findAll({
                include: [{
                    model: Organisation,
                    as: 'organisation'
                }],
            })
            .then((branches) => res.status(200).send(branches))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return Branch
            .findById(req.params.id, {
                include: [{
                    model: Organisation,
                    as: 'organisation'
                }],
            })
            .then((branch) => {
                if (!branch) {
                    return res.status(404).send({
                        message: 'Branch Not Found',
                    });
                }
                return res.status(200).send(branch);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Branch
            .create({
                organisation_id: req.body.organisation_id,
                branch_name: req.body.branch_name,
                branch_address: req.body.branch_address,
                branch_city: req.body.branch_city,
            })
            .then((branch) => res.status(201).send(branch))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Branch
            .findById(req.params.id, {
                include: [{
                    model: Organisation,
                    as: 'organisation'
                }],
            })
            .then(branch => {
                if (!branch) {
                    return res.status(404).send({
                        message: 'Branch Not Found',
                    });
                }
                return branch
                    .update({
                        branch_name: req.body.branch_name || organisation.branch_name,
                        branch_address: req.body.branch_address || organisation.branch_address,
                        branch_city: req.body.branch_city || organisation.branch_city,
                    })
                    .then(() => res.status(200).send(branch))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return Branch
            .findByPk(req.params.id)
            .then(branch => {
                if (!branch) {
                    return res.status(400).send({
                        message: 'Branch Not Found',
                    });
                }
                return branch
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};