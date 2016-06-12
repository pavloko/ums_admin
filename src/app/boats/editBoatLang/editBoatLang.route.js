function editBoatLangRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.editBoatLang', {
      url: '/editBoatLang/:boatID/:lang',
      templateUrl: 'app/boats/editBoatLang/editBoatLang.html',
      controller: 'EditBoatLangController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        },
        boat: function(Boats, $stateParams) {
          return Boats.getBoat($stateParams.boatID);
        }
      }
    });
}

export default editBoatLangRoute;
