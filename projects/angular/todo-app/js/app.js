// created a model for the task list
// It may come from exterenal 
var model = {
	user : "Adam",
	items : [{action : "Buy Flowers", done : false},
			{action : "Get Shoes", done : false},
			{action : "Collects Tickects", done : true},
			{action : "Call Joe", done : false}]
};

// Created the app module
let todoApp = angular.module('todoApp', []);


// Fillter the content in some pattern
todoApp.filter("checkedItems", () => {
	return function(items, showComplete) {
		var resultArr = [];
		angular.forEach(items, (item) => {
			if(item.done == false || showComplete == true) {
				resultArr.push(item);
			}
		});
		return resultArr;
	}
});


// Created a controller which bind the html block
todoApp.controller('ToDoCtrl', function($scope) {
    $scope.todo = model;

    
    $scope.incompleteCount = function () {
    	var count = 0;
    	angular.forEach($scope.todo.items, function(item) {
    		if (!item.done) { count++ }
    	});
    	return count;
    }
 

 	// This is alert for having more remaing todo left
    $scope.warningLevel = function() {
    	return $scope.incompleteCount() < 3 ? "label-success" : "label-warning" ;
    }


    // adding new todo in the list
    $scope.addNewItem = function(actionText) {
    	$scope.todo.items.push({action : actionText, done : false});
    }

});
