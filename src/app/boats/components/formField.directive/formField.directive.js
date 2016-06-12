function formField($compile, $parse, $timeout) {
  'ngInject';
   return {
      restrict: 'E',
      templateUrl: 'app/boats/components/formField.directive/formField.html',
      replace: true,
      link: function(scope, element, attr) {
            scope.title = attr.title ? attr.title : 'Поле';
            scope.arrayName = attr.name ? attr.name : 'field';
            scope.formName = attr.form ? attr.form : 'form';
            scope.objectName = attr.obj ? attr.obj : 'field';
            scope.numberOfFormFields = 1;
            var mdInput = angular.element(element.children()[0]);
            scope.addFormField = () => {
              mdInput.after(angular.element($compile(
                `<md-input-container class="md-block">
                    <label>Cсылка на ${scope.title} ${scope.numberOfFormFields}</label>
                    <input name="${scope.arrayName}_${scope.numberOfFormFields}"
                        ng-model="$ctrl.${scope.objectName}.${scope.arrayName}.url_${scope.numberOfFormFields++}">
                  </md-input-container>`)(scope)));
            };
            // Waits until the boat object loads in the boatController
            // directive compiles earlier than boat object can load
            $timeout(() => {
              var imagesObj = $parse(attr.images)(scope);
              Object.keys(imagesObj).map(() => {
                scope.addFormField();
              });
            }, 2000);
      }
  }
}

export default formField;
