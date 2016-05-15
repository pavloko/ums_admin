function addLangFieldRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.addLangField', {
      url: '/lang/:langID/addLanguageField',
      templateUrl: 'app/languages/addLangField/addLangField.html',
      controller: 'AddLangFieldController',
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

export default addLangFieldRoute;
