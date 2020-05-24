/**
 * Created by wwaller on 11/27/16.
 */
(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheck);

    LunchCheck.$inject = ['$scope'];
    function LunchCheck ($scope) {
        $scope.typicalLunch = '';
        $scope.lunchCheckResponse = '';

        $scope.itemCount = function countArrayItems (items) {
            var lunchItemCount = 0;
            var lunchItemArray = [];

            if (items.trim() !== '' && items !== null &&
                items !== undefined && items != Infinity) {
                lunchItemArray = items.split(',');
                for (var item in lunchItemArray) {
                    if (lunchItemArray[item].trim().length > 0) {
                        lunchItemCount += 1;
                    }
                }
            }

            return lunchItemCount;
        };

        $scope.isTooMuch = function checkMealSize () {
            var noOfItems =
                $scope.itemCount($scope.typicalLunch);
            var returnedMessage = 'Please enter data first';
            if (noOfItems> 0 && noOfItems <= 3) {
                returnedMessage = 'Enjoy!';
            }
            else if (noOfItems > 3) {
                returnedMessage = 'Too much!';
            }

            $scope.lunchCheckResponse = returnedMessage;
        };

    }
})();
