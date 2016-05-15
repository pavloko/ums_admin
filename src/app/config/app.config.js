function AppConfig ($stateProvider, $locationProvider, $urlRouterProvider,
                    $logProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Route config
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('app', {
      abstract: true,
      template: '<app-view layout="row" flex></app-view>'
    });

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
