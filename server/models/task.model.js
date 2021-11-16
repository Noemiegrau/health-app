module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      due_date: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1]
          }
    }
    //   list_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: 'list',
    //       key: 'id'
    //     }
    //   },
    //   published: {
    //     type: Sequelize.BOOLEAN
    //   }
    });
  
    return Task;
  };





//   module.exports = (sequelize, Sequelize) => {
//     const Task = sequelize.define("task", {
//       title: {
//         type: Sequelize.STRING
//       },
//       description: {
//         type: Sequelize.STRING
//       },
//       published: {
//         type: Sequelize.BOOLEAN
//       }
//     });
  
//     return Task;
//   };