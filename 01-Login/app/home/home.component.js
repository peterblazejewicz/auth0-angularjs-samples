(function () {

  'use strict';

  function HomeController(authService) {
    this.auth = authService;
  }
  HomeController.$inject = ['authService'];

  angular
    .module('app')
    .component('home', {
      bindings: {},
      controller: HomeController,
      templateUrl: './app/home/home.html',
    });

})();