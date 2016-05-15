function langFields($compile) {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/languages/components/langFields/langFields.html',
    replace: true,
    link: function(scope, element) {
      var numberOfFormFields = 1;
      var mdInput = angular.element(element.children()[0]);
      scope.addFormField = () => {
        mdInput.after(angular.element($compile(`<md-input-container class="md-block">
            <label>Новое поле</label>
            <input name="name"
              ng-model="$ctrl.form.labels.fieldLabel_${numberOfFormFields++}"
              md-maxlength="20"
              required>
            <div ng-messages="newForm.name.$error">
              <div ng-message="required">Нельзя добавить пустое поле.</div>
              <div ng-message="md-maxlength">
                Поля должны быть не больше 20 символов.
              </div>
            </div>
          </md-input-container>`)(scope)));
      };
    }
  }
}

export default langFields;
