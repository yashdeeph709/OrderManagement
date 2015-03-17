var app=angular.module("OrderModule");
app.factory("orders",function(){
	return{
		orders:[{
		"orderid":"SD2355",
		"custname":"origin Ltd",
		"date":"12/11/2014",
		"status":"processing"
		},{
		"orderid":"SD2356",
		"custname":"morgan Ltd",
		"date":"12/11/2014",
		"status":"processing"
			},{
		"orderid":"SD2355",
		"custname":"systango Ltd",
		"date":"12/11/2014",
		"status":"processing"
			},{
		"orderid":"SD2355",
		"custname":"Vengicx Ltd",
		"date":"12/11/2014",
		"status":"processing"
		}],
		getOrders:function(){
			return this.orders;
		}
	}
});