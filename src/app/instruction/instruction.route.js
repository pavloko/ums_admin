function InstructionRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.instruction', {
      url: '/instruction',
      templateUrl: 'app/instruction/instruction.html',
      title: 'Инструкция'
    });
}

export default InstructionRoute;
