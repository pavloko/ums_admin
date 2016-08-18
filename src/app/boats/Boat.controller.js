class BoatController {
  constructor(Boats, $mdToast, $state, AppMessages, $scope, $stateParams) {
    'ngInject';

    this.$scope = $scope;
    this._Boats = Boats;
    this._$mdToast = $mdToast;
    this._$state = $state;
    this._AppMessages = AppMessages;

    this.boatID = $stateParams.boatID;
    this.boat = {
      name: '',
      images: [''],
      videos: [''],
      languages: [],
      web_link: '',
      graph: ''
    };
    this.activate();
  }

  createNewBoat() {
    this._Boats.saveBoat(this.boat)
      .then(
        (boat) => {
          this._$mdToast.showSimple(this._AppMessages.newBoatSuccess);
          this._$state.go('app.viewBoat', {boatID: boat.key()});
        },
        () => {
          this._$mdToast.showSimple(this._AppMessages.newBoatFail);
       });
  }

  editBoat() {
    this._Boats.editBoat(this.boat).then(
      () => {
        this._$state.go('app.viewBoat', {boatID: this.boat.$id});
        this._$mdToast.showSimple(this._AppMessages.editBoatSuccess);
      },
      () => {
         this._$mdToast.showSimple(this._AppMessages.newBoatFail);
      });
  }

  actionFn() {
    if (this.action === 'new') {
      this.createNewBoat();
    } else if ( this.action === 'edit') {
      this.editBoat();
    }
  }

  activate() {
    if (angular.isUndefined(this.boatID)) { return false; }
    this._Boats.getBoat(this.boatID).then((boat) => {
      this.boat = boat;
    });
  }

  addItem(item) {
    if (item ==='image') {
      this.boat.images.push('');
    } else if (item === 'video') {
      this.boat.videos.push('');
    }
  }

  removeItem(item, index) {
    if (item === 'image') {
      if (this.boat.images.length === 1) return;
      this.boat.images.splice(index, 1);
    } else if (item === 'video') {
      if (this.boat.videos.length === 1) return;
      this.boat.videos.splice(index, 1);
    }
  }
}

export default BoatController;
