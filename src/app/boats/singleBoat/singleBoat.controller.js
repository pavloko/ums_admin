class singleBoatController {
  constructor(Boats, $state, AppMessages, boat) {
    'ngInject';

    this._Boats = Boats;
    this._$state = $state;
    this._AppMessages = AppMessages;
    this.boat = boat;
  }
}

export default singleBoatController;
