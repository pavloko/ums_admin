class ViewBoatController {
  constructor(boat, Boats, $state, AppMessages, $mdToast) {
    'ngInject';

    this._Boats = Boats;
    this._$state = $state;
    this._AppMessages = AppMessages;
    this._$mdToast = $mdToast;
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
}

export default ViewBoatController;
