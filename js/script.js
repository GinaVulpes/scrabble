var svgns = "http://www.w3.org/2000/svg";
var grid_pos=1;
triple_word_score_pos=[1,8,15,106,120,211,218,225]
double_letter_score_pos=[4,12,53, 37,39, 46, 60, 93,97,99,103, 109, 117, 123,127,129,133, 166, 173, 180, 187,189, 214, 222]
  for (var i = 0; i < 15; i += 1) {
    for (var j = 0; j < 15; j += 1) {
      var rect = document.createElementNS(svgns, 'rect');
      rect.setAttributeNS(null, 'y', i*50);
      rect.setAttributeNS(null, 'x', j*50);
      rect.setAttributeNS(null, 'height', '50');
      rect.setAttributeNS(null, 'width', '50');
      rect.setAttributeNS(null, 'class', 'snapToMe');
      rect.setAttributeNS(null, 'accept', '.tile div');
      rect.setAttributeNS(null, 'hoverClass', 'hovered');
      rect.setAttributeNS(null, 'id', 'grid_pos_' + grid_pos);
      if (grid_pos==113){
        rect.setAttributeNS(null, 'fill', '#f0d2e7');
      }
      else if (triple_word_score_pos.indexOf(grid_pos)!=-1){
        rect.setAttributeNS(null, 'fill', '#ee392f');
      }

       else if (double_letter_score_pos.indexOf(grid_pos)!=-1){
        rect.setAttributeNS(null, 'fill', '#b5daee');
      }
        else if (i==j || i==14-j){
        rect.setAttributeNS(null, 'fill', '#aed696');
      }
      document.getElementById("grid").appendChild(rect);
      grid_pos=grid_pos+1
    }
  }

// var path = document.createElementNS(svgns, 'path');
// path.setAttributeNS(null, 'd', "m55,237 74-228 74,228L9,96h240");
// path.setAttributeNS(null, 'width', 50);
// path.setAttributeNS(null, 'height', 50);
// document.getElementById("grid_star").appendChild(path);


  $( init );
 
function init() {
  $('.tile').draggable({
    containment:'#main-content',
    cursor:'move',
    snap:'.snapToMe'
  });
}