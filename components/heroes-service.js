(function(){
  'use strict';
  angular
  .module('heroesApp.heroesService', [])
  .service('heroesService', heroesService);

  function heroesService(){
    this.heroes = ['Wesley Safadão', 'Batman', 'Captain America'];
    this.getHeroPower = function(hero) {
      // getHeroPower \o/
    };
  };
})();