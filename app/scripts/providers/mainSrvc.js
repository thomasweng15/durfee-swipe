'use strict';

app.factory('mainSrvc', ['$rootScope', function ($rootScope) {

    var service = {

        model: {
            creditLimit: 8.00,
            searchInput: '',
            shoppingBag: {
                totalPrice: 0.00,
                remainingCredit: function (model) {
                    return model.creditLimit - model.shoppingBag.totalPrice;
                },
                items: []
            },
            suggestionsLabel: 'Show Suggestions',
            suggestionToggled: false
        },

        SaveState: function () {
            sessionStorage.mainService = angular.toJson(service.model);
        },

        RestoreState: function () {
            service.model = angular.fromJson(sessionStorage.mainService);
        }
    };

    $rootScope.$on('savestate', service.SaveState);
    $rootScope.$on('restorestate', service.RestoreState);

    return service;
}]);
