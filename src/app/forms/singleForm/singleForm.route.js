function singleFormRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.singleForm', {
      url: '/form/:formID',
      templateUrl: 'app/forms/singleForm/singleForm.html',
      controller: 'SingleFormController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        },
        form: function(Form, $stateParams) {
          return Form.getForm($stateParams.formID);
        }
      }
    });
}

export default singleFormRoute;
