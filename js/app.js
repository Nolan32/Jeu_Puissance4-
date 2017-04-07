var counter=0;
var result = [[], [], [], [], [], [], []];
$('tbody td').click(function() {
	counter++;
	if (counter %2 === 0) {
//console.log(counter)
	return $(this).addClass('p1');
	}

	$(this).addClass('p2');
});

$('button').click(function(){
	var button = parseInt($(this).html());
	var tableau = result;
	for(var i =0; i<6;i++){

		if(tableau[button][i] === 'p1' || tableau[button][i] === 'p2'){
			//tableau[button].push('a');
			console.log(tableau);	
			return;		
		}
			tableau[button].push('p1')
			console.log(tableau);
			result = tableau[button];
			break;
	}

})
console.log(result);
	//console.log(tableau)



