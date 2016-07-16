import Email from './emails.service';
import EmailRoute from './emails.route';

export default angular.module('app.emails', [])
  .config(EmailRoute)
  .service('Email', Email);
