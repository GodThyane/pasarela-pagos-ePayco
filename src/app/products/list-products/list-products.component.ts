import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {EpayService} from '../../epay.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public title: string;
  public products: Product[];
  public confirmed;

  constructor(private eps: EpayService) {
    this.title = 'Listado de productos';
    this.confirmed = null;
    this.products = [{
      id: 1,
      descripcion: 'IPhone 11',
      imagen: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566960958082',
      nombre: 'IPhone 11',
      precio: 150000
    },
      {
        id: 2,
        descripcion: 'IPhone 12',
        imagen: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
        nombre: 'IPhone 12',
        precio: 200000
      }];
  }

  ngOnInit(): void {
    console.log('Componente products');
  }

  buy(product: Product) {
    this.eps.buyProduct(product);
  }
}
