var app=angular.module('OrderModule',[]);

app.controller('createOrder', function($scope){
	$scope.setCustId=function(cid){
		$scope.cid=cid;
	}
	$scope.setOrdered=function(){
		$scope.ordered=true;
	}
	$scope.setAddress=function(){
		$scope.address=true;
	}
});
app.controller('orderlist',function($scope,orders){
	$scope.orders=orders.getOrders();
});