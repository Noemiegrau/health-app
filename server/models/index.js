// IMPORT ALL MODELS
const User = require('./User');
const Task = require('./Task');
const List = require('./List');

// CREATE ASSOCIATIONS
User.hasMany(List, {
    foreignKey: 'user_id'
});

// List belongs to one user
List.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Task, {
    foreignKey: 'user_id'
});

// List has many tasks
List.hasMany(Task, {
    foreignKey: 'list_id'
});

// Task belongs to one user
Task.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// Task belongs to List
Task.belongsTo(List, {
    foreignKey: 'list_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Task, List };