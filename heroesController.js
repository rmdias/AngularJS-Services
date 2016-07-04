(function(){
  'use strict';
  angular
  .module('heroesApp.heroesController', [])
  .controller('heroesController', heroesController);

  heroesController.$inject = ['heroesProvider', 'heroesService', 'heroesFactory']
  function heroesController(heroesProvider, heroesService, heroesFactory){
    console.log('heroesProvider -> ', heroesProvider)
    console.log('heroesService -> ', heroesService)
    console.log('heroesFactory -> ', heroesFactory)
  };
})();