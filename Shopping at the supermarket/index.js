let grocery=['banana','mlik']

function addToShoppingCart(newItem){
  grocery.push(newItem)
 if (grocery.length>3){
    grocery.shift()
  }
    console.log(grocery)

}
addToShoppingCart('eggs')
addToShoppingCart('cola')
addToShoppingCart('chipy') 