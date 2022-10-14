'use strict';
const appController = function($scope){
  $scope.currentTasks = [];
  $scope.addTask = function (task){
      $scope.currentTasks.push({
        ...task,
        index:$scope.currentTasks.length
      });
      console.log($scope.currentTasks);
  }
  $scope.removeTask = function(index,password){
      if($scope.currentTasks[index].password === password){
        $scope.currentTasks.splice(index,1);
        $scope.currentTasks[index].displayModal = false;
        alert("task removed successfully")
      }
      else{
        alert("Incorrect password");
      }
  }
  $scope.displayModalHandler = function(index){
    console.log("clicked");
    $scope.currentTasks[index].displayModal = true;
  }
  $scope.closeModal = function (index) {
    $scope.currentTasks[index].displayModal = false;
  }
  $scope.editTask = function(index,task){
      $scope.currentTasks[index] = task;
  }
}
const loginController = function ($scope,$location) {
  $scope.loginHandler = function (params) {
    $location.url("/dashboard");
  }
}
const signupController = function ($scope) {
  
}
const appModule = angular.module("app",["ngRoute"]);

appModule.config(function ($routeProvider,$locationProvider) {
  $routeProvider
  .when("/login",{
    templateUrl:"ui/login.html",
    controller:"loginController"
  })
  .when("/dashboard",{
    templateUrl:"ui/dashboard.html",
    controller:"appController"
  })
  .when("/signup",{
    templateUrl:"ui/login.html",
    controller:"signupController"
  })
  .otherwise({
    redirectTo:"/login"
  })
  $locationProvider.html5Mode(true); 
})


appModule.controller("appController",appController);
appModule.controller("loginController",loginController);
appModule.controller("signupController",signupController);

