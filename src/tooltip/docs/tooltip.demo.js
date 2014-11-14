'use strict';

angular.module('mgcrea.ngStrapDocs')

.config(function($bsTooltipProvider) {
  angular.extend($bsTooltipProvider.defaults, {
    html: true
  });
})

.controller('TooltipDemoCtrl', function($scope, $q, $sce, $bsTooltip) {

  $scope.tooltip = {title: 'Hello Tooltip<br />This is a multiline message!', checked: false};

  // Controller usage example
  /*
  var myTooltip = $bsTooltip(angular.element(document.querySelector('#test')), {title: 'Hello tooltip', placement: 'right'});
  $scope.showTooltip = function() {
    myTooltip.$promise.then(myTooltip.show);
  };
  $scope.hideTooltip = function() {
    myTooltip.$promise.then(myTooltip.hide);
  };
  */

});
