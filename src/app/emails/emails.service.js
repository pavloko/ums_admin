class Email {
  constructor($firebaseArray, Firebase, AppConstants) {
    'ngInject';
    var emailRef = new Firebase(AppConstants.firebase + 'emails');
    this.emailRef = emailRef;
    this.$firebaseArray = $firebaseArray;
    this.emails = this.$firebaseArray(this.emailRef);
  }

  getEmails() {
    return this.$firebaseArray(this.emailRef).$loaded();
  }
}

export default Email;
