class SingleFormController {
  constructor(Form, form) {
    'ngInject';
    this._Form = Form;

    this.form = form;
    console.log(this.form);
  }
}

export default SingleFormController;
