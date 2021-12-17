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
      quantity: 0,
      cost: 3,
    },
    {
      id: 2,
      food: 'Burger',
      image: './assets/1.jpg',
      quantity: 0,
      cost: 10,
    },
    {
      id: 3,
      food: 'Pizza',
      image: './assets/1.jpg',
      quantity: 0,
      cost: 15,
    },
  ];

  shoppingCart = {
    a: { title: 'Chicken Drumsticks', quantity: 0 },
    b: { title: 'Burger', quantity: 0 },
    c: { title: 'Pizza', quantity: 0 },
  };

  showModal = false;
  totalQuantity = 0;
  subTotal = 0;
  grandTotal = 0;

  addToCart(refEl: HTMLElement) {
    this.totalQuantity++;

    if (refEl.dataset.item == 'Burger') {
      this.shoppingCart.b.quantity++;
      console.log(this.shoppingCart.b);
    } else if (refEl.dataset.item == 'Chicken Drumstick') {
      this.shoppingCart.a.quantity++;
    } else if (refEl.dataset.item == 'Pizza') {
      this.shoppingCart.c.quantity++;
    }

    this.subTotal += Number(refEl.dataset.cost);
    this.grandTotal = this.subTotal + 0.1 * this.subTotal + 5;
  }
}
