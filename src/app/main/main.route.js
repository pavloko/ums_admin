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
        isNotAuth: function(Auth, $state, $mdToast) {
          return Auth.requireAuth().then(
            () => {
              $state.go('app.dashboard');
              $mdToast.showSimple('Вы уже авторизировались!');
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
