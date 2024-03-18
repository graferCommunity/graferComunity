var sideNavigatonMain = document.querySelector('.side-navigaton-main');
var odJS = document.querySelectorAll('.openDissition-js');
odJS.forEach(odJS => {
  odJS.addEventListener('click', () => {
    sideNavigatonMain.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

document.querySelector('.closeDissition-js').addEventListener('click', () => {
  sideNavigatonMain.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.overflowX = "hidden";

});


function expandFilterContent(content) {
  var selectedContent = document.querySelector('.' + content);
  selectedContent.classList.toggle('filter-selectors-expand');
  var changeTcon = document.querySelector('.change-' + content + '-icon');
  var attribute = changeTcon.getAttribute('name');
  attribute === 'add' ? changeTcon.setAttribute('name', 'remove') : changeTcon.setAttribute('name', 'add')
}

function openBUY(content) {

  cpid = content.getAttribute('cpid');
  pid = content.getAttribute('pid');
  if (cpid) {
    console.log(element);
  } else if (pid) {
    window.location =`http://127.0.0.1:5510/buying.html?pid=${pid}`;
    console.log(element);
  }
}