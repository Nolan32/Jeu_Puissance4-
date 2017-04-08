var counter=0;
var result = [	[0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0,	0],
				[0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0]	];

var a ;
var row;
var col;


/*
$('tbody td').click(function() {
	counter++;
	if (counter %2 === 0) {
//console.log(counter)
	return $(this).addClass('p1');
	}

	$(this).addClass('p2');
});
*/

	$('button').click(function(){
		counter++;		
		counter % 2 === 0 ? a = 'p2' : a = 'p1';
	});







$('button').click(function(){
	var button = parseInt($(this).html());
	col = button;
	var tableau = result;
	for(var i =0; i<6;i++){

		if(tableau[button][i] === 0){
			//tableau[button].push('a');
			result = tableau;
			//console.log(tableau);	
			row = i;
			console.log(row);
			return tableau[button][i] = a;		
		}
	}
	return tableau;
	$('tbody tr').eq(row).addClass('"' + a + '"');
})
console.log(result);
	//console.log(tableau)


//$('tr').eq(-row).children().eq(col).addClass('"' + a + '"');



