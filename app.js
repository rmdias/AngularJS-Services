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
  .config(configApp);

  function configApp(heroesProviderProvider) {
    var newHeroes = ['Wesley Safadão', 'Batman', 'Captain America'];
    heroesProviderProvider.updateHeroes(newHeroes);
  };
})();