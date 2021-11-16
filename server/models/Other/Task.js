const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');

class Task extends Model {}

Task.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      task_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      list_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'list',
          key: 'id'
        }
      },
      due_date: {
          type: DataTypes.TIME,
          allowNull: true,
          defaultValue: null
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'task'
    }
);

module.exports = Task;