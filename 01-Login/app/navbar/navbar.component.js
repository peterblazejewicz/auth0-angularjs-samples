(function () {

  'use strict';

  function NavbarController(authService) {
    this.auth = authService;
  }
  NavbarController.$inject = ['authService'];

  angular
    .module('app')
    .component('navbar', {
      bindings: {},
      controller: NavbarController,
      templateUrl: './app/navbar/navbar.html',
    });

})();