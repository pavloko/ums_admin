class ModalController {
  constructor($mdDialog, Language, boat, $mdToast) {
    'ngInject';
    this._$mdDialog = $mdDialog;
    this._$mdToast = $mdToast;
    Language.getLangs().$loaded().then((langs) => {
      this.languages = langs;
    });
    this.boat = boat;
  }

  closeDialog() {
    this._$mdDialog.hide();
  }

  selectLanguage(langToAdd) {
    // Check if languages array exist
    if (!angular.isArray(this.boat.languages)) {
      this.boat.languages = [];
      this.boat.languages.push(langToAdd);
      this.boat.$save();
      this._$mdDialog.hide();
      this._$mdToast.showSimple("Язык добавлен.");
      return;
    }

    // Check if language already added to boat
    var langAdded = this.boat.languages.some((lang) => {
      return lang.abbreviation === langToAdd.abbreviation;
    });

    if (!langAdded) {
      this.boat.languages.push(langToAdd);
      this.boat.$save();
      this._$mdDialog.hide();
      this._$mdToast.showSimple("Язык добавлен.");
    } else {
      this._$mdDialog.hide();
      this._$mdToast.showSimple("Вы уже добавили данный язык.");
    }
  }
}

class ViewBoatController {
  constructor(boat, Language, Boats, $state, AppMessages, $mdToast, $mdDialog) {
    'ngInject';

    this._Boats = Boats;
    this._Language = Language;
    this._$state = $state;
    this._AppMessages = AppMessages;
    this._$mdToast = $mdToast;
    this._$mdDialog = $mdDialog;
    this.boat = boat;
  }

  deleteBoat() {
    this._Boats.destroyBoat(this.boat).then(
      () => {
        this._$mdToast.showSimple(this._AppMessages.boatDeleteSuccess);
        this._$state.go('app.dashboard');
      },
      () => {
        this._$mdToast.showSimple(this._AppMessages.generalError);
    });
  }

  deleteBoatLanguage(langToDelete) {
    this.boat.languages.map((lng, index) => {
      if (lng.abbreviation === langToDelete.abbreviation) {
        this.boat.languages.splice(index, 1);
        this.boat.$save();
      }
    });
  }

  addBoatLanguage() {
    this._$mdDialog.show({
      templateUrl: 'app/boats/components/languageListDialog.html',
      controller: ModalController,
      controllerAs: '$ctrl',
      clickOutsideToClose: true,
      fullscreen: true,
      locals: {
        boat: this.boat
      }
   });
  }
}


export default ViewBoatController;
