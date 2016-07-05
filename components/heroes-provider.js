(function(){
  'use strict';
  angular
    .module('heroesApp.heroesProvider', [])
    .provider('heroesProvider', heroesProvider);

  function heroesProvider(){
    this.heroes = ['Superman', 'Flash', 'Spider Man'];
    this.updateHeroes = function(newHeroes){
      this.heroes = newHeroes;
    }
    this.$get = function() {
      return this.heroes;
    };
  }
})();