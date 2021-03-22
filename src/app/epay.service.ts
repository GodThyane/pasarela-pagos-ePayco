import {Injectable} from '@angular/core';
import {Product} from './models/product';

declare let ePayco: any;

@Injectable({
  providedIn: 'root'
})
export class EpayService {
  private handler: any;

  constructor() {
    this.handler = ePayco.checkout.configure({
      key: '00102fe98383cc1ce5ad37ce8a9bb7de',
      test: true
    });
  }

  buyProduct(product: Product): void {
    let data = {
      //Parametros compra (obligatorio)
      name: product.nombre,
      description: product.descripcion,
      invoice: '1234',
      currency: 'cop',
      amount: product.precio,
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      confirmation: 'http://localhost:4200',
      response: 'http://localhost:4200',

      //Onpage="false" - Standard="true"
      external: 'false'

    };
    this.handler.open(data);
  }
}
