function newBoatRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.newBoat', {
      url: '/newBoat',
      templateUrl: 'app/boats/newBoat/newBoat.html',
      controller: 'newBoatController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        }
      }
    });
}

export default newBoatRoute;
