var app=angular.module('OrderManagement',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'partials/main.html'
    }).when('/orders',{
        templateUrl:'partials/orders.html'
    }).when('/selectProduct',{
        templateUrl:'partials/selectProduct.html'
    }).when('/createOrder',{
        templateUrl:'partials/createOrder.html'
    }).when('/customers',{
        templateUrl:'partials/customers.html'
    }).when('/products',{
        templateUrl:'partials/products.html'
    }).when('/createCustomer',{
        templateUrl:'partials/createCustomer.html'
    }).when('/createProduct',{
        templateUrl:'partials/createProduct.html'
    }).when('/ordereditems',{
        templateUrl:'partials/ordereditems.html'
    });
});