'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organisation = sequelize.define('Organisation', {
    organisation_name: DataTypes.STRING,
    organisation_address: DataTypes.STRING,
    organisation_city: DataTypes.STRING
  }, {});
  Organisation.associate = function (models) {
    Organisation.hasMany(models.Branch, {
      foreignKey: 'organisation_id',
      as: 'branches'
    });
  };
  return Organisation;
};