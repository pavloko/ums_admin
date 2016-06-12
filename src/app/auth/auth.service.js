class Auth {
  constructor($firebaseAuth, AppConstants, Firebase, $q) {
    'ngInject';
    var ref = new Firebase(AppConstants.firebase);
    this.firebaseAuthObject = $firebaseAuth(ref);

    // Object to store our user properties
    this.currentUser = null;

    this.firebaseAuthObject.$onAuth((auth)=> {
      this.currentUser = auth;
    });
    this._$q = $q;
  }

  attemptAuth(user) {
    return this.firebaseAuthObject.$authWithPassword(user)
      .then((user) => {
        this.currentUser = user;
      });
  }

  getCurrentUser() {
    return this.currentUser;
  }

  requireAuth() {
    return this.firebaseAuthObject.$requireAuth();
  }

  logout() {
    return this.firebaseAuthObject.$unauth();
  }
}
export default Auth;
