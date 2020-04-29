## Пример функции с return

	function bake(degrees) {
	    var message;

	    if (degrees > 500) {
	        message = "not zbs";
	    } else if (degrees < 100) {
	        message = " to not zbs";
	    } else {
	        message = "zbs";
	    }
	    return message;
	}

	var status = bake(350);
	console.log(status);

## w
