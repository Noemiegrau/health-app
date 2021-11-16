const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
    },
      email: {
        type: Sequelize.STRING,
        // if allowNull is set to false, it is possible to run the data through validators before creating a data table
        allowNull: false,
        unique: true,
        validate: {
            isEmail:true
        }
    },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            // this means the password must be atleast four characters long
            len: [4]
        }
    }
    }, 
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            }
        },
        instanceMethods: {
            validPassword: (password) => {
             return bcrypt.compareSync(password, this.password);
            }
           }
    });
    User.prototype.validPassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
       }
    return User;
  };