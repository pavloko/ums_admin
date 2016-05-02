import AuthController from '../auth/auth.controller';
class MainController {
  constructor (AppConstants, $log, $mdDialog) {
    'ngInject';
    this._AppConstants = AppConstants;
    this._$log = $log;
    this._$mdDialog = $mdDialog;

    this.appName = AppConstants.appName;
  }

  toggleAuth() {
    this._$mdDialog.show({
      templateUrl: 'app/auth/auth.html',
      controller: AuthController,
      controllerAs: '$ctrl',
      clickOutsideToClose: true,
      fullscreen: true
    });
  }
}

export default MainController;
