class Boat {
  constructor($firebaseArray, $firebaseObject, AppConstants, Firebase) {
    'ngInject';
    var boatRef = new Firebase(AppConstants.firebase + 'boats');

    this.$firebaseObject = $firebaseObject;
    this.boatRef = boatRef;
    this.$firebaseArray  = $firebaseArray;
    this.boats = this.$firebaseArray(this.boatRef);
  }

  getBoats() {
    return this.$firebaseArray(this.boatRef);
  }

  getBoat(boatUID) {
    return this.$firebaseObject(this.boatRef.child(boatUID));
  }

  saveBoat(boat) {
    return this.boats.$add(boat);
  }
}

export default Boat;
