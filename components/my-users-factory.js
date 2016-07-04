(function(){
  'use strict';
  angular.module('myApp.myUsersFactory', [])

  .factory('myUsersFactory', myUsersFactory);

  function myUsersFactory(){
    this.users = ['Rodolfo', 'Paulo', 'Thiago'];
  };
})();