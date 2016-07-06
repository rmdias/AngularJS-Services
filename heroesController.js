(function(){
  'use strict';
  angular
  .module('heroesApp.heroesController', [])
  .controller('heroesController', heroesController);

  heroesController.$inject = ['heroesProvider', 'heroesService', 'heroesFactory', 'heroesConstant', 'heroesValue']
  function heroesController(heroesProvider, heroesService, heroesFactory, heroesConstant, heroesValue){
    console.log('heroesProvider -> ', heroesProvider);
    console.log('heroesService -> ', heroesService);
    console.log('heroesService.getHeroPower(hero) -> ', heroesService.getHeroPower(heroesProvider[0]));
    console.log('heroesFactory -> ', heroesFactory);
    console.log('heroesFactory.getHeroPower(hero) -> ', heroesFactory.getHeroPower(heroesProvider[0]));
    console.log('heroesConstant -> ', heroesConstant);
    console.log('heroesValue -> ', heroesValue);
  };
})();