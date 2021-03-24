//Is Page Loading
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

function ready() {
    //Gets Array of Remove Buttons
    var removeCartItemButtons = document.getElementsByClassName("btn-danger")

    //Add Event Listener for each Remove Button
    for (var i = 0; i < removeCartItemButtons.length; i++) {

        //Get individual button
        var button = removeCartItemButtons[i]

        //On Click
        button.addEventListener('click', removeCartItem)
    }

    //Gets Array of Quantity Inputs
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')

    //Add Event Listener for each Remove Button
    for (var i = 0; i < quantityInputs.length; i++) {

        //Get individual input
        var input = quantityInputs[i]

        //On Click
        input.addEventListener('change', quantityChanged)
    }
}

function removeCartItem(event) {
    //Get clicked button
    var buttonClicked = event.target

    //Delete Row
    buttonClicked.parentElement.parentElement.remove()

    //Update Cart Total
    updateCartTotal()
}

function quantityChanged(event) {

    //Get changed input
    var input = event.target

    //If NaN or less than 0
    if (isNaN(input) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()

}

function updateCartTotal() {

    //Get Array of Cart Elements
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]

    //Get Array of Cart Rows
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')

    //Init Total
    var total = 0

    //For each Row get price & quantity. Then calc new total price
    for (var i = 0; i < cartRows.length; i++) {

        //Get Current Row
        var cartRow = cartRows[i]

        //Get Price Column (TODO: Remove Price Header)
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]

        //Remove $ From Price Number
        var price = priceElement.innerText.replace("$", "")

        //Prints Price Header and Price
        console.log(price)

        //Get Quantity Column
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

        //This correctly prints the HTML Input Element in its entirity
        console.log(quantityElement)

        //This Line Breaks Everything
        try {
            //Get Quantity Value
            var quantity = quantityElement.value
        }
        catch {
        }

        //Print Qauntity
        console.log(quantity)

        //Print New Total Price
        console.log(quantity * price)

        //Calculate New Total Price
        total = total + (price * quantity)
    }

    //Store Final Total
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

