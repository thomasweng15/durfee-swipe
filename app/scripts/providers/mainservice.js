app.factory('mainService', ['$rootScope', function ($rootScope) {

    var service = {

        model: {
            searchInput: '',
            shoppingBag: {
                totalPrice: 0.00,
                remainingCredit: 8.00,
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
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);
