function MainRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: '$ctrl',
      resolve: {
        isLoggedIn: function(Auth, $state) {
          return Auth.requireAuth().catch(() => $state.go('main'));
        },
        boats: function(Boats) {
          return Boats.getBoats();
        }
      }
    });
}

export default MainRoute;
