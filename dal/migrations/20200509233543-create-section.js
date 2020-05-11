'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teacherId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        refrences: {
          model: 'Teachers',
          key: 'id'
        }
      },
      subjectId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        refrences: {
          model: 'Subjects',
          key: 'id'
        }
      },
      courseId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        refrences: {
          model: 'Courses',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sections');
  }
};