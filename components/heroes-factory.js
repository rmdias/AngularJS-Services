(function(){
  'use strict';
  angular
    .module('heroesApp.heroesFactory', [])
    .factory('heroesFactory', heroesFactory);

  function heroesFactory(){
    var heroes = ['Wesley Safadão', 'Batman', 'Captain America'];

    return {
      heroes : heroes,
      getHeroPower : getHeroPower
    };

    function getHeroPower(hero){
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