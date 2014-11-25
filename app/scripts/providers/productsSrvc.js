'use strict';

app.factory('productsSrvc', ['$http', function ($http) {
  var sheetUrl = 'https://spreadsheets.google.com/feeds/list/0AiyPGkqVtM-pdHkwZlV3NFVDRGdsVmRUeGRyN0pPbFE/od6/public/basic';
  var service = {
    data: '',
    async: function () {
      $http.get(sheetUrl).
        success(function(data, status, headers, config) {
          // TODO parse xml
          service.data = data;
          console.log('success');
        }).
        error(function(data, status, headers, config) {
          console.log('error fetching google spreadsheet data.');
        });
    }
  };
  return service;
}]);