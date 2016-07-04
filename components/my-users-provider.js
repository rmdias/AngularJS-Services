(function(){
  'use strict';
  angular.module('myApp.myUsersProvider', [])

  .provider('myUsersProvider', [function () {
    this.users = ['Rodolfo', 'Paulo', 'Thiago'];
    this.updateUsers = function(newUsersArr){
      this.users = newUsersArr;
    }
    this.$get = function() {
      return this.users;
    };
  }]);
})();