class NewFormController {
  constructor(Form, toastr, AppMessages, $state) {
    'ngInject';
    this._Form = Form;
    this._$state = $state;
    this._toastr = toastr;
    this._AppMessages = AppMessages;
  }

  createNewForm() {
    this._Form.createNewForm(this.form).then(
      (formRef) => {
        this._toastr.success(this._AppMessages.newFormSuccess);
        this._$state.go('app.singleForm', {formID: formRef.key()});
      }
    );
  }


}

export default NewFormController;
