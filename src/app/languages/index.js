// Components
import language from './components/language/language.component';
import langField from './components/langField/langField.component';
import fieldForm from './components/fieldForm/fieldForm.component';

// Services
import Language from './language.service';
import Field from './field.service';

// View Languages
import AllLangsController from './allLangs/allLangs.controller';
import allLangRoute from './allLangs/allLangs.route';

// Add Language
import NewLangController from './newLang/newLang.controller';
import newLangRoute from './newLang/newLang.route';

// View Single Language
import ViewLangController from './viewLang/viewLang.controller';
import viewLangRoute from './viewLang/viewLang.route';

// Add Language Field
import addFieldRoute from './langField/addField.route';
import AddEditFieldController from './langField/addEditField.controller';

// Edit Language Field
import editFieldRoute from './langField/editField.route';

export default angular.module('app.languages', [])
  .service('Language', Language)
  .service('Field', Field)
  .component('language', language)
  .component('langField', langField)
  .component('fieldForm', fieldForm)
  .config(allLangRoute)
  .config(newLangRoute)
  .config(viewLangRoute)
  .config(addFieldRoute)
  .config(editFieldRoute)
  .controller('AddEditFieldController', AddEditFieldController)
  .controller('ViewLangController', ViewLangController)
  .controller('NewLangController', NewLangController)
  .controller('AllLangsController', AllLangsController);
