import MainController from './main.controller';
import MainRoute from './main.route';
import InstructionRoute from '../instruction/instruction.route';

export default angular.module('app.main', [])
  .config(MainRoute)
  .config(InstructionRoute)
  .controller('MainController', MainController);
