class NewLangController {
  constructor(Language, $mdToast, AppMessages, $state) {
    'ngInject';
    this._Language = Language;
    this._$state = $state;
    this._$mdToast = $mdToast;
    this._AppMessages = AppMessages;
  }

  createNewLang() {
    this._Language.createLang(this.lang).then(
      (langRef) => {
        this._$mdToast.showSimple(this._AppMessages.newFormSuccess);
        this._$state.go('app.viewLang', {langID: langRef.key()});
      });
  }

  cancelNewLang() {
    this._$state.go('app.allLangs');
  }


}

export default NewLangController;
