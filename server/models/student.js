'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student',

    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      division: {
        type: DataTypes.STRING,
        defaultValue: false
      },
      isActive: DataTypes.BOOLEAN
    },
    {});
  Student.associate = function (models) {
    // associations can be defined here
    Student.belongsTo(models.School, {
      foreignKey: 'schoolId',
      onDelete: 'CASCADE'
    });
  };
  return Student;
};