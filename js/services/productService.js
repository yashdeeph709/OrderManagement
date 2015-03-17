var app=angular.module('ProductModule');

app.factory('products',function(){
	return{
		products:[{
			"pid":"GTS2451",
			"pname":"SmartWatch",
			"brand":"Sony",
			"price":"12000",
			"stock":"120"
		},{
			"pid":"GTS2452",
			"pname":"Tablet PC",
			"brand":"Sony",
			"price":"15000",
			"stock":"80"
		},{
			"pid":"GTS2453",
			"pname":"Ipod"
		,	"brand":"Apple",
			"price":"30000",
			"stock":"45"
		},{
			"pid":"GTS2454",
			"pname":"Laptop"
,			"brand":"Asus",
			"price":"19500",
			"stock":"100"
		},{
			"pid":"GTS2455",
			"pname":"IPad"
		,	"brand":"Apple",
			"price":"30000",
			"stock":"125"
		},{
			"pid":"GTS2451",
			"pname":"Walkman",
			"brand":"Sony",
			"price":"13000",
			"stock":"100"
		}]
	};
});