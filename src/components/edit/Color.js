goog.provide('ga_color_directive');

(function() {

  var module = angular.module('ga_color_directive', []);

  /**
   * This directive add an interface where you can modify a glStyle.
   */
  module.directive('gaColor', function($window) {
    return {
      require: 'ngModel',
      restrict: 'A',
      templateUrl: 'components/edit/partials/color.html',
      scope: {
        ngModel: '=',
        ngChange: '='
      },
      link: function(scope, element, attrs) {

        scope.$watch('ngModel', function(newValue, oldValue) {
          if (newValue && newValue !== oldValue) {
            scope.ngChange(newValue);
          }
        });

        scope.toHexString = function(c) {
          if (!/#/.test(c)) {
            return $window.tinycolor(c).toHexString();
          }
          return c;
        };

        var colorInput = $('<input type="color" value="!" />')[0];
        scope.useInputColorSelector = (colorInput.type === 'color' &&
            colorInput.value !== '!');

        scope.colors = [
          { value: 'lightgray', label: 'light_gray' },
          { value: '#acc864', label: 'light_green' },
          { value: '#3a8841', label: 'green' },
          { value: '#40b5bc', label: 'light blue' },
          { value: '#0000ff', label: 'blue' },
          { value: '#ffff99', label: 'light_yellow' },
          { value: '#ffca00', label: 'yellow' },
          { value: '#f28500', label: 'orange' },
          { value: '#dc0f0f', label: 'red' },
          { value: '#80379c', label: 'purple' },
          { value: 'black', label: 'black' },
          { value: 'white', label: 'white' }
        ];
      }
    };
  });
})();
