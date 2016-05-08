class Form {
  constructor($firebaseArray, $firebaseObject, AppConstants, Firebase) {
    'ngInject';
    var formRef = new Firebase(AppConstants.firebase + 'forms');

    this.formRef = formRef;
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray  = $firebaseArray;
  }

  getForms() {
    return this.$firebaseArray(this.formRef);
  }
  /**
  * @param form {Object}
  * {
  *   'EN': [
  *       {fieldLabel: 'Boat name', fieldValue: '' },
  *       {fieldLabel: 'Boat engine', fieldValue: '' }
  *   ]
  * }
  *
  *
  *

  */
  createNewForm(form) {
    return this.$firebaseArray(this.formRef).$add(form);
  }

  getForm(formID) {
    return this.$firebaseObject(this.formRef.child(formID));
  }

  destroyForm() {

  }
}
export default Form;
