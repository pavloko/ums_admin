function newBoatRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.singleBoat', {
      url: '/boat/:boatID',
      templateUrl: 'app/boats/singleBoat/singleBoat.html',
      controller: 'singleBoatController',
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

export default newBoatRoute;
