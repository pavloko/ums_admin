/* global moment:false */

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

angular.module('app', [
  'ngMaterial',
  'ngAnimate',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ui.router',
  'toastr',
  'firebase',


  'app.main',
  'app.layout',
  'app.dashboard',
  'app.auth'
])
  .constant('moment', moment)
  .constant('AppConstants', AppConstants)
  .constant('AppMessages', AppMessages)
  .config(AppConfig)
  .run(runBlock);
