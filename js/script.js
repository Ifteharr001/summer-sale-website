// .parentNode.childNodes[3].childNodes[3].childNodes[7]
function clickButton(element){
    const selectedItemContainer = document.getElementById('selected-items')
    const itemName = element.childNodes[3].childNodes[7].innerText;
    const count = selectedItemContainer.childElementCount;
    const p = document.createElement('p');
    p.innerText = ` ${count + 1}. ${itemName}`;
    selectedItemContainer.appendChild(p);
}