function addLangFieldRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.addLangField', {
      url: '/lang/:langID/addLanguageField',
      templateUrl: 'app/languages/langField/addField.html',
      controller: 'AddEditFieldController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        }
      }
    });
}

export default addLangFieldRoute;
