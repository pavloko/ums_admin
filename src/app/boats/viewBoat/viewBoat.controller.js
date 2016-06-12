class ModalController {
  constructor(languages, $mdDialog) {
    'ngInject';
    this._$mdDialog = $mdDialog;
    this.languages = languages;
  }

  closeDialog() {
    this._$mdDialog.hide();
  }
}

class ViewBoatController {
  constructor(boat, Boats, $state, AppMessages, $mdToast, $mdDialog) {
    'ngInject';

    this._Boats = Boats;
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

  addBoatLanguage() {
    console.log('Hello');
    this._$mdDialog.show({
      templateUrl: 'app/boats/components/languageListDialog.html',
      disableParentScroll: true,
      clickOutsideToClose: true,
      controller: ModalController,
      fullscreen: true,
      resolve: {
        languages: function(Languages) {
          return Languages.getLangs().$loaded();
        }
      }
    });
  }
}


export default ViewBoatController;
