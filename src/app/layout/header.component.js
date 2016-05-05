class AppHeaderController {
  constructor(AppConstants, Auth, toastr, $state, $mdSidenav, $scope) {
    'ngInject';
    this._Auth = Auth;
    this._toastr = toastr;
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
    this._toastr.success('Хорошего дня!');
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
