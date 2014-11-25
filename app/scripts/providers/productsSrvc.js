'use strict';

app.factory('productsSrvc', ['$http', function ($http) {
  var sheetUrl = 'https://spreadsheets.google.com/feeds/list/0AiyPGkqVtM-pdHkwZlV3NFVDRGdsVmRUeGRyN0pPbFE/od6/public/basic';
  var service = {
    products: [],
    async: function () {
      $http.get(sheetUrl).
        success(function(data, status, headers, config) {
          service.products = parseXMLData(data);
          console.log('success');
        }).
        error(function(data, status, headers, config) {
          console.log('error fetching google spreadsheet data.');
        });
    }
  };

  // This function is very fragile as it relies on the google
  // sheet being formatted a certain way. 
  function parseXMLData (xmlText) {
    var products = [];
    var x2js = new X2JS();
    var jsonObj = x2js.xml_str2json(xmlText);
    for (var i in jsonObj.feed.entry) {
      var productObj = {};
      var productName = jsonObj.feed.entry[i].title.__text;

      // priceEntry stores 'price: 1.00' string, for example.
      var priceEntry = jsonObj.feed.entry[i].content.__text;
      // priceStr stores '1.00' string.
      var priceStr = priceEntry.split(': ')[1];
      var productPrice = parseFloat(priceStr);

      productObj[productName] = productPrice;
      products.push(productObj);
    }
    return products;
  };

  return service;
}]);