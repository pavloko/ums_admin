class LangFieldController {
  constructor(Field, AppMessages, $stateParams, $mdToast) {
    'ngInject';
    this.langID = $stateParams.langID;
    this._Field = Field;
    this._$mdToast = $mdToast;
    this._AppMessages = AppMessages;
  }

  deleteLangField() {
    this._Field.destroyField(this.langID, this.fieldId).then(
      () => {
        this._$mdToast.showSimple(this._AppMessages.fieldDeleteSuccess);
      },
      () => {
        this._$mdToast.showSimple(this._AppMessages.generalError);
      }
    );
  }
}

let langField = {
  templateUrl: 'app/languages/components/langField/langField.html',
  bindings: {
    field: '<',
    fieldId: '@'
  },
  controller: LangFieldController
};

export default langField;
