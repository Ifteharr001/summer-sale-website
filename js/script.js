
let totalNumber = 0;
function clickButton(element){
    const totalValue = document.getElementById('total');
    const totalValueString = totalValue.innerText;
    const total = parseFloat(totalValueString);

    const discountTotalValue = document.getElementById('discount-total');
    const discountTotalValueString = discountTotalValue.innerText;
    const discount = parseFloat(discountTotalValueString);

    const finalTotalValue = document.getElementById('final-total');
    const finalTotalValueString = finalTotalValue.innerText;
    const finalTotal = parseFloat(finalTotalValueString);;

    const applyButton = document.getElementById('apply-btn');
    const purchaseButton = document.getElementById("purchase-btn");


    const selectedItemContainer = document.getElementById('selected-items')
    const itemName = element.childNodes[3].childNodes[7].innerText;
    const count = selectedItemContainer.childElementCount;
    const p = document.createElement('p');
    p.innerText = ` ${count + 1}. ${itemName}`;
    selectedItemContainer.appendChild(p);

    const price = element.childNodes[3].childNodes[9].innerText.split(" ")[0];
    totalNumber = parseInt(totalNumber) + parseInt(price);
    document.getElementById('total').innerText = totalNumber;
    if(totalNumber > 1){
        purchaseButton.removeAttribute('disabled')
    } else{
        purchaseButton.setAttribute('disabled')
    }
    if(totalNumber >= 200){
        applyButton.removeAttribute('disabled')
    }else{
        applyButton.setAttribute('disabled')
    }
}


 document.getElementById('apply-btn').addEventListener('click', function () {
        const couponCode = document.getElementById('apply-input').value;
        const totalValue = parseFloat(document.getElementById('total').textContent);

        if (couponCode === "SELL200") {
            const discount = totalValue * 0.2;
            const finalTotal = totalValue - discount;

            document.getElementById('discount-total').textContent = discount.toFixed(2);
            document.getElementById('final-total').textContent = finalTotal.toFixed(2);
        }
    });

