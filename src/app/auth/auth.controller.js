class AuthController {
  constructor(Auth, AppMessages, $state, $mdDialog, $mdToast) {
    'ngInject';
    this._Auth = Auth;
    this._$state = $state;
    this._$mdToast = $mdToast;
    this._$mdDialog = $mdDialog;
    this._AppMessages = AppMessages;

    this.isSubmitting = null;
    this.errors = null;
  }

  login() {
    this.isSubmitting = true;
    this._Auth.attemptAuth(this.user)
      .then(()=> {
          this.isSubmitting = true;
          this._$mdToast.showSimple(this._AppMessages.authSuccess);
          this._$state.go('app.dashboard')
          this._$mdDialog.cancel();
        },
        ()=> {
          this.isSubmitting = false;
          this.errors = this._AppMessages.authFail;
          this._$mdToast.showSimple(this._AppMessages.authFail)
        });
  }

  closeDialog() {
    this._$mdDialog.cancel();
  }
}

export default AuthController;
