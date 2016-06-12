// Components
import boatForm from './components/boatForm/boatForm.component';
import formField from './components/formField.directive/formField.directive';
import BoatController from './Boat.controller';

// Create Boat
import newBoatRoute from './newBoat/newBoat.route';

// Edit Boat
import editBoatRoute from './editBoat/editBoat.route';

//View Boat
import ViewBoatController from './viewBoat/viewBoat.controller';
import viewBoatRoute from './viewBoat/viewBoat.route';


// Edit Boat's Language
import EditBoatLangController from './editBoatLang/editBoatLang.controller';
import editBoatLangRoute from './editBoatLang/editBoatLang.route';

export default angular.module('app.boats', [])
  .component('boatForm', boatForm)
  .directive('formField', formField)
  .config(editBoatRoute)
  .config(newBoatRoute)
  .config(editBoatLangRoute)
  .controller('EditBoatLangController', EditBoatLangController)
  .controller('BoatController', BoatController)
  .config(viewBoatRoute)
  .controller('ViewBoatController', ViewBoatController);
