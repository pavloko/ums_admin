class ViewLangController {
  constructor(language, $log) {
    'ngInject';

    this.lang = language;
    $log.info(this.lang);
  }
}

export default ViewLangController;
