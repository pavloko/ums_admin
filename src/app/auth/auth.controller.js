class AuthController {
  constructor(Auth, AppMessages, toastr, $state, $mdDialog) {
    'ngInject';
    this._Auth = Auth;
    this._$state = $state;
    this._toastr = toastr;
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
          this._toastr.success(this._AppMessages.authSuccess);
          this._$state.go('app.dashboard')
          this._$mdDialog.cancel();
        },
        ()=> {
          this.isSubmitting = false;
          this.errors = this._AppMessages.authFail;
          this._toastr.warning(this._AppMessages.authFail)
        });
  }

  closeDialog() {
    this._$mdDialog.cancel();
  }
}

export default AuthController;
