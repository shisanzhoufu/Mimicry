(function(){
	var a="my name is jack"
	function eating(){
		console.log(a.toLocaleUpperCase()+"  I like eat apple")
	}
	function working(){
		console.log(a.toLocaleLowerCase()+"  I need work 8 hours")
	}
	window.myModule={
		eating:eating,
		working:working
	}
	})()