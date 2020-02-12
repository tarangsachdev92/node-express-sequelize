'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});
  School.associate = function (models) {
    // associations can be defined here
    School.hasMany(models.Student, {
      foreignKey: 'schoolId',
      as: 'students'
    });
  };
  return School;
};