class AppHeaderCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'app/layout/header.html'
};

export default AppHeader;
