class AppHeaderController {
  constructor(AppConstants, Auth, $mdToast, $state, $mdSidenav, $scope) {
    'ngInject';
    this._Auth = Auth;
    this._$mdToast = $mdToast;
    this._$state = $state;
    this._$mdSidenav = $mdSidenav;

    this.appName = AppConstants.appName;
    // Close Sidenav when link to another state is clicked
    $scope.$on('$stateChangeStart', function() {
      $mdSidenav('left').toggle();
    });
  }

  logout() {
    this._Auth.logout();
    this._$state.go('main')
    this._$mdToast.showSimple('Хорошего дня!');
  }

  toggleSidenav() {
    this._$mdSidenav('left').toggle();
  }
}

let AppHeader = {
  controller: AppHeaderController,
  templateUrl: 'app/layout/header.html'
};

export default AppHeader;
