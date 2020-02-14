'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      designation: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      salary: {
        type: DataTypes.NUMBER,
        defaultValue: 0
      }
    },
    {}
  );
  Employee.associate = function (models) {
    Employee.belongsTo(models.Company, {
      foreignKey: 'companyId',
      onDelete: 'CASCADE',
      as: 'company'
    });
  };
  return Employee;
};
