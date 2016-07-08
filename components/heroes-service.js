(function(){
  'use strict';
  angular
    .module('heroesApp.heroesService', [])
    .service('heroesService', heroesService);

  function heroesService(){
    this.heroes = ['Wesley Safadão', 'Batman', 'Captain America'];
    this.getHeroPower = function(hero) {
      switch (hero) {
        case 'Wesley Safadão':
          return 'Vai Safadão, Vai Safadão! \o/';
        break;
        case 'Batman':
          return "Don't have :(";
        break;
        case 'Captain America':
          return 'Super Strength';
        break;
        default:
          return false;
        break;
      }
    };
  };
})();