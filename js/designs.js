// Select color input
var color = document.getElementById('colorPicker');

// Select size input
var size = document.getElementById('sizePicker');

// Set canvas variable
var canvas = document.getElementById('pixelCanvas');

// Function to clear grid for new canvas
function clear(){
  canvas.innerHTML = "";
}

// Function to make the grid
function makeGrid() {
  clear();
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  for (var h = 0; h < height; h++){
    var row = document.createElement('tr');
    canvas.appendChild(row);
    for (var w = 0; w < width; w++){
      var col = document.createElement('td');
      canvas.appendChild(col);
    }
  }
// Function to change cell color with user's selected color
  canvas.addEventListener('click', function(){
    if(event.target.nodeName == "TD"){
      event.target.style.backgroundColor = color.value;
    }
  })
}

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});
