function EmailRoute($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.emails', {
      url: '/emails',
      templateUrl: 'app/emails/emails.html',
      title: 'Emails',
      controller: function(emails) {
        this.emails = emails;
      },
      controllerAs: '$ctrl',
      resolve: {
        emails: function(Email) {
          return Email.getEmails();
        }
      }
   });
}

export default EmailRoute;
