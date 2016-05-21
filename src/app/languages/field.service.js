class Field {
  constructor($firebaseArray, $firebaseObject, AppConstants, Firebase) {
    'ngInject';
    var langRef = new Firebase(AppConstants.firebase + 'langs');

    this.langRef = langRef;
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray  = $firebaseArray;
  }

  getField(langID, fieldID) {
    return this.$firebaseArray(this.langRef.child(langID).child('fields'))
      .$loaded().then(
        (fields) => {
          return fields.$getRecord(fieldID);
        });
  }

  createLangFields(langID, field) {
    return this.$firebaseArray(this.langRef.child(langID).child('fields'))
      .$loaded().then(
        (fields) => {
          return fields.$add(field);
        });
  }

  editLangField(langID, field) {
    return this.$firebaseArray(this.langRef.child(langID).child('fields'))
      .$loaded().then(
        (fields) => {
          var oldField = fields.$getRecord(field.$id);
          oldField.fieldLabel = field.fieldLabel
          return fields.$save(oldField);
        });
  }

  destroyField(langID, fieldID) {
    return this.$firebaseArray(this.langRef.child(langID).child('fields'))
      .$loaded().then(
        (fields) => {
          return fields.$remove(fields.$getRecord(fieldID));
        });
  }
}
export default Field;
