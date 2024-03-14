'use strict';
const db = require('../config/connection');

const Video = db.sequelize.define('video',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    link: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

Video.sync();
module.exports = Video;