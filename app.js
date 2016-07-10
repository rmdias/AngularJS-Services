(function(){
  'use strict';
  angular
    .module('heroesApp', [
      'heroesApp.heroesProvider',
      'heroesApp.heroesService',
      'heroesApp.heroesFactory',
      'heroesApp.heroesController',
      'heroesApp.heroesConstant',
      'heroesApp.heroesValue'
    ])
  .config(function(heroesProviderProvider){
    var newHeroes = ['Wesley Safadão', 'Batman', 'Captain America'];
    heroesProviderProvider.updateHeroes(newHeroes);
  });
})();