class Language {
  constructor($firebaseArray, $firebaseObject, AppConstants, Firebase) {
    'ngInject';
    var langRef = new Firebase(AppConstants.firebase + 'langs');

    this.langRef = langRef;
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray  = $firebaseArray;
  }

  getLangs() {
    return this.$firebaseArray(this.langRef);
  }

  createLang(lang) {
    return this.$firebaseArray(this.langRef).$add(lang);
  }

  getLang(langID) {
    return this.$firebaseObject(this.langRef.child(langID));
  }

  createLangFields(langID) {
    return this.$firebaseArray(this.langRef.child(langID).child('fields'));
  }

  destroyLang() {

  }
}
export default Language;
