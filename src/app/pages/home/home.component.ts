import {Component, HostListener, OnInit} from '@angular/core';
import {ApiUtilsService} from '../../services/api-utils.service';
import {ResModel} from '../../models/models';
import {StoreService} from '../../services/store.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  items;
  categories;
  cartCount = 0;
  searchText = '';
  showCat = true;
  selectCatIndex = null;
  isSticky = false;
  filter = {
    name: '',
    category: '',
  };
  favFilter = {
    ...this.filter,
    isFavourite: true
  };

  constructor(private apiUtils: ApiUtilsService, private store: StoreService, private router: Router) {
  }

  ngOnInit() {
    this.apiUtils.getData().subscribe((res: ResModel) => {
      this.items = res.recipes;
      this.categories = res.categories;
    });
  }

  toggleCat() {
    this.showCat = !this.showCat;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // we'll do some stuff here when the window is scrolled
    let scrollTop = $(window).scrollTop(),
      elementOffset = $('#cat-list').offset().top,
      distance = (elementOffset - scrollTop - 250);
    if (distance > 0) {
      this.isSticky = false;
      this.showCat = true;
    } else {
      this.isSticky = true;
    }
  }

  changeRoute() {
    this.store.setData({items: this.items, cartCount: this.cartCount});
    this.router.navigate(['/cart']);
  }


  addToCart(i) {
    this.items[i].cartCount = this.items[i].cartCount === undefined ? 1 : this.items[i].cartCount + 1;
    this.cartCount = this.cartCount + 1;
  }

  filterfun(type, name, i) {
    switch (type) {
      case 'cat':
        this.filter.category = name;
        this.selectCatIndex = i;
        break;
      case 'name':
        this.filter.name = name;
        break;
      default:
        this.filter = {
          name: '',
          category: '',
        };
    }
    this.favFilter = {
      ...this.filter,
      isFavourite: true
    };
  }

}
