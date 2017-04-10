var counter=0;
var result = [	[0, 0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0,	0, 0],
				[0, 0, 0, 0, 0, 0, 0], 
				[0, 0, 0, 0, 0, 0, 0],	];

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
	for(var i =5; i>= 0;i--){

		if(tableau[i][button] == 0){
			//tableau[button].push('a');
			//console.log(tableau);	
			row = i;
			//console.log(row);
			tableau[i][button] = a;	
			result = tableau;
			console.log(result);
			return;	
		}
	}
	//console.log(result);
	$('tbody tr').eq(row).addClass( a );
})

	//console.log(tableau)





$('button').click(function(){
	$('tbody tr').remove();
	//console.log(result);

	for(var j = 0; j < result.length; j++){
		$('tbody').append('<tr></tr>');

		for(var k = 0; k < result[j].length; k++){
			if(result[j][k] != 0){
				$('tbody tr').last().append('<td></td>');
				$('tbody tr td').last().addClass(result[j][k]);
			}
			else {
				$('tbody tr').last().append('<td></td>');
			}
		}
	}
})




$('table').on('click',function(){
	//console.log(result);
	var m =0;
	var tableau = result;
	var countWinP1 = 0;
	var countWinP2 = 0;
	var check;

	var prevColor;
	var lenght;
	
	for(var w = 0; w <= tableau.length; w++){
			
			prevColor = tableau[w][0];

			for (var i = 1 ; i <= 6; i++){


				if( prevColor == tableau[w][i] )
					length++;
					else
					length = 0;

				prevColor = tableau[w][i];
				console.log( length );


				if( length >= 3 ){
					alert( 'gagné !' );
				}


/*
				if(tableau[w][i] === 'p1'){
					
					if(tableau[w][i] === tableau[w][i+1]){
						console.log(countWinP1++ );
						countWinP1++;
						if(countWinP1=== 4){
							alert("win");
						}
					} 
				} else if(tableau[w][i] === 'p2'){
					if(tableau[w][i] === tableau[w][i+1]){
					console.log(countWinP2++);
					}
				}
				 else{
					countWinP1= 0;
					countWinP2 = 0;
				}
*/				
			}		
	};
		
});
/*
			result[k][m] === 'p1' || result[k][m] === 'p2'){ 
			for(var m = 0; m <3; m++){
				if(result[k][m] === result[k][m+1] === result[k][m+2] === result[k][m+3]){
				alert("'"+ result[k][i] + "a gagné" + "'");
			}
			}
		}
	}
*/	
//$('tr').eq(-row).children().eq(col).addClass('"' + a + '"');



