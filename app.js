var app = angular.module('TransitApp', []);

app.controller('TransitController', function TransitController($scope) {
	$scope.busstops = [
		{
			boro:"man",
			bus: "M60",
			location: "Astoria",
			lat: 45,
			_long: 60,
			time: 6,
		},
		{
			boro:"queens",
			bus: "Q66",
			location: "Queens",
			lat: 60,
			_long: 30,
			time: 12,
		},
	  {
	    boro:"man",
			bus: "M30",
			location: "BMW",
			lat: 3,
			_long: 7,
			time: 0,
		},
		{
			boro:"bklyn",
			bus: "B54",
			location: "Greenpoint",
			lat: 45,
			_long: 60,
			time: 6,
		},
		{
			boro:"queens",
			bus: "Q30",
			location: "Flushing",
			lat: 60,
			_long: 30,
			time: 12,
		},
	  {
	    boro:"bklyn",
			bus: "B52",
			location: "MBUSA",
			lat: 3,
			_long: 7,
			time: 0,
		}
	];
})
