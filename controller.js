(function(){
  'use strict';
  angular.module('myApp.myUsersController', [])
  .controller('myUsersController', myUsersController);

  myUsersController.$inject = ['myUsersProvider']
  function myUsersController(myUsersProvider){
    console.log(myUsersProvider)
  };
})();