function viewLangRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.viewLang', {
      url: '/lang/:langID',
      templateUrl: 'app/languages/viewLang/viewLang.html',
      controller: 'ViewLangController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        },
        language: function(Language, $stateParams) {
          return Language.getLang($stateParams.langID).$loaded();
        }
      }
    });
}

export default viewLangRoute;
