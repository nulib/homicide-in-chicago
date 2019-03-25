var image = document.getElementById('thumbnail');
var modal = document.getElementById('fullsize');
var close = document.getElementsByClassName('modal-close')[0];

image.onclick = function() {
  modal.style.display = 'block';
}
close.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target.className == 'modal-background') {
    modal.style.display = 'none';
  }
}
