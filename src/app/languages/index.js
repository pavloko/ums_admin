// Components
import language from './components/language/language.component';
import langFields from './components/langFields/langFields.directive';
// Services
import Language from './language.service';
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
import AddLangFieldController from './addLangField/addLangField.controller';
import addLangFieldRoute from './addLangField/addLangField.route';

export default angular.module('app.languages', [])
  .service('Language', Language)
  .component('language', language)
  .directive('langFields', langFields)
  .config(allLangRoute)
  .config(newLangRoute)
  .config(viewLangRoute)
  .config(addLangFieldRoute)
  .controller('AddLangFieldController', AddLangFieldController)
  .controller('ViewLangController', ViewLangController)
  .controller('NewLangController', NewLangController)
  .controller('AllLangsController', AllLangsController);
