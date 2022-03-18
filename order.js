if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}
function ready(){
    var buyNowButtons = document.getElementsByClassName('buy-now-button')
    for(var i = 0; i < buyNowButtons.length; i++){
        var button = buyNowButtons[i]
        button.addEventListener('click',buyNowClicked)
        button.addEventListener('click',buynowclicked)
    } 
}
function buynowclicked(){
    alert('Your order has been placed!')
}
function buyNowClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('card-title')[0].innerText
    var price = shopItem.getElementsByClassName('card-text-price')[0].innerText
    addItemToYourOrders(title, price)    
}
function addItemToYourOrders(title, price){
    var orderRow = document.createElement('div')
    orderRow.classList.add('order-row')
    var orderItems = document.getElementsByClassName('order-row')[0]
    var orderRowContents = `
    <div class="order-row">
            <span class="product-name">${title}</span>
            <span class="product-price">${price}</span>
    </div>`
    orderRow.innerHTML = orderRowContents
    orderItems.append(orderRow)
}
  
