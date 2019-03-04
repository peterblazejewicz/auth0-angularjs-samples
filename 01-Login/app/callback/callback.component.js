(function () {

  'use strict';

  function CallbackController() {}

  angular
    .module('app')
    .component('callback', {
      bindings: {},
      controller: CallbackController,
      templateUrl: './app/callback/callback.html',
    });

})();