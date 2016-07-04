(function(){
  'use strict';
  angular.module('myApp.myUsersService', [])

  .service('myUsersService', myUsersService);

  function myUsersService(){
    this.users = ['Rodolfo', 'Paulo', 'Thiago'];
  };
})();