class newBoatController {
  constructor(Boats, toastr, $state, AppMessages) {
    'ngInject';

    this._Boats = Boats;
    this._toastr = toastr;
    this._$state = $state;
    this._AppMessages = AppMessages;
  }

  createNewBoat() {
    this._Boats.saveBoat(this.boat)
      .then(
        (boat) => {
          this._toastr.success(this._AppMessages.newBoatSuccess);
          this._$state.go('app.singleBoat', {boatID: boat.key()});
        },
        () => {
          this._toastr.error(this._AppMessages.newBoatFail);
        }
    );
  }
}

export default newBoatController;
