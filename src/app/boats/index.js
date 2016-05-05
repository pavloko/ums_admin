import newBoatController from './newBoat/newBoat.controller';
import newBoatRoute from './newBoat/newBoat.route';

import singleBoatController from './singleBoat/singleBoat.controller';
import singleBoatRoute from './singleBoat/singleBoat.route';


export default angular.module('app.boats', [])
  .config(newBoatRoute)
  .controller('newBoatController', newBoatController)
  .config(singleBoatRoute)
  .controller('singleBoatController', singleBoatController);
