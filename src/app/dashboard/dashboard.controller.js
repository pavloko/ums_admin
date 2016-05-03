class DashboardController {
  constructor(Boats) {
    'ngInject';

    this.Boats = Boats;
    this.boats = Boats.getBoats();
  }
}

export default DashboardController;
