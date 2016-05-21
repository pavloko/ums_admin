class AddEditFieldController {
  constructor(Field, AppMessages, $mdToast, $state, $stateParams) {
    'ngInject';
    this._Field = Field;
    this._AppMessages = AppMessages;
    this._$mdToast = $mdToast;
    this._$state = $state;

    this.langID = $stateParams.langID;
    this.fieldID = $stateParams.fieldID;
    this.field = {
      fieldLabel: '',
      fieldValue: ''
    };

    this.activate();
  }

  createNewField() {
    this._Field.createLangFields(this.langID, this.field).then(
      () => {
        this._$mdToast.showSimple(this._AppMessages.newFieldSuccess);
        this._$state.go('app.viewLang', {langID: this.langID});
      },
      () => {
        this._$mdToast.showSimple(this._AppMessages.generalError);
      }
    );
  }

  editField() {
    return this._Field.editLangField(this.langID, this.field).then(
      () => {
        this._$mdToast.showSimple(this._AppMessages.editFieldSuccess);
        this._$state.go('app.viewLang', {langID: this.langID});
      },
      () => {
        this._$mdToast.showSimple(this._AppMessages.generalError);
      });
  }

  actionFn() {
    if (this.fieldId === 'new') {
      this.createNewField();
    } else {
      this.editField();
    }
  }

  activate() {
    if (this.fieldID) {
      this._Field.getField(this.langID, this.fieldID).then(
        (field) => {
          this.field = field;
        });
    }
  }
}

export default AddEditFieldController;
