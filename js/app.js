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

// fonction qui permet d'alterner tour impair => joueur 1 et tour pair => joueur 2


	$('button').click(function(){
		counter++;		
		counter % 2 === 0 ? a = 'p2' : a = 'p1';
	});




// fonction qui stocke le choix d'un joueur dans un tableau  [[ligne1[colonne1, colonne2, etc,], [ligne2[...]], ... ]


$('button').click(function(){
	var button = parseInt($(this).html());
	col = button;
	var tableau = result;
	for(var i = 5; i >= 0; i--){

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



// fonction qui régénère le tableau html dynamiquement avec des background-colors pour les cases séléctionnées par les joueurs

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






// fonction pour analyser les conditions de victoire en colonne

$('button').on('click',function(){
	


	var stockVal="";

for(var j = 0; j <= 6; j++){
	for (var i = 0; i < result.length ; i++) {
		
			stockVal += result[i][j]; 
			
		}

		if (stockVal.includes("p1p1p1p1") ) {
			window.alert("win");
			console.log('p1');
		}else if (stockVal.includes("p2p2p2p2")){

			console.log('p2')
		}
	}

});



// fonction pour analyser les condtitions de victoire en ligne

$('button').on('click', function(){
	
	var stockVal = "";

	for(var i = 0; i <= 5; i++){

		for(var j = 0; j < result[i].length; j++){

			stockVal += result[i][j];
		

			if(stockVal.includes("p1p1p1p1")){
				console.log("p1");
			} else if(stockVal.includes("p2p2p2p2")){
				console.log('p2');
			}
		}

	}
});


















	//console.log(result);
	// var m =0;
	// var tableau = result;
	// var countWinP1 = 0;
	// var countWinP2 = 0;
	// var check;

	// var prevColor;
	// var lenght;
	
	// for(var w = 0; w <= tableau.length; w++){
			
	// 		prevColor = tableau[w][0];

	// 		for (var i = 1 ; i <= 6; i++){


	// 			if( prevColor == tableau[w][i] ){

	// 				length++;
	// 			}else{
	// 				length = 0;
				
	// 				prevColor = tableau[w][i];
				
	// 			console.log( length );
	// 			}
	// 			if( length >= 3 ){
	// 				alert( 'gagné !' );
	// 			}


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
	// 		}		
	// };
		
//});
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



