class Auth {
  constructor($firebaseAuth, AppConstants, Firebase) {
    'ngInject';
    var ref = new Firebase(AppConstants.firebase);
    this.firebaseAuthObject = $firebaseAuth(ref);
    // Object to store our user properties
    this.currentUser = null;

    this.firebaseAuthObject.$onAuth((auth)=> {
      this.currentUser = auth;
    });
  }

  attemptAuth(user) {
    return this.firebaseAuthObject.$authWithPassword(user)
      .then((auth) => {
        this.currentUser = auth
      });
  }

  getCurrentUser() {
    return this.currentUser;
  }

  requireAuth() {
    return this.firebaseAuthObject.$requireAuth();
  }
}
export default Auth;
