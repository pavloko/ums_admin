function viewBoatRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.viewBoat', {
      url: '/boat/:boatID',
      templateUrl: 'app/boats/viewBoat/viewBoat.html',
      controller: 'ViewBoatController',
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

export default viewBoatRoute;
