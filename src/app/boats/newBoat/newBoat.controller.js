class newBoatController {
  constructor(Boats, $mdToast, $state, AppMessages) {
    'ngInject';

    this._Boats = Boats;
    this._$mdToast = $mdToast;
    this._$state = $state;
    this._AppMessages = AppMessages;
  }

  createNewBoat() {
    this._Boats.saveBoat(this.boat)
      .then(
        (boat) => {
          this._$mdToast.showSimple(this._AppMessages.newBoatSuccess);
          this._$state.go('app.singleBoat', {boatID: boat.key()});
        },
        () => {
          this._$mdToast.showSimple(this._AppMessages.newBoatFail);
        }
    );
  }
}

export default newBoatController;
