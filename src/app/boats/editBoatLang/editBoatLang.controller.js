class ModalController {
  constructor(field, boat, lang, $mdDialog, $mdToast) {
    'ngInject';
    this.boat = boat;
    this.field = field;
    this.lang = lang;
    this._$mdDialog = $mdDialog;
    this._$mdToast = $mdToast;
  }

  editField() {
    // This is a quick fix for bug when only fist edited
    // field gets changed after route change
    this.boat.languages.map((lang) => {
      if (lang.abbreviation === this.lang.abbreviation) {
        lang.fields.map((field) => {
          if (field.fieldLabel === this.field.fieldLabel) {
            field.fieldValue = this.field.fieldValue;
          }
        });
      }
    });
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
        boat: this.boat,
        lang: this.lang
      }
    });
  }
}

export default EditBoatLangController;
