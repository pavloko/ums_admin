class ModalController {
  constructor(field, boat, $mdDialog, $mdToast) {
    'ngInject';
    this.boat = boat;
    this.field = field;

    this._$mdDialog = $mdDialog;
    this._$mdToast = $mdToast;
  }

  editField() {
    this.boat.$save().then(() => {
      this._$mdToast.showSimple('Изменили значение поля.');
      this.closeDialog();
    });
  }

  closeDialog() {
    this._$mdDialog.hide();
  }
}

class EditBoatLangController {
  constructor(boat, $stateParams, $mdDialog, $mdToast) {
    'ngInject';
    this.boat = boat;
    this._$mdDialog = $mdDialog;
    this._$mdToast = $mdToast;
    // Find language
    this.boat.languages.map((lang) => {
      if (lang.abbreviation === $stateParams.lang) {
        this.lang = lang;
        // Because fields in Languages is a FirebaseObject
        // And we just copied instance of language in addBoatLanguage
        // We need to normalize fields array
        if (!angular.isArray(this.lang.fields)) {
          var keys = Object.keys(this.lang.fields);
          var tempArray = [];
          keys.map((key) => {
            tempArray.push(this.lang.fields[key]);
          });
          this.lang.fields = tempArray;
        }
      }
    });
  }

  editLangFieldValue(field) {
    this._$mdDialog.show({
      templateUrl: 'app/boats/editBoatLang/editLangFieldValue.html',
      controller: ModalController,
      controllerAs: '$ctrl',
      fullscreen: true,
      clickOutsideToClose: true,
      locals: {
        field: field,
        boat: this.boat
      }
    });
  }

  deleteLangField(field) {
    this.lang.fields.map((fld, index) => {
      if (fld.fieldLabel === field.fieldLabel) {
        this.lang.fields.splice(index, 1);
        this.boat.$save().then(() => {
          this._$mdToast.showSimple('Удалил поле.');
        });
      }
    });
  }
}

export default EditBoatLangController;
