/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)
//
// example:
// const Bill = Ember.Object.extend({
//   equalShare: Ember.computed('numPeople', 'totalCost', function(){
//     return Number(this.totalCost / this.numPeople).toFixed(2);
//   }),
// });





const Order = Ember.Object.extend({
  orderPrice: Ember.computed('unitPrice', 'quantity', function(){
    return ((this.unitPrice * this.quantity).toFixed(2));
  })
});

const Cart = Ember.Object.extend({
  orders: [],

  addToCart(unitPrice, quantity){
    let orders = this.get('orders');
    let newOrder = Order.create({unitPrice: unitPrice, quantity: quantity});
    orders.push(newOrder);
  },

  totalPrice: Ember.computed('orders@each.orderPrice', function(){
    let orders = this.get('orders');
    let total = 0;
    orders.forEach((order) => {total += order.orderPrice});
    return total;
  })
});

let myCart = Cart.create();
myCart.get('addToCart')(5.00, 2);
myCart.get('orderPrice');
