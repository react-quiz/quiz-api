'use strict';
/**
 * Module dependencies.
 */

// var passport = require('passport');
var quiz = require('../controllers/quiz.server.controller');

module.exports = function (app) {

  // User Routes
  app.route('/quiz').get(quiz.list);
  app.route('/quiz').post(quiz.create);
  app.route('/quiz/:id').delete(quiz.delete);
  // app.route('/users/:companyId').get(users.list)
  // app.route('/users/:companyId/:userId').get(users.read);

};
