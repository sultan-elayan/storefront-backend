'use strict';
const categories = (sequelize, DataTypes) => sequelize.define('categori', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: DataTypes.STRING,
    },
    activeCategory: {
        type: DataTypes.STRING,
    }

});
module.exports = categories;