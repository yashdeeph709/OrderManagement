var app=angular.module('OrderModule',[]);

app.controller('createOrder', function($scope){
	$scope.setCustId=function(cid){
		console.log("setCustId called with:"+cid);
		$scope.cid=cid;
	}
	$scope.setOrdered=function(){
		$scope.ordered=true;
	}
	$scope.editOrder=function(){
		$scope.ordered=false;
	}

});
app.controller('orderlist',function($scope,orders){
	$scope.orders=orders.getOrders();
});