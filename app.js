(function () {
  'use strict';

  angular.module('LunchChecker', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = '';
    $scope.message = null; 
    $scope.messageType = '';

    $scope.checkLunch = function () {
      if (!$scope.lunchItems || $scope.lunchItems.trim().length === 0) {
        $scope.message = 'Please enter data first';
        $scope.messageType = 'error';
        return;
      }

      const listItems = $scope.lunchItems
        .split(',')
        .map(item => item.trim())
        .filter(item => item.length !== 0);

      if (listItems.length === 0) {
        $scope.message = 'Please enter data first';
        $scope.messageType = 'error';
      } else if (listItems.length <= 3) {
        $scope.message = 'Enjoy!';
        $scope.messageType = 'success';
      } else {
        $scope.message = 'Too much!';
        $scope.messageType = 'success';
      }
    };
  }
})();
