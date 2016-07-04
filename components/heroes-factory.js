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
      // getHeroPower \o/
    };
  };
})();