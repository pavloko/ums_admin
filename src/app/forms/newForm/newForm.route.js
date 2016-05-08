function newFormRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.newForm', {
      url: '/newForm',
      templateUrl: 'app/forms/newForm/newForm.html',
      controller: 'NewFormController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        }
      }
    });
}

export default newFormRoute;
