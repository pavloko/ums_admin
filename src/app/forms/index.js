import FormService from './form.service';
import AllFormsController from './allForms/allForms.controller';
import allFormsRoute from './allForms/allForms.route';

import newFormRoute from './newForm/newForm.route';
import NewFormController from './newForm/newForm.controller';

import singleFormRoute from './singleForm/singleForm.route';
import SingleFormController from './singleForm/singleForm.controller';

import formFields from './helpers/formFields/formFields.directive';
export default angular.module('app.forms', [])
  .directive('formFields', formFields)
  .service('Form', FormService)
  .config(allFormsRoute)
  .controller('AllFormsController', AllFormsController)
  .config(newFormRoute)
  .controller('NewFormController', NewFormController)
  .config(singleFormRoute)
  .controller('SingleFormController', SingleFormController);
