var app=angular.module('OrderManagement',['ngRoute','OrderModule','ProductModule']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'partials/main.html'
    }).when('/orders',{
        templateUrl:'partials/order/orders.html'
    }).when('/orderdetail',{
        templateUrl:'partials/order/orderdetail.html'
    }).when('/selectProduct',{
        templateUrl:'partials/product/selectProduct.html'
    }).when('/createOrder',{
        templateUrl:'partials/order/createOrder.html'
    }).when('/customers',{
        templateUrl:'partials/customer/customers.html'
    }).when('/products',{
        templateUrl:'partials/product/products.html'
    }).when('/createCustomer',{
        templateUrl:'partials/customer/createCustomer.html'
    }).when('/createProduct',{
        templateUrl:'partials/product/createProduct.html'
    }).when('/ordereditems',{
        templateUrl:'partials/order/ordereditems.html'
    });
});