'use strict';

angular.module('mkcooksApp')
  .filter('markdown', ['$sce', '$showdown', function ($sce, $showdown) {
    return function (input) {
      return $sce.getTrustedHtml($showdown.makeHtml(input));
    };
  }]);
