import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems;
  total = 0;

  constructor(private store: StoreService, private router: Router) {
  }

  ngOnInit() {
    this.cartItems = this.store.getData();
    if (this.cartItems.cartCount === undefined) {
      this.router.navigate(['']);
    } else {
      this.cartItems.items.forEach((item) => {
        if (item.cartCount > 0) {
          this.total += (item.cartCount * item.price);
        }
      });
    }
  }

}
