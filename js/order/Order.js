var app=angular.module('OrderModule',[]);

app.controller('createOrder', function($scope){
	$scope.products=[];
	$scope.itemid=0;
	$scope.setCustId=function(cid){
		$scope.cid=cid;
	}
	$scope.setOrdered=function(){
		$scope.ordered=true;
	}
	$scope.setAddress=function(){
		$scope.address=true;
	}
	$scope.addItem=function(){
		$scope.products.push({
			"itemid":$scope.itemid++,
			"id":$scope.id,
			"name":$scope.name,
			"qty":$scope.qty,
			"unit":$scope.unit,
			"total":$scope.total
		});
	}
});
app.controller('orderlist',function($scope,orders){
	$scope.orders=orders.getOrders();
});