'use strict';

angular.module('com.pupil.app').controller('FooterController', function () {
 
});
angular.module('com.pupil.app').directive('pFooter', function () {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/footer.html',
    controller: 'FooterController'
  };
});
