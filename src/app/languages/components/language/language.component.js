class LanguageController {
  constructor(Language, AppMessages, $mdToast) {
    'ngInject';
    this._Language = Language;
    this._$mdToast = $mdToast;
    this._AppMessages = AppMessages;
  }

  deleteLang(langID) {
    this._Language.destroyLang(langID).then(
      () => {
        this._$mdToast.showSimple(this._AppMessages.langDeleteSuccess);
      },
      () => {
        this._$mdToast.showSimple(this._AppMessages.generalError);
      });
  }
}

let language = {
  templateUrl: 'app/languages/components/language/language.html',
  bindings: {
    lang: '='
  },
  controller: LanguageController
};

export default language;
