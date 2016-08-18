class EditBoatLangController {
  constructor(boat, Boats, $stateParams, AppMessages, $mdDialog, $mdToast) {
    'ngInject';
    this.boat = boat;
    this._$mdToast = $mdToast;
    this._Boats = Boats;
    this._AppMessages = AppMessages;
    this.isEditingFields = false;
    // Find language
    this.boat.languages.map((lang) => {
      if (lang.abbreviation === $stateParams.lang) {
        this.lang = lang;
      }
    });
  }

  showEditFields() {
    this.isEditingFields = !this.isEditingFields;
  }

  updateBoat() {
    this._Boats.editBoat(this.boat).then(() => {
      this._$mdToast.showSimple(this._AppMessages.editBoatSuccess);
      this.isEditingFields = !this.isEditingFields;
    });
  }
}

export default EditBoatLangController;
