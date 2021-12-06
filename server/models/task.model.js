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
      },
      // AJOUT DE BOOLEAN COMPLETE ICI 
      complete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    //   list_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: 'list',
    //       key: 'id'
    //     }
    //   }
    });
  
    return Task;
  };





  // module.exports = (sequelize, Sequelize) => {
  //   const Task = sequelize.define("task", {
  //     title: {
  //       type: Sequelize.STRING
  //     },
  //     description: {
  //       type: Sequelize.STRING
  //     },
  //     published: {
  //       type: Sequelize.BOOLEAN
  //     }
  //   });
  
//     return Task;
//   };