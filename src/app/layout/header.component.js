class AppHeaderCtrl {
  constructor(AppConstants, Auth, toastr, $state) {
    'ngInject';
    this._Auth = Auth;
    this._toastr = toastr;
    this._$state = $state;

    this.appName = AppConstants.appName;
  }

  logout() {
    this._Auth.logout();
    this._$state.go('main')
    this._toastr.success('Хорошего дня!');
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'app/layout/header.html'
};

export default AppHeader;
