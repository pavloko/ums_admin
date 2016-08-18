function editBoatRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.editBoat', {
      url: '/editBoat/:boatID',
      templateUrl: 'app/boats/editBoat/editBoat.html',
      controller: 'BoatController',
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

export default editBoatRoute;
