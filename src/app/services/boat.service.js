class Boat {
  constructor($firebaseArray, $firebaseObject, AppConstants, Firebase) {
    'ngInject';
    var boatRef = new Firebase(AppConstants.firebase + 'boats');
    this.boatRef = boatRef;

    this.$firebaseArray  = $firebaseArray;
    this.$firebaseObject = $firebaseObject;
    this.boats = this.$firebaseArray(this.boatRef);
  }

  getBoats() {
    return this.$firebaseArray(this.boatRef).$loaded();
  }

  getBoat(boatUID) {
    return this.$firebaseObject(this.boatRef.child(boatUID)).$loaded();
  }

  saveBoat(boat) {
    return this.boats.$add(boat);
  }

  editBoat(boat) {
    var boatToEdit = this.boats.$getRecord(boat.$id);
    boatToEdit.name = boat.name;
    boatToEdit.images = boat.images;
    boatToEdit.videos = boat.videos;
    boatToEdit.languages = boat.languages;
    return this.boats.$save(boatToEdit);
  }

  destroyBoat(boat) {
    var boatToDelete = this.boats.$getRecord(boat.$id);
    return this.boats.$remove(boatToDelete);
  }
}

export default Boat;
