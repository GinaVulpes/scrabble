var svgns = "http://www.w3.org/2000/svg";
  for (var i = 0; i < 15; i += 1) {
    for (var j = 0; j < 15; j += 1) {
      var rect = document.createElementNS(svgns, 'rect');
      rect.setAttributeNS(null, 'x', i*50+2);
      rect.setAttributeNS(null, 'y', j*50+2);
      rect.setAttributeNS(null, 'height', '48');
      rect.setAttributeNS(null, 'width', '48');
      rect.setAttributeNS(null, 'class', 'snapToMe');
      rect.setAttributeNS(null, 'accept', '#makeMeDraggable div');
      rect.setAttributeNS(null, 'hoverClass', 'hovered');


      document.getElementById("grid").appendChild(rect);
    }
  }


  $( init );
 
function init() {
  $('#makeMeDraggable').draggable({
    containment:'parent',
    cursor:'move',
    snap:'.snapToMe'
  });
}