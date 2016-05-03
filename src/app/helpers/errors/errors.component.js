class ErrorsCtrl {
  constructor() {
    'ngInject';
  }
}

let ErrorsComponent = {
  bindings: {
    errors: '='
  },
  controller: ErrorsCtrl,
  templateUrl: 'app/helpers/errors/errors.html'
}

export default ErrorsComponent;
