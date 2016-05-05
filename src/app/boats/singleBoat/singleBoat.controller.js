class singleBoatController {
  constructor(Boats, toastr, $state, AppMessages, boat) {
    'ngInject';

    this._Boats = Boats;
    this._toastr = toastr;
    this._$state = $state;
    this._AppMessages = AppMessages;
    this.boat = boat;
  }
}

export default singleBoatController;
