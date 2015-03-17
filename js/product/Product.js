var app=angular.module('ProductModule',[]);

app.controller('findProduct',function($scope,products){
	$scope.products=products.products;
});