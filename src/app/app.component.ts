import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = [
    {
      id: 1,
      food: 'Chicken Drumstick',
      image: './assets/1.jpg',
      cost: 3,
    },
    {
      id: 2,
      food: 'Burger',
      image: './assets/1.jpg',
      cost: 10,
    },
    {
      id: 3,
      food: 'Pizza',
      image: './assets/1.jpg',
      cost: 15,
    },
  ];

  shoppingCart = {
    a: { title: 'Chicken Drumsticks', quantity: 0, cost: 3},
    b: { title: 'Burger', quantity: 0, cost: 10 },
    c: { title: 'Pizza', quantity: 0, cost: 15 },
  };

  showModal = false;
  totalQuantity = 0;
  subTotal = 0;
  grandTotal = 0;

  addToCart(refEl: HTMLElement) {
    this.totalQuantity++;

    if (refEl.dataset.item == 'Burger') {
      this.shoppingCart.b.quantity++;
    } else if (refEl.dataset.item == 'Chicken Drumstick') {
      this.shoppingCart.a.quantity++;
    } else if (refEl.dataset.item == 'Pizza') {
      this.shoppingCart.c.quantity++;
    }

    this.subTotal += Number(refEl.dataset.cost);
    this.grandTotal = this.subTotal + 0.1 * this.subTotal + 5;
  }

  removeFromCart(item: string) {
    if (item == 'Burger') {
      this.totalQuantity  = this.totalQuantity - this.shoppingCart.b.quantity
      this.subTotal = this.subTotal - (this.shoppingCart.b.quantity * this.shoppingCart.b.cost)
      this.grandTotal = this.subTotal + 0.1 * this.subTotal;
      this.shoppingCart.b.quantity = 0;
    } else if (item == 'Chicken Drumsticks') {
      this.totalQuantity  = this.totalQuantity - this.shoppingCart.a.quantity
      this.subTotal = this.subTotal - (this.shoppingCart.a.quantity * this.shoppingCart.a.cost)
      this.grandTotal = this.subTotal + 0.1 * this.subTotal;
      this.shoppingCart.a.quantity = 0;
    } else if (item == 'Pizza') {
      this.totalQuantity  = this.totalQuantity - this.shoppingCart.c.quantity
      this.subTotal = this.subTotal - (this.shoppingCart.c.quantity * this.shoppingCart.c.cost)
      this.grandTotal = this.subTotal + 0.1 * this.subTotal;
      this.shoppingCart.c.quantity = 0;
    }
  }
}
