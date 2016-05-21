function editFieldRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.editField', {
      url: '/lang/:langID/editField/:fieldID',
      templateUrl: 'app/languages/langField/editField.html',
      controller: 'AddEditFieldController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        }
      }
    });
}

export default editFieldRoute;
