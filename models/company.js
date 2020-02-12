'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    'Company',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Company.associate = function(model) {
    // associations can be defined here

    Company.hasMany(model.Employee, {
      foreignKey: 'companyId',
      as: 'employees'
    });
  };
  return Company;
};
