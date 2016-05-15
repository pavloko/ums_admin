function newLangRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.newLang', {
      title: 'Новый Язык',
      url: '/newLanguage',
      templateUrl: 'app/languages/newLang/newLang.html',
      controller: 'NewLangController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        }
      }
    });
}

export default newLangRoute;
