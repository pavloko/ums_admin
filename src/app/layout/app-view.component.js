class AppviewController {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

let AppviewComponent = {
  templateUrl: 'app/layout/app-view.html',
  controller: AppviewController
};

export default AppviewComponent;
