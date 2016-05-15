function allLangsRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.allLangs', {
      title: 'Языки',
      url: '/languages',
      templateUrl: 'app/languages/allLangs/allLangs.html',
      controller: 'AllLangsController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        },
        languages: function(Language) {
          return Language.getLangs().$loaded();
        }
      }
    });
}

export default allLangsRoute;
