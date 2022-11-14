// 1
let body = document.getElementById('body');
document.addEventListener('DOMContentLoaded', (first) => 
{
body.insertAdjacentHTML(
  'afterbegin', 
  '<div id="before_edit">Подія — це сигнал від браузера про те, що щось сталося. <br> Все DOM-ноди подають такі сигнали (хоча події бувають не лише в DOM).</div>');
});
document.addEventListener('keydown', function(event) 
{
  if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) 
  {
    body.insertAdjacentHTML(
      'afterbegin', 
      '<textarea id="editing" name="second_stage" rows="5" cols="25">Подія — це сигнал від браузера про те, що щось сталося. <br> Все DOM-ноди подають такі сигнали (хоча події бувають не лише в DOM).</textarea>');
    event.preventDefault()
    let editingField = document.getElementById('before_edit');
    editingField.remove();
  }
  if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) 
  {
    editedText = document.getElementById('editing');
    body.insertAdjacentHTML(
      'afterbegin','<div class="after_edit">'+ editedText.value +'</div>' )
    let afterEdit = document.getElementById('editing');
    afterEdit.remove();
    event.preventDefault();
  }
});
//2
cPrev = -1;
function sortBy(c) 
{
    rows = document.getElementById('sortable').rows.length;
    columns = document.getElementById('sortable').rows[0].cells.length;
    arrTable = [...Array(rows)].map(e => Array(columns)); 
    for (ro=0; ro<rows; ro++) 
    {
        for (co=0; co<columns; co++) 
        {
            arrTable[ro][co] = document.getElementById('sortable').rows[ro].cells[co].innerHTML;
        }
    }
    th = arrTable.shift();
      if (c !== cPrev) 
      {
        arrTable.sort(
            function (a, b) 
            {
                if (a[c] === b[c]) 
                {
                    return 0;
                } 
                else 
                {
                    return (a[c] < b[c]) ? -1 : 1;
                }
            }
        );
    } 
    else 
    { 
        arrTable.reverse();
    }
      cPrev = c; 
    arrTable.unshift(th); 
    for (ro=0; ro<rows; ro++) 
    {
        for (co=0; co<columns; co++) 
        {
            document.getElementById('sortable').rows[ro].cells[co].innerHTML = arrTable[ro][co];
        }
    }
}
//3
var p = document.querySelector('p');
p.addEventListener('click', function init() 
{
    p.removeEventListener('click', init, false);
    p.className = p.className + ' resizable';
    var resizer = document.createElement('div');
    resizer.className = 'resizer';
    p.appendChild(resizer);
    resizer.addEventListener('mousedown', initDrag, false);
}, 
false);
var startX, startY, startWidth, startHeight;
function initDrag(e) 
{
   startX = e.clientX;
   startY = e.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
   document.documentElement.addEventListener('mousemove', doDrag, false);
   document.documentElement.addEventListener('mouseup', stopDrag, false);
}
function doDrag(e) 
{
   p.style.width = (startWidth + e.clientX - startX) + 'px';
   p.style.height = (startHeight + e.clientY - startY) + 'px';
}
function stopDrag(e) 
{
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}