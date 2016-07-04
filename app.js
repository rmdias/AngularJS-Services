(function(){
  'use strict';
  angular.module('myApp', [
    'myApp.myUsersProvider',
    'myApp.myUsersService',
    'myApp.myUsersFactory',
    'myApp.myUsersController'
  ])

  .config(function(myUsersProviderProvider){
    // myUsersProviderProvider.updateUsers(['André', 'Paulo', 'Anderson']);
  });
})();