class NewFormController {
  constructor(Form, $mdToast, AppMessages, $state) {
    'ngInject';
    this._Form = Form;
    this._$state = $state;
    this._$mdToast = $mdToast;
    this._AppMessages = AppMessages;
  }

  createNewForm() {
    this._Form.createNewForm(this.form).then(
      (formRef) => {
        this._$mdToast.showSimple(this._AppMessages.newFormSuccess);
        this._$state.go('app.singleForm', {formID: formRef.key()});
      }
    );
  }


}

export default NewFormController;
