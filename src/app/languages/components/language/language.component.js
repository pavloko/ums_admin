class LanguageController {
  constructor() {
    'ngInject';
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
