$(function()
{
	if (Modernizr.localstorage) {
		console.log("localstorage supported")
	  	
	  	window.localStorage.clear();

	  	if (!window.localStorage.todos){
			window.localStorage.todos = JSON.stringify([]);
		}

	 	var todolist = JSON.parse(window.localStorage.todos);

		var viewModel = 
		{
			todos : ko.observableArray(todolist)
		};
	 	ko.applyBindings(viewModel);

	  	Add("back to work again");

	  	Add("knock off");

	  	Add("knock offfff");

	  	Remove("knock off");

	} else {
	  	console.log("localStorage not supported")
	}

	function Add(todo){
		
		if (!window.localStorage.todos){
			window.localStorage.todos = JSON.stringify([]);
		}
		
		var todolist = JSON.parse(window.localStorage.todos);
	 	todolist.push(todo);
	 	todolist = _.uniq(todolist);
	 	window.localStorage.todos = JSON.stringify(todolist);
	 	viewModel.todos(todolist);
	};

	function Remove(todo){
		if (!window.localStorage.todos){
			window.localStorage.todos = JSON.stringify([]);
		}

	 	var todolist = JSON.parse(window.localStorage.todos);

	 	todolist = _.without(todolist, todo);
	 	window.localStorage.todos = JSON.stringify(todolist);
	 	viewModel.todos(todolist);
	};
});


