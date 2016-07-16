// Configuration
// =============
import AppConfig from './config/app.config';
import runBlock from './config/app.run';
import AppConstants from './config/app.constants';
import AppMessages from './config/app.messages';
// App Modules
// =============
import './main';
import './layout';
import './dashboard';
import './auth';
import './services';
import './helpers';
import './boats';
import './languages';
import './emails';

angular.module('app', [
  'ngMaterial',
  'ngAnimate',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ui.router',
  'firebase',


  'app.main',
  'app.layout',
  'app.dashboard',
  'app.auth',
  'app.services',
  'app.helpers',
  'app.boats',
  'app.languages',
  'app.emails'
])
  .constant('AppConstants', AppConstants)
  .constant('AppMessages', AppMessages)
  .config(AppConfig)
  .run(runBlock);
