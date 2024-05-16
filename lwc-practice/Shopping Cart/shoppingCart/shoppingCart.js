import { LightningElement } from 'lwc';

export default class ShoppingCart extends LightningElement {

    cartItems = [
        {
            "name":"Item 1",
            "quantity":2,
            "price": 15,
            "id":"item1"
        },
        {
            "name":"Item 2",
            "quantity": 1,
            "price": 50,
            "id":"item2"
        }
    ]

    get totalPrice(){

        let totalPrice = 0;
        this.cartItems.forEach((item) => { 
            totalPrice += item.price;
        });

        return totalPrice;
    }
}