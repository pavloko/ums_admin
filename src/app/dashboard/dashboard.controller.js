class DashboardController {
  constructor(Boats) {
    'ngInject';

    this.Boats = Boats;
    this.boats = Boats.getBoats().$loaded().then((boats) => this.boats=boats);
  }
}

export default DashboardController;
