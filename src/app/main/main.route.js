function MainRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: '$ctrl',
      title: 'Main'
    });
}

export default MainRoute;
