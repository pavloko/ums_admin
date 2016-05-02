function AppConfig ($stateProvider, $locationProvider, $urlRouterProvider,
                    $logProvider, toastrConfig) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  // toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;


  // Route config
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'app/layout/app-view.html',
      resolve: {
        auth: function() {

        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;