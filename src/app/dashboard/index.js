import DashboardController from './dashboard.controller';
import DashboardRoute from './dashboard.route';

export default angular.module('app.dashboard', [])
  .config(DashboardRoute)
  .controller('DashboardController', DashboardController);
