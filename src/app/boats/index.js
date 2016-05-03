import newBoatController from './newBoat/newBoat.controller';
import newBoatRoute from './newBoat/newBoat.route';


export default angular.module('app.boats', [])
  .config(newBoatRoute)
  .controller('newBoatController', newBoatController);
