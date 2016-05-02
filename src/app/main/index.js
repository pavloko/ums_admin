import MainController from './main.controller';
import MainRoute from './main.route';

export default angular.module('app.main', [])
  .config(MainRoute)
  .controller('MainController', MainController);
