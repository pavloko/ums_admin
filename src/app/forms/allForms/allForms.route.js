function allFormsRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.allForms', {
      url: '/forms',
      templateUrl: 'app/forms/allForms/allForms.html',
      controller: 'AllFormsController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        },
        forms: function(Form) {
          return Form.getForms().$loaded();
        }
      }
    });
}

export default allFormsRoute;
