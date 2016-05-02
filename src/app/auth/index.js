
import AuthController from './auth.controller';
import AuthService from './auth.service';
export default angular.module('app.auth', [])
  .service('Auth', AuthService)
  .controller('AuthController', AuthController);
