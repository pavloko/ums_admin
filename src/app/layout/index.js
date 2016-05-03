import headerComponent from './header.component';
import AppviewComponent from './app-view.component';

export default angular.module('app.layout', [])
  .component('appHeader', headerComponent)
  .component('appView', AppviewComponent);
