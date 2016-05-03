function MainRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: '$ctrl',
      title: 'Main',
      resolve: {
        isNotAuth: function(Auth, $state, toastr) {
          return Auth.requireAuth().then(
            () => {
              $state.go('app.dashboard');
              toastr.info('Вы уже авторизировались!');
            },
            // If noUser resolve route
            () => {
              return;
            }
          );
        }
      }
    });
}

export default MainRoute;
