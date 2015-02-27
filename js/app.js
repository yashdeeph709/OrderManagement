var app=angular.module('OrderManagement',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'partials/main.html'
    }).when('/order',{
        templateUrl:'partials/order.html'
    }).when('/createOrder',{
        templateUrl:'partials/createOrder.html'
    });
});