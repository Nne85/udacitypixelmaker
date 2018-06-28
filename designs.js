
// Select size input
// I declared my variables
var height,width,color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
	event.preventDefault();
	//methods of height and width are created and made to have input values
	height= $('#inputHeight').val();
	width= $('#inputWidth').val();
	makeGrid(height,width);
	
})
// create a loop so that the tables(the pixelCanvas) can be created
function makeGrid(x, y) {
	$('tr').remove();
	for (var i = 1; i<=x; i++){
		
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		// nested loop is created
		for (var j =1; j<=y; j++){
			$('#table' + i).append('<td></td>');

		}

	}
	$('td').click(function addColor(){
		// here the colorPicker is used to give a color as value
		color = $('#colorPicker').val();

		if ($(this).attr('style')){
			$(this).removeAttr('style')

		}else {

			$(this).attr('style','background-color:' + color);
		}

	})
}